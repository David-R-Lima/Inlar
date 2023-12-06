import { ServiceError } from "src/Base/Errors/service-error";

export class DonationNotFound implements ServiceError {
    message: string = "Esta doação não foi encontrada";
}