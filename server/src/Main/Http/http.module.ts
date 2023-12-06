import { Module } from '@nestjs/common'
import { DatabaseModule } from '../Database/database.module'
import { CreateUserController } from './Controllers/User/create-user.controller'
import { CreateUserUseCase } from 'src/Inlar/Application/UseCases/User/create-user.usecase'
import { GetUserByIdController } from './Controllers/User/get-user-by-id.controller'
import { GetUserByIdUseCase } from 'src/Inlar/Application/UseCases/User/get-user-by-id.usecase'
import { LoginUserController } from './Controllers/User/login-user.controller'
import { LoginUserUseCase } from 'src/Inlar/Application/UseCases/User/login-user.usecase'
import { CreateDonationController } from './Controllers/Donation/create-donation.controller'
import { CreateDonationUseCase } from 'src/Inlar/Application/UseCases/Donation/create-donation.usecase'
import { CreateDonatorController } from './Controllers/Donator/create-donator.controller'
import { CreateDonatorUseCase } from 'src/Inlar/Application/UseCases/Donator/create-donator.usecase'
import { UpdateDonatorController } from './Controllers/Donator/update-donator.controller'
import { UpdateDonatorUseCase } from 'src/Inlar/Application/UseCases/Donator/update-donator.usecase'
import { GetAllDonatorAndDonationsController } from './Controllers/Donator/get-all-donators-and-donations.controller'
import { GetAllDonatorAndDonationsUseCase } from 'src/Inlar/Application/UseCases/Donator/get-all-donators-and-donations.usecase'
import { DeleteDonatorController } from './Controllers/Donator/delete-donator.controller'
import { DeleteDonatorUseCase } from 'src/Inlar/Application/UseCases/Donator/delete-donator.usecase'

@Module({
    imports:[
        DatabaseModule
    ],
    controllers:[
        CreateUserController,
        GetUserByIdController,
        LoginUserController,
        CreateDonationController,
        CreateDonatorController,
        UpdateDonatorController,
        GetAllDonatorAndDonationsController,
        DeleteDonatorController
    ],
    providers: [
        CreateUserUseCase,
        GetUserByIdUseCase,
        LoginUserUseCase,
        CreateDonationUseCase,
        CreateDonatorUseCase,
        UpdateDonatorUseCase,
        GetAllDonatorAndDonationsUseCase,
        DeleteDonatorUseCase
    ]
})

export class HttpModule {}