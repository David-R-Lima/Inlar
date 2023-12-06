import { Injectable } from "@nestjs/common";
import { DonationProps } from "src/Inlar/Entities/Donation";
import { DonationRepository } from "../../Repositories/donation-repository";
import { Either, left, right } from "src/Base/either";
import { DonationNotFound } from "../../Errors/Donation/donation-not-found";

interface getAllDonationsByUserIdnUseCaseRequest {
    id: number,
    donationProps: DonationProps
}

type getAllDonationsByUserIdnUseCaseResponse = Either<
    DonationNotFound, 
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
    id,
    donationProps
  } : getAllDonationsByUserIdnUseCaseRequest) : Promise<getAllDonationsByUserIdnUseCaseResponse> {

    const donation = await this.donationRepository.getDonationById(id)

    if(!donation) {
        return left(new DonationNotFound)
    }

    donation.description = donationProps.description ?? donation.description
    donation.quantity = donationProps.quantity ?? donation.quantity
    donation.updatedAt = new Date()

    await this.donationRepository.updateDonationById(id, donation)

    return right(null)
  }
}