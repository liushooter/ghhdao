"use client"

import * as React from "react"

import { cn } from "#/lib/utils"
import { Button, type ButtonProps } from "#/components/ui/button"
import { IconGitHub, IconSpinner } from "#/components/ui/icons"

interface LoginButtonProps extends ButtonProps {
  showGithubIcon?: boolean
  text?: string
}

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

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
        if (!window || !apiUrl) {
          return
        }

        setIsLoading(true)
        const redirectUrl = `${apiUrl}/api/connect/github`
        window.location.replace(redirectUrl)
        // signIn("github", {
        //   callbackUrl: redirectUrl,
        //   redirect: true
        // })
      }}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading && <IconSpinner className="mr-2 animate-spin" />}
      {showGithubIcon && !isLoading && <IconGitHub className="mr-2" />}
      {text}
    </Button>
  )
}
