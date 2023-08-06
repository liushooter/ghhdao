"use client"

import { Button } from "#/components/ui/button"
import { signOut } from "next-auth/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu"
import Link from "next/link"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import { type Session } from "#/lib/session"
import { getUserInitials } from "#/lib/utils"

export interface UserMenuProps {
  user: Session["user"]
}

export function UserMenu({ user }: UserMenuProps) {
  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Avatar className="h-6 w-6 select-none rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80">
              <AvatarImage
                src={user?.id ? `${user.id}&s=60` : ""}
                alt={user.username ?? "Avatar"}
              />
              <AvatarFallback>
                {user?.username ? getUserInitials(user?.username) : null}
              </AvatarFallback>
            </Avatar>

            <span className="ml-2">{user?.username}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="start" className="">
          <DropdownMenuItem className="flex-col items-start">
            <div className="text-xs font-medium">{user?.username}</div>
            <div className="text-xs text-zinc-500">{user?.email}</div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              href="/dashboard"
              className="inline-flex w-full items-center justify-between text-xs"
            >
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
            className="text-xs"
          >
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
