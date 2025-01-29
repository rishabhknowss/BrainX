"use client"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react";
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 text-center grid gap-10" suppressHydrationWarning cz-shortcut-listen="true">
      <h1 className="text-7xl font-bold mb-4">Welcome to Brain<span className="text-red-500">X</span></h1>
      <p className="mb-8 text-4xl">Engage, Learn, and Earn with our interactive learning platform!</p>

<center><Button className="bg-red-600 hover:bg-red-700  w-fit flex justify-center text-center" onClick={()=> signIn("google", {
          callbackUrl: `${window.location.origin}/topics`
        })}>Login with Google</Button></center>
    </main>
  )
}

