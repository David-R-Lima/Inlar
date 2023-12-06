import {
    Body,
    Post,
    HttpCode,
    Controller,
    HttpException,
    HttpStatus,
} from "@nestjs/common"
import { z } from "zod"
import { CreateDonationUseCase } from "src/Inlar/Application/UseCases/Donation/create-donation.usecase"

const createDonationBody = z.object({
    description: z.string(),
    quantity: z.number(),
    id_donator: z.number()
})

type CreateDonationBody = z.infer<typeof createDonationBody>

@Controller("/donation")
export class CreateDonationController{
    constructor(
        private createDonationUseCase: CreateDonationUseCase,
    ) {}

    @Post()
    @HttpCode(201)
    async handle(@Body() body: CreateDonationBody){
        const { description, quantity, id_donator } = createDonationBody.parse(body)

        const result = await this.createDonationUseCase.execute({donationProps: {
            description,
            quantity,
            id_donator
        }})

        if(result.isLeft()){
            throw new HttpException(result.value, HttpStatus.BAD_REQUEST)
        }
    }
}