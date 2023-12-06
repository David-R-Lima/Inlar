import {
    HttpCode,
    Controller,
    HttpException,
    HttpStatus,
    Get,
} from "@nestjs/common"
import { GetAllDonatorAndDonationsUseCase } from "src/Inlar/Application/UseCases/Donator/get-all-donators-and-donations.usecase"

@Controller("/donator")
export class GetAllDonatorAndDonationsController{
    constructor(
        private getAllDonatorAndDonationsUseCase: GetAllDonatorAndDonationsUseCase,
    ) {}

    @Get()
    @HttpCode(201)
    async handle(){

        const result = await this.getAllDonatorAndDonationsUseCase.execute({})

        if(result.isLeft()){
            throw new HttpException(result.value, HttpStatus.BAD_REQUEST)
        }

        return result
    }
}