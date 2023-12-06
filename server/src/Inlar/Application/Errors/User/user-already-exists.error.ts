import { ServiceError } from "src/Base/Errors/service-error";

export class UserAlreadyExistsError implements ServiceError {
    message: string = "Este usuário já existe";
}