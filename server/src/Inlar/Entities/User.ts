import { Entity } from "src/Base/Entities/entity"

export interface UserProps {
    name?: string
    address?: string
    password?: string
    cellPhone?: string
    cpf?: string
    email?: string
    createdAt?: Date
    updatedAt?: Date
}

export class User extends Entity<UserProps> {
    set name(name: string | undefined) {
        this.props.name = name
    }

    set address(address: string | undefined) {
        this.props.address = address
    }

    set cpf(cpf: string | undefined) {
        this.props.cpf = cpf
    }

    set cellPhone(cellPhone: string | undefined){
        this.props.cellPhone = cellPhone
    }

    set password(password: string | undefined) {
        this.props.password = password
    }

    set email(email:string | undefined) {
        this.props.email = email
    }

    set updatedAt(date:Date){
        this.props.updatedAt = date
    }

    get name(){
        return this.name
    }

    get endereco(){
        return this.endereco
    }

    get cpf(){
        return this.cpf
    }

    static create(props: UserProps){
        const user = new User({
            ...props,
            createdAt: new Date()
        })
        return user
    }
}