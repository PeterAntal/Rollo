export interface OperationResultCache {
  /** Returns a result for the supplied  */
  runQuery<T, K>(query: CacheableOperation<T, K>): Promise<T>;
}

/** An abstract representation of a computation of an operation which is invariant/unchanging from the perspective of the consumer(e.g. a query or computation). */
export interface CacheableOperation<T, K> {
  runOperation(queryResultCache: OperationResultCache): Promise<T>;
  getKey(): string;
  getType(): string;
  getParams(): K;
}
