"use client"

import { useUser } from "#/hooks/use-user"
import React from "react"
import { UserMenu } from "./user-menu"
import { GithubLoginButton } from "./github-login-button"
import Link from "next/link"

export function SiteHeader() {
  const user = useUser()

  return (
    <header className="bg-background container z-40">
      <div className="flex h-20 items-center justify-between py-6">
        <Link href="/" className="text-lg font-semibold">
          Global Hacker House DAO
        </Link>

        {user ? <UserMenu user={user} /> : <GithubLoginButton />}
      </div>
    </header>
  )
}
