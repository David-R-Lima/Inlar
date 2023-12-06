import { Injectable } from "@nestjs/common";
import { Donator } from "src/Inlar/Entities/Donator";
import { DonatorRepository } from "src/Inlar/Application/Repositories/donator-repository";
import { PrismaService } from "../prisma.service";
import { PrismaDonatorMapper } from "../mappers/prisma-donator-mapper";
import { PrismaDonationMapper } from "../mappers/prisma-donation-mapper";
import { Donation } from "src/Inlar/Entities/Donation";

@Injectable()
export class PrismaDonatorRepository implements DonatorRepository {
    constructor(
        private prisma: PrismaService,
    ) {}

    async createDonator(donator: Donator) {
        const data = PrismaDonatorMapper.toPrisma(donator)

        await this.prisma.donator.create({
            data
        })
    }

    async getAllDonatorAndDonations(): Promise<{ donators: Donator[]; donations: Donation[] }> {
        const allDonators = await this.prisma.donator.findMany({
            include: {
                donation: true
            }
        })

        const donators: Donator[] = allDonators.map(PrismaDonatorMapper.toDomain);
        const donations: Donation[] = allDonators.flatMap((donator) =>
            donator.donation ? donator.donation.map(PrismaDonationMapper.toDomain) : []
        );

        return { donators, donations };
    }

    async getOneDonatorAndDonationsById(id_donator: number): Promise<Donator> {
        const donator = await this.prisma.donator.findUnique({
            where: {
                ID_DONATOR: id_donator
            },
            include: {
                donation: true
            }
        })

        return PrismaDonatorMapper.toDomain(donator)
    }

    async updateDonator(id_donator: number,  donator: Donator): Promise<null> {
        const data = PrismaDonatorMapper.toPrisma(donator)    

        await this.prisma.donator.update({
            where: {
                ID_DONATOR : id_donator
            },
            data
        })

        return null
    }

    async deleteDonator(id_donator: number){
        await this.prisma.donator.delete({
            where: {
                ID_DONATOR: id_donator
            }
        })

        return null
    }
}