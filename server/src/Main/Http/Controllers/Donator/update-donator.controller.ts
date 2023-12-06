import {
    Body,
    HttpCode,
    Controller,
    HttpException,
    HttpStatus,
    Put,
} from "@nestjs/common"
import { z } from "zod"
import { UpdateDonatorUseCase } from "src/Inlar/Application/UseCases/Donator/update-donator.usecase"

const updateDonatorBody = z.object({
    id_donator: z.number(),
    name: z.string().optional(),
    address: z.string().optional(),
    email: z.string().optional(),
    cellPhone: z.string().optional(),
    cpf: z.string().optional()
})

type UpdateDonatorBody = z.infer<typeof updateDonatorBody>

@Controller("/donator")
export class UpdateDonatorController{
    constructor(
        private updateDonatorUseCase: UpdateDonatorUseCase,
    ) {}

    @Put()
    @HttpCode(201)
    async handle(@Body() body: UpdateDonatorBody){
        const { id_donator, name, address, email, cellPhone, cpf } = updateDonatorBody.parse(body)

        const result = await this.updateDonatorUseCase.execute({
            id_donator,
            donatorProps: {
                name, 
                address, 
                email, 
                cellPhone, 
                cpf
            }
        })

        if(result.isLeft()){
            throw new HttpException(result.value, HttpStatus.BAD_REQUEST)
        }
    }
}