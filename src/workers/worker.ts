import "../OperationModel/Fibonacci";
import "../OperationModel/DiceRollOperation";
import { InMemoryOperationResultCache } from "../OperationModel/InMemoryOperationResultCache";
import { OperationFactory } from "../OperationModel/OperationFactory";
import { workerResponse, workerRequest } from "./contracts";

// Worker.ts
const ctx: Worker = self as any; // eslint-disable-line no-restricted-globals

async function run(request: workerRequest): Promise<workerResponse> {
    const cache = InMemoryOperationResultCache.getInstance();

    const query = OperationFactory.getInstance().instantiate(
        request.type,
        request.params
    );
    const result = await cache.runQuery(query);
    // Post data to parent thread
    const response: workerResponse = {
        id: request.id,
        type: request.type,
        result: JSON.stringify(result),
    };

    return response;
}

// Respond to message from parent thread
ctx.addEventListener("message", event => {
    const dataset = event.data as workerRequest;
    run(dataset).then((response: any) => {
        ctx.postMessage(response);
    });
});
