import { Donation } from "src/Inlar/Entities/Donation";
import { Donator } from "src/Inlar/Entities/Donator";

export abstract class DonatorRepository {
    abstract createDonator(donator: Donator): Promise<void>
    abstract getAllDonatorAndDonations(): Promise<{ donators: Donator[]; donations: Donation[] | undefined }>
    abstract getOneDonatorAndDonationsById(id_donator: number): Promise<Donator | undefined>
    abstract updateDonator(id_donator: number, donator: Donator): Promise<null>
    abstract deleteDonator(id_donator: number): Promise<null>
}