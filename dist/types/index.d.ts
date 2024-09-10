export type User = {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
};
export interface AxiosRequestOptions {
    url: string;
    timeout?: number;
    retries?: number;
    cacheDuration?: number;
}
type CacheData = {
    data: any;
    expiry: number;
};
export type CacheStore = Record<string, CacheData>;
export {};
