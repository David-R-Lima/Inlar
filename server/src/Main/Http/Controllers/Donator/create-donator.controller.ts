import {
    Body,
    Post,
    HttpCode,
    Controller,
    HttpException,
    HttpStatus,
} from "@nestjs/common"
import { z } from "zod"
import { CreateDonatorUseCase } from "src/Inlar/Application/UseCases/Donator/create-donator.usecase"

const createDonatorBody = z.object({
    name: z.string(),
    address: z.string(),
    email: z.string(),
    cellPhone: z.string(),
    cpf: z.string()
})

type CreateDonatorBody = z.infer<typeof createDonatorBody>

@Controller("/donator")
export class CreateDonatorController{
    constructor(
        private createDonatorUseCase: CreateDonatorUseCase,
    ) {}

    @Post()
    @HttpCode(201)
    async handle(@Body() body: CreateDonatorBody){
        const { name, address, email, cellPhone, cpf } = createDonatorBody.parse(body)

        const result = await this.createDonatorUseCase.execute({donatorProps: {
            name, 
            address, 
            email, 
            cellPhone, 
            cpf
        }})

        if(result.isLeft()){
            throw new HttpException(result.value, HttpStatus.BAD_REQUEST)
        }
    }
}