"use client"

import * as React from "react"

import { cn } from "#/lib/utils"
import { Button, type ButtonProps } from "#/components/ui/button"
import { IconGitHub, IconSpinner } from "#/components/ui/icons"
import { getStrapiURL } from "#/lib/api-helpers"

interface LoginButtonProps extends ButtonProps {
  showGithubIcon?: boolean
  text?: string
}

export function GithubLoginButton({
  text = "Login",
  showGithubIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
      variant="outline"
      onClick={() => {
        if (!window) {
          return
        }

        setIsLoading(true)
        const redirectUrl = getStrapiURL("/api/connect/github")
        window.location.replace(redirectUrl)
      }}
      disabled={isLoading}
      className={cn(className)}
      size="sm"
      {...props}
    >
      {isLoading && <IconSpinner className="mr-2 animate-spin" />}
      {showGithubIcon && !isLoading && <IconGitHub className="mr-2" />}
      {text}
    </Button>
  )
}
