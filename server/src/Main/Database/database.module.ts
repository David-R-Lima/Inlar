import { Module } from '@nestjs/common'
import { PrismaService } from "./Prisma/prisma.service";
import { UserRepository } from "src/Inlar/Application/Repositories/user-repository";
import { PrismaUserRepository } from "./Prisma/repositories/prisma-user-repository";
import { DonationRepository } from 'src/Inlar/Application/Repositories/donation-repository';
import { PrismaDonationRepository } from './Prisma/repositories/prisma-donation-repository';
import { DonatorRepository } from 'src/Inlar/Application/Repositories/donator-repository';
import { PrismaDonatorRepository } from './Prisma/repositories/prisma-donator-repository';

@Module({
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository
        },
        {
            provide: DonationRepository,
            useClass: PrismaDonationRepository
        },
        {
            provide: DonatorRepository,
            useClass: PrismaDonatorRepository
        }
    ],
    exports: [
        PrismaService,
        UserRepository,
        DonationRepository,
        DonatorRepository
    ]
})

export class DatabaseModule {}