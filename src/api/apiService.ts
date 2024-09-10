import axios from "axios";
import { AxiosRequestOptions, CacheStore } from "../types";

const cacheStore: CacheStore = {};

const BASE_URL = "https://jsonplaceholder.typicode.com";

const RETRIES = 3;
const TIMEOUT = 3000;
const CACHE_DURATION = 5 * 60 * 1000; // DEFAULT: 5 minutes

export const apiService = async <T>({
	url,
	retries = RETRIES,
	timeout = TIMEOUT,
	cacheDuration = CACHE_DURATION,
}: AxiosRequestOptions): Promise<T> => {

	const cacheKey = `${BASE_URL}${url}`;

	if (cacheStore[cacheKey] && cacheStore[cacheKey].expiry > Date.now()) {
    console.log(cacheStore);
    console.log(cacheKey);
    console.log(cacheStore[cacheKey]);
		console.log("Returning cached data", cacheStore[cacheKey].data);

		return cacheStore[cacheKey].data;
	}

	const makeRequest = async (remainingRetries: number): Promise<T> => {
		try {
			const response = await axios.get<T>(url, {
				timeout
			});

			cacheStore[cacheKey] = {
				data: response.data,
				expiry: Date.now() + cacheDuration,
			};

			return response.data;
		} catch (error) {
			if (remainingRetries > 0) {
				return await makeRequest(remainingRetries - 1);
			}

			throw error;
		}
	};

	return await makeRequest(retries);
};
