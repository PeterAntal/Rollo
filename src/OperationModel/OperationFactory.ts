import { CacheableOperation } from "./ResultCache";

export interface OperationConstructor<T, K> {
  new (params: K): T;
}

export class OperationFactory {
  private cache: { [key: string]: OperationConstructor<any, any> };
  private static instance: OperationFactory;
  constructor() {
    this.cache = {};
  }

  public static getInstance(): OperationFactory {
    if (OperationFactory.instance) {
      return OperationFactory.instance;
    } else {
      OperationFactory.instance = new OperationFactory();
      return OperationFactory.instance;
    }
  }

  public RegisterConstructor(
    operationName: string,
    constructor: OperationConstructor<any, any>
  ): void {
    this.cache[operationName] = constructor;
  }

  public getConstructor(operationName: string): OperationConstructor<any, any> {
    return this.cache[operationName];
  }

  public instantiate<K>(
    operationName: string,
    params: K
  ): CacheableOperation<any, K> {
    return new this.cache[operationName](params);
  }
}
