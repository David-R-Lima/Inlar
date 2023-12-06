'use client'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { api } from "@/lib/api"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
  
export function UpdateDoador(props:any) {
    const [data, setData] = useState({
        name: "",
        address: "", 
        email: "", 
        cellPhone: "", 
        cpf: ""
    })
    console.log(props.donator)

    async function update(data:any, id_donator:number){
        await api.put("/donator", {...data, id_donator}).then((res) => {
            props.reload()
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        setData({
            name: props.donator.name,
            address: props.donator.address,
            email: props.donator.email,
            cellPhone: props.donator.cellPhone,
            cpf: props.donator.cpf
        })
    }, [])
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Editar</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Doador</DialogTitle>
                </DialogHeader>
                <Input placeholder="Nome" value={data.name} onChange={(e) => {
                    setData({
                        ...data,
                        name: e.currentTarget.value
                    })
                }}/>
                <Input placeholder="Endereço" value={data.address} onChange={(e) => {
                    setData({
                        ...data,
                        address: e.currentTarget.value
                    })
                }}/>
                <Input placeholder="Email" value={data.email} onChange={(e) => {
                    setData({
                        ...data,
                        email: e.currentTarget.value
                    })
                }}/>
                <Input placeholder="Celular" value={data.cellPhone} onChange={(e) => {
                    setData({
                        ...data,
                        cellPhone: e.currentTarget.value
                    })
                }}/>
                <Input placeholder="Cpf" value={data.cpf} onChange={(e) => {
                    setData({
                        ...data,
                        cpf: e.currentTarget.value
                    })
                }}/>
            <DialogFooter>
                <DialogClose>
                    <Button onClick={() => {
                        update(data, props.donator.id_donator)
                    }}>Editar</Button>
                </DialogClose>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
