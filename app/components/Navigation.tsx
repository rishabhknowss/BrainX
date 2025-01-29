"use client"

import { signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleSignOut() {
    await signOut({ redirect: false })
    router.push("/")
  }

  return (
    <nav className="bg-black p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className={pathname === "/" ? "text-red-500" : "text-white"}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/topics" className={pathname === "/topics" ? "text-red-500" : "text-white"}>
            Learn
          </Link>
        </li>
        <li>
          <Link href="/quiz" className={pathname === "/quiz" ? "text-red-500" : "text-white"}>
            Quiz
          </Link>
        </li>
        <li>
          <Link href="/leaderboard" className={pathname === "/leaderboard" ? "text-red-500" : "text-white"}>
            Leaderboard
          </Link>
        </li>
        <li>
          <Link href="/rewards" className={pathname === "/rewards" ? "text-red-500" : "text-white"}>
            Rewards
          </Link>
        </li>
        <li>
          <button onClick={handleSignOut} className="text-white">Log out</button>
        </li>
      </ul>
    </nav>
  )
}