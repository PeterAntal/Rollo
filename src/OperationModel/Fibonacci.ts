import { CacheableOperation, OperationResultCache } from "./ResultCache";
import { OperationFactory } from "./OperationFactory";

export interface FibonacciParams {
    iterations: number;
}

export class FibonacciOperation
    implements CacheableOperation<number, FibonacciParams> {
    private iterations: number;

    public constructor(params: FibonacciParams) {
        this.iterations = params.iterations;
    }

    public getKey() {
        return this.getType() + JSON.stringify(this.getParams());
    }
    public getType(): string {
        return "FibonacciOperation";
    }

    public getParams(): FibonacciParams {
        return { iterations: this.iterations };
    }

    async runOperation(
        queryResultCache: OperationResultCache
    ): Promise<number> {
        let result;
        if (this.iterations === 0 || this.iterations === 1) {
            result = 1;
        } else {
            const a = await queryResultCache.runQuery(
                new FibonacciOperation({ iterations: this.iterations - 1 })
            );
            const b = await queryResultCache.runQuery(
                new FibonacciOperation({ iterations: this.iterations - 2 })
            );
            result = a + b;
        }
        return result;
    }
}

OperationFactory.getInstance().RegisterConstructor(
    "FibonacciOperation",
    FibonacciOperation
);
