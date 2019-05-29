export interface workerRequest {
    id: string;
    type: string;
    /** JSON stringified params object */
    params: string;
}

export interface workerResponse {
    id: string;
    type: string;
    /** JSON stringified Response */
    result: string;
}
