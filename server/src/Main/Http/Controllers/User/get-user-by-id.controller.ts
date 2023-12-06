import {
    Body,
    Query,
    HttpCode,
    Controller,
    Get,
    HttpException,
    HttpStatus
} from "@nestjs/common"
import { z } from "zod"
import { GetUserByIdUseCase } from "src/Inlar/Application/UseCases/User/get-user-by-id.usecase"

const user = z.object({
    id_user: z.number()
})

type GetUserBody = z.infer<typeof user>

@Controller("/user/id")
export class GetUserByIdController{
    constructor(
        private getUserByIdUseCase: GetUserByIdUseCase,
    ) {}

    @Get()
    @HttpCode(201)
    async handle(@Body() body: GetUserBody){
        const { id_user } = user.parse(body)

        const result = await this.getUserByIdUseCase.execute({
            id_user
        })

        if(result.isLeft()){
            throw new HttpException(result.value, HttpStatus.BAD_REQUEST)
        }

        return result.value
    }
}