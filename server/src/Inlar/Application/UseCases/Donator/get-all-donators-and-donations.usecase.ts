import { Injectable } from "@nestjs/common";
import { Donator, DonatorProps } from "src/Inlar/Entities/Donator";
import { DonatorRepository } from "../../Repositories/donator-repository";
import { Either, left, right } from "src/Base/either";
import { Donation } from "src/Inlar/Entities/Donation";

type GetAllDonatorAndDonationsUseCaseResponse = Either<
    null, 
    {
      donators: Donator[],
      donations: Donation[]
    }
>

@Injectable()
export class GetAllDonatorAndDonationsUseCase {
  constructor(
    private donatorRepository: DonatorRepository,
  ) {}

  async execute({
    
  }) : Promise<GetAllDonatorAndDonationsUseCaseResponse> {

    const { donators, donations } = await this.donatorRepository.getAllDonatorAndDonations()

    return right({
        donators,
        donations
    })
  }
}