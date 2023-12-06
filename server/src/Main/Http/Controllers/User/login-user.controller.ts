import {
    Body,
    Query,
    HttpCode,
    Controller,
    Get,
    HttpException,
    HttpStatus
} from "@nestjs/common"
import { LoginUserUseCase } from "src/Inlar/Application/UseCases/User/login-user.usecase"
import { z } from "zod"

const user = z.object({
    email: z.string(),
    password: z.string()
})

type CreateUserBody = z.infer<typeof user>

@Controller("/user")
export class LoginUserController{
    constructor(
        private loginUserUseCase: LoginUserUseCase,
    ) {}

    @Get()
    @HttpCode(201)
    async handle(@Query() body: CreateUserBody){
        const { email, password } = user.parse(body)

        const result = await this.loginUserUseCase.execute({
            email,
            password
        })

        if(result.isLeft()){
            throw new HttpException(result.value, HttpStatus.BAD_REQUEST)
        }

        return result.value
    }
}