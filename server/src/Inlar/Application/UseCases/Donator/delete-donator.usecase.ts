import { Injectable } from "@nestjs/common";
import { DonatorRepository } from "../../Repositories/donator-repository";
import { Either, left, right } from "src/Base/either";
import { DonatorNotFound } from "../../Errors/Donator/donator-not-found-error";

interface DeleteDonatorUseCaseRequest {
    id_donator: number
}

type DeleteDonatorUseCaseResponse = Either<
    DonatorNotFound, 
    {
      null: null
    }
>

@Injectable()
export class DeleteDonatorUseCase {
  constructor(
    private donatorRepository: DonatorRepository,
  ) {}

  async execute({
    id_donator
  } : DeleteDonatorUseCaseRequest) : Promise<DeleteDonatorUseCaseResponse> {
    
    const donator =  await this.donatorRepository.getOneDonatorAndDonationsById(id_donator)

    if(!donator) {
        return left(new DonatorNotFound)
    }

    await this.donatorRepository.deleteDonator(id_donator)

    return right(null)
  }
}