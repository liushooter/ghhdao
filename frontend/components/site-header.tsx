"use client"

import { useUser } from "#/hooks/use-user"
import React from "react"
import { UserMenu } from "./user-menu"
import { GithubLoginButton } from "./github-login-button"
import Link from "next/link"
import { cn } from "#/lib/utils"

export function SiteHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  const user = useUser()

  return (
    <header
      {...props}
      className={cn("z-40", "bg-transparent", props.className)}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between py-6">
          <Link href="/" className="text-lg font-semibold">
            Global Hacker House DAO
          </Link>

          {user ? <UserMenu user={user} /> : <GithubLoginButton />}
        </div>
      </div>
    </header>
  )
}
