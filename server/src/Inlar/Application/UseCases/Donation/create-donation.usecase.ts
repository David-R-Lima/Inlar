import { Injectable } from "@nestjs/common";
import { Donation, DonationProps } from "src/Inlar/Entities/Donation";
import { DonationRepository } from "../../Repositories/donation-repository";
import { Either, left, right } from "src/Base/either";

interface CreateDonationUseCaseRequest {
    donationProps: DonationProps
}

type CreateUserUseCaseResponse = Either<
    null, 
    {
      null: null
    }
>

@Injectable()
export class CreateDonationUseCase {
  constructor(
    private donationRepository: DonationRepository,
  ) {}

  async execute({
    donationProps
  } : CreateDonationUseCaseRequest) : Promise<CreateUserUseCaseResponse> {

    await this.donationRepository.createDonation(donationProps)

    return right(null)
  }
}