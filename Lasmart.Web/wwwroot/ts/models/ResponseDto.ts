export class ResponseDto {
    isSuccess = true;
    result: object;
    message = "";
    errorMessages: Array<string>;
}