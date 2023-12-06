import { Injectable } from "@nestjs/common";
import { Donator, DonatorProps } from "src/Inlar/Entities/Donator";
import { DonatorRepository } from "../../Repositories/donator-repository";
import { Either, left, right } from "src/Base/either";
import { PrismaClient } from "@prisma/client";


interface CreateDonatorUseCaseRequest {
    donatorProps: Donator | DonatorProps
}

type CreateDonatorUseCaseResponse = Either<
    null, 
    {
      donator: Donator
    }
>

@Injectable()
export class CreateDonatorUseCase {
  constructor(
    private donatorRepository: DonatorRepository,
  ) {}

  async execute({
    donatorProps
  } : CreateDonatorUseCaseRequest) : Promise<CreateDonatorUseCaseResponse> {

    const donator = Donator.create(donatorProps)

    await this.donatorRepository.createDonator(donator)

    return right({
        donator
    })
  }
}