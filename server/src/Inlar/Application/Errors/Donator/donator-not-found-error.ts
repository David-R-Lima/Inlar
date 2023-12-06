import { ServiceError } from "src/Base/Errors/service-error";

export class DonatorNotFound implements ServiceError {
    message: string = "Doador não foi encontrado"
}