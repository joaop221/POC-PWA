import { BaseResponse } from "./base.response";

export class ItemResponse<T> extends BaseResponse {
    item: T;
}