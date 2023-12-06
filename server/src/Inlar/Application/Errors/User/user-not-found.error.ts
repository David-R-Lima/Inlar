import { ServiceError } from "src/Base/Errors/service-error";

export class UserNotFoundError implements ServiceError {
    message: string = "Este usuário não foi encontrado";
}