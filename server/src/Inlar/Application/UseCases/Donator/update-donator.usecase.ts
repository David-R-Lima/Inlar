import { Injectable } from "@nestjs/common";
import { Donator, DonatorProps } from "src/Inlar/Entities/Donator";
import { DonatorRepository } from "../../Repositories/donator-repository";
import { Either, left, right } from "src/Base/either";
import { DonatorNotFound } from "../../Errors/Donator/donator-not-found-error";

interface UpdateDonatorUseCaseRequest {
    id_donator: number
    donatorProps: Donator | DonatorProps
}

type UpdateDonatorUseCaseResponse = Either<
    DonatorNotFound, 
    {
      donator: Donator
    }
>

@Injectable()
export class UpdateDonatorUseCase {
  constructor(
    private donatorRepository: DonatorRepository,
  ) {}

  async execute({
    donatorProps,
    id_donator
  } : UpdateDonatorUseCaseRequest) : Promise<UpdateDonatorUseCaseResponse> {
    
    const donator =  await this.donatorRepository.getOneDonatorAndDonationsById(id_donator)

    if(!donator) {
        return left(new DonatorNotFound)
    }
    donator.name = donatorProps.name
    donator.address = donatorProps.address
    donator.cellPhone = donatorProps.cellPhone
    donator.cpf = donatorProps.cpf
    donator.email = donatorProps.email

    await this.donatorRepository.updateDonator(id_donator, donator)

    return right({
        donator
    })
  }
}