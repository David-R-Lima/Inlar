import {
    HttpCode,
    Controller,
    HttpException,
    HttpStatus,
    Delete,
    Body
} from "@nestjs/common"
import { DeleteDonatorUseCase } from "src/Inlar/Application/UseCases/Donator/delete-donator.usecase"
import { z } from "zod"

const deleteDonatorBody = z.object({
    id_donator: z.number()
})

type DeleteDonatorBody = z.infer<typeof deleteDonatorBody>

@Controller("/donator")
export class DeleteDonatorController{
    constructor(
        private deleteDonatorUseCase: DeleteDonatorUseCase,
    ) {}

    @Delete()
    @HttpCode(200)
    async handle(@Body() body: DeleteDonatorBody){

        const { id_donator } = deleteDonatorBody.parse(body)

        const result = await this.deleteDonatorUseCase.execute({
            id_donator
        })

        if(result.isLeft()){
            throw new HttpException(result.value, HttpStatus.BAD_REQUEST)
        }

        return result
    }
}