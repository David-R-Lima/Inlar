import { Prisma, donation as PrismaDonation } from '@prisma/client'
import { Donation } from 'src/Inlar/Entities/Donation'


export class PrismaDonationMapper {
  static toDomain(raw: PrismaDonation): Donation {
    return Donation.create(
      {
        description: raw.DESC,
        quantity: raw.QUAN,
        id_donator: raw.ID_DONATOR,
        createdAt: raw.CRE_AT
      },
    )
  }

  static toPrisma(donation: Donation): Prisma.donationUncheckedCreateInput {
    return {
        DESC: donation.description ?? "",
        QUAN: donation.quantity ?? 0,
        ID_DONATOR: donation.id_donator ?? 0,
        CRE_AT: donation.createdAt
    }
  }
}