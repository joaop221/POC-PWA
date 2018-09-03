import { BaseResponse } from "./base.response";

export class ListResponse<T> extends BaseResponse {
    item: T[];
}