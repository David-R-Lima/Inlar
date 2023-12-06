'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { api } from "@/lib/api"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

interface credentials {
  email?: string
  password?: string
}

export default function Home() {

  const [loginData, setLoginData] = useState<{}>({
    email: "",
    password: ""
  })

  const router = useRouter()

  const { toast } = useToast()

  async function Login(loginData: {}) {
    const res = await api.get("/user", {
      params: {
        ...loginData
      }
    }).then(() => {
      router.push("/Home")
    })
    .catch(() => {
      toast({
        variant: "destructive",
        title: "Email e/ou senha incorreto",
      })
    })

  }

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw]">
      <Toaster />
      <Card className="w-[30vw] h-[40vh] mt-100">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent >
          <Input type="email" placeholder="E-mail" className="w-[90%] m-5" onChange={(e) => {
            setLoginData({
              ...loginData,
              email: e.currentTarget.value
            })
          }}/>
          <Input type="password" placeholder="Password" className="w-[90%] m-5" onChange={(e) => {
            setLoginData({
              ...loginData,
              password: e.currentTarget.value
            })
          }}/>
        </CardContent>
        <CardFooter>
          <Button className="w-[100%]" onClick={() => {Login(loginData)}}>Entrar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
