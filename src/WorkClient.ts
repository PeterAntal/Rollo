/* eslint import/no-webpack-loader-syntax: off */
import LocalWorker from "worker-loader!./workers/worker";
import { CacheableOperation } from "./OperationModel/ResultCache";

// WorkClient.ts
export class WorkClient {
    private worker: LocalWorker;
    private static instance: WorkClient;
    private id = 0;

    private constructor() {
        this.worker = new LocalWorker();
    }

    public static getInstance(): WorkClient {
        if (WorkClient.instance === undefined) {
            WorkClient.instance = new WorkClient();
        }
        return WorkClient.instance;
    }

    public async runOperation<T>(
        operation: CacheableOperation<T, any>
    ): Promise<T> {
        const id = this.id++;
        // Respond to message from parent thread
        const payload = {
            type: operation.getType(),
            params: operation.getParams(),
            id: id,
        };

        const promise = new Promise((resolve, reject) => {
            const handler = (response: any) => {
                if (response.type === "message" && response.data.id === id) {
                    const parsedResponse = JSON.parse(response.data.result);
                    resolve(parsedResponse);
                    this.worker.removeEventListener("message", handler);
                }
            };
            this.worker.addEventListener("message", handler);
        });

        this.worker.postMessage(payload);

        return promise as Promise<T>;
    }
}
