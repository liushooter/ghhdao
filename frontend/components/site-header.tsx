"use client"

import { useUser } from "#/hooks/use-user"
import React from "react"
import { UserMenu } from "./user-menu"
import { GithubLoginButton } from "./github-login-button"
import Link from "next/link"
import { cn } from "#/lib/utils"
import {ConnectButton} from "@rainbow-me/rainbowkit";

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
          <div style={{display: 'flex',justifyContent: 'flex-end',padding: 12,}}>
            {user ? <UserMenu user={user} /> : <GithubLoginButton />}
            <ConnectButton />
          </div>
        </div>

      </div>
    </header>
  )
}
