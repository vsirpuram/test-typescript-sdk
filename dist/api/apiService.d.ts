import { AxiosRequestOptions } from "../types";
export declare const apiService: <T>({ url, retries, timeout, cacheDuration, }: AxiosRequestOptions) => Promise<T>;
