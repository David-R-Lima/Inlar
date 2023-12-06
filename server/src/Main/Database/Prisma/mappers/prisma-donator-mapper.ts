import { Prisma, Donator as PrismaDonator, donation } from '@prisma/client'
import { Donator } from 'src/Inlar/Entities/Donator'


export class PrismaDonatorMapper {
  static toDomain(raw: PrismaDonator): Donator {
    return Donator.create(
      {
        id_donator: raw.ID_DONATOR ?? 0,
        name: raw.NAME ?? "",
        email: raw.EMAIL ?? "",
        cellPhone: raw.CELLPHONE ?? "",
        address: raw.ADDRESS ?? "",
        cpf: raw.CPF ?? "",
        updatedAt: raw.UPD_AT ?? new Date()
      },
    )
  }

  static toPrisma(donator: Donator): Prisma.DonatorUncheckedCreateWithoutDonationInput {
    return {
        NAME: donator.name,
        EMAIL: donator.email,
        CELLPHONE: donator.cellPhone,
        ADDRESS: donator.address,
        CPF: donator.cpf,
    }
  }
}