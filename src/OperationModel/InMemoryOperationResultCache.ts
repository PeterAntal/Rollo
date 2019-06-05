import { OperationResultCache, CacheableOperation } from "./ResultCache";

interface OperationDescription<T> {
    result: T;
    resultPromise: Promise<T>;
}

export class InMemoryOperationResultCache implements OperationResultCache {
    private cache: { [key: string]: Promise<any> };
    private static instance: InMemoryOperationResultCache;

    public static getInstance(): InMemoryOperationResultCache {
        if (InMemoryOperationResultCache.instance === undefined) {
            InMemoryOperationResultCache.instance = new InMemoryOperationResultCache();
        }
        return InMemoryOperationResultCache.instance;
    }

    private constructor() {
        this.cache = {};
    }

    public async runQuery<T, K>(query: CacheableOperation<T, K>): Promise<T> {
        const key = query.getKey();
        let result: Promise<T>;
        if (this.cache[key]) {
            result = this.cache[key];
        } else {
            result = query.runOperation(this);
            this.cache[key] = result;
        }
        return result;
    }
}
