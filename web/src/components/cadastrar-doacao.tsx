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

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { api } from "@/lib/api"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"

export function CadastrarDoacao(props: any) {
    const [data, setData] = useState({
        description: "", 
        quantity: 0, 
        id_donator: 0
    })

    async function cadastrar(data:any){
        await api.post("/donation", data).then((res) => {
            props.reload()
        })
    }
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="mr-20">Cadastrar Doação</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Doador</DialogTitle>
                </DialogHeader>
                <Input placeholder="Descrição da doação" onChange={(e) => {
                    setData({
                        ...data,
                        description: e.currentTarget.value
                    })
                }}/>
                <Input type="number" placeholder="Quantidade" onChange={(e) => {
                    setData({
                        ...data,
                        quantity: Number(e.currentTarget.value)
                    })
                }}/>
                <Select onValueChange={(e) => {
                    setData({
                        ...data,
                        id_donator: Number(e)
                    })
                }}>
                    <SelectTrigger>
                        <SelectValue placeholder="Doador" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            props.donators?.map((data: any, index: number) => {
                                return <SelectItem value={data.props.id_donator}>{data.props.name}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>

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
