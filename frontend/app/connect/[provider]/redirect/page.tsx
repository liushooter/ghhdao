"use client"

import { useEffect } from "react"
import { getCurrentSession } from "#/lib/session"

interface LoginRedirectPagePageProps {
  params?: { provider: "github" }
  searchParams?: { access_token: string; error: string }
}

export default function LoginRedirectPage({
  params,
  searchParams,
}: LoginRedirectPagePageProps) {
  useEffect(() => {
    ;(async () => {
      if (
        !params?.provider ||
        !searchParams?.access_token ||
        typeof window === "undefined"
      ) {
        return window.location.replace("/")
      }

      if (searchParams.error) {
        return window.location.replace("/")
      }

      const session = await getCurrentSession({
        providerName: params.provider,
        searchParams,
      })

      if (!session) {
        throw new Error(`Couldn't login to Strapi.`)
      }

      localStorage.setItem("__GHH_JWT__", session.jwt)
      localStorage.setItem("__GHH_CURRENT_USER__", JSON.stringify(session.user))
      setTimeout(() => window.location.replace("/"), 1000) // Redirect to homepage after 3 sec
    })()
  }, [params?.provider, searchParams])

  return (
    <main className="container">
      <p>
        You have been successfully logged in. You will be redirected in a few
        seconds...
      </p>
    </main>
  )
}
