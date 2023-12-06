'use client'

import { api } from "@/lib/api"
import { useEffect, useState } from "react"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { BarChart } from "@/components/bar-chart"
import { InformcaoDoador } from "@/components/informacao-doador"
import { CadastrarDoador } from "@/components/cadastrar-doador"
import { CadastrarDoacao } from "@/components/cadastrar-doacao"
import { UpdateDoador } from "@/components/update-doador"
import { DeleteDonator } from "@/components/delete-donator"

async function getData(){
  try {
    const res = await api.get("/donator")
    return res.data.value
  } catch (error) {
    
  }
}

export default function Home() {
  
  const [donator, setDonator] = useState<Array<{props: {
    id_donator: number,
    name:string,
    address: string,
    cpf: string,
    cellPhone: string
  }}>>()

  const [donations, setDonations] = useState<Array<{props: {
    id_donator: number,
    description: string,
    quantity: number
  }}>>()

  async function reload() {
    getData().then((res) => {
      setDonations(res.donations)
      setDonator(res.donators)
    })
  }

  useEffect(() => {
    getData().then((res) => {
      setDonations(res.donations)
      setDonator(res.donators)
    })
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="w-[60vw] p-10 rounded-lg">
        <BarChart></BarChart>
      </div>

      <div>
        <CadastrarDoador reload={reload}/>
        <CadastrarDoacao donators={donator} reload={reload}/>
      </div>

      <div className="flex flex-col items-center w-[100%] min-h-[250px] border-solid border-t-2 border-white mt-10 bg-accent">
        <h1 className="mt-5 text-[45px]">Doadores</h1>
        {
          donator?.map((data, index) => {
            let Donation: { id_donator: number; description: string; quantity: number }[] = []

            donations?.map(d => {
              if(d.props.id_donator == data.props.id_donator){
                Donation.push({
                  ...d.props
                })
              }
            })
            return  <Card className="m-10 w-[40%]">
                      <CardTitle className="p-5">
                        <p>{data.props.name}</p>
                      </CardTitle>
                      <hr />
                      <CardContent className="flex justify-between">

                      </CardContent>
                      <CardFooter className="flex justify-around">
                        <InformcaoDoador doador={data.props} donations={Donation}/>
                        <UpdateDoador donator={data.props}/>
                        <DeleteDonator id_donator={data.props.id_donator} reload={reload}/>

                      </CardFooter>
                    </Card>
          })
        }
      </div>
    </div>
  )
}
