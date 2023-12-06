"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "./ui/button"
  

export function InformcaoDoador(props: any) {
    return <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"secondary"}>Mais informações</Button>
                </DialogTrigger>
                <DialogContent className="max-h-[75vh]">
                <DialogHeader>
                    <DialogTitle>{props.doador?.name}</DialogTitle>
                    <DialogDescription>
                        <div>
                            <p className="m-3">Endereço: {props.doador?.address}</p>
                            <p className="m-3">Cpf: {props.doador?.cpf}</p>
                            <p className="m-3">Celular: {props.doador?.cellPhone}</p>
                            <h2>Doações</h2>
                            <div style={{overflowY: 'scroll', maxHeight: "350px"}}>
                                {props.donations?.map((data:any, index:any) => {
                                    return <div className="bg-secondary p-3 mt-3 rounded-lg">
                                                <p>Descrição: {data?.description}</p>
                                                <p className="mt-1">Quantidade: {data?.quantity}</p>
                                                <p className="mt-1">Data: {new Date(data?.createdAt).toLocaleString('pt-BR')}</p>
                                            </div>
                                })}
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                </DialogContent>
            </Dialog>
  
  
}