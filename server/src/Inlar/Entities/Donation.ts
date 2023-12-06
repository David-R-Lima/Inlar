import { Entity } from "src/Base/Entities/entity"

export interface DonationProps {
    description?: string
    quantity?: number
    createdAt?: Date
    updatedAt?: Date
    id_donator?: number
}

export class Donation extends Entity<DonationProps> {
    set description(description: string | undefined) {
        this.props.description = description
    }

    set quantity(quantity: number | undefined) {
        this.props.quantity = quantity
    }

    set updatedAt(date:Date){
        this.props.updatedAt = date
    }

    set id_donator(id_donator: number) {
        this.props.id_donator = id_donator
    }

    get description() {
        return this.props.description
    }

    get quantity() {
        return this.props.quantity
    }

    get id_donator() {
        return this.props.id_donator
    }

    get createdAt() {
        return this.props.createdAt
    }

    static create(props: DonationProps){
        const donation = new Donation({
            ...props,
            createdAt: props.createdAt ?? new Date()
        })
        return donation
    }
}