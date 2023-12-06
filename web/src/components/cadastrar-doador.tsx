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
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
  
export function CadastrarDoador(props:any) {
    const [data, setData] = useState({
        name: "",
        address: "", 
        email: "", 
        cellPhone: "", 
        cpf: ""
    })

    async function cadastrar(data:any){
        await api.post("/donator", data).then((res) => {
            props.reload()
        })
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="mr-20">Cadastrar Doador</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Doador</DialogTitle>
                </DialogHeader>
                <Input placeholder="Nome" onChange={(e) => {
                    setData({
                        ...data,
                        name: e.currentTarget.value
                    })
                }}/>
                <Input placeholder="Endereço" onChange={(e) => {
                    setData({
                        ...data,
                        address: e.currentTarget.value
                    })
                }}/>
                <Input placeholder="Email" onChange={(e) => {
                    setData({
                        ...data,
                        email: e.currentTarget.value
                    })
                }}/>
                <Input placeholder="Celular" onChange={(e) => {
                    setData({
                        ...data,
                        cellPhone: e.currentTarget.value
                    })
                }}/>
                <Input placeholder="Cpf" onChange={(e) => {
                    setData({
                        ...data,
                        cpf: e.currentTarget.value
                    })
                }}/>
            <DialogFooter>
                <DialogClose>
                    <Button onClick={() => {
                        cadastrar(data)
                    }}>Cadastrar</Button>
                </DialogClose>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
