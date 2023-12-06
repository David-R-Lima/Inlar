import { Entity } from "src/Base/Entities/entity";


export interface DonatorProps {
    id_donator?: number | null,
    name?: string | null
    cellPhone?: string | null
    cpf?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | null
    updatedAt?: Date | null
}

export class Donator extends Entity<DonatorProps> {
    set name(name: string | null) {
        this.props.name = name
    }

    set address(address: string | null) {
        this.props.address = address
    }

    set cpf(cpf: string | null) {
        this.props.cpf = cpf
    }

    set cellPhone(cellPhone: string | null){
        this.props.cellPhone = cellPhone
    }

    set email(email:string | null) {
        this.props.email = email
    }

    get id_donator(){
        return this.props.id_donator
    }

    get name(){
        return this.props.name
    }

    get address(){
        return this.props.address
    }

    get cpf(){
        return this.props.cpf
    }

    get cellPhone() {
        return this.props.cellPhone
    }

    get email() {
        return this.props.email
    }

    static create(props: DonatorProps){
        const donator = new Donator({
            ...props,
            createdAt: props.createdAt ?? new Date(),
        })
        return donator
    }
}