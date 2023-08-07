"use client"

import { useEffect, useState } from "react"
import { type GitHubUser, getCurrentSession } from "#/lib/session"

interface LoginRedirectPageProps {
  params?: { provider: "github" }
  searchParams?: { access_token: string; error: string }
}

export default function LoginRedirectPage({
  params,
  searchParams,
}: LoginRedirectPageProps) {
  const [user, setUser] = useState<GitHubUser>()

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
      setUser(session.user)
      window.location.replace("/") // Redirect to homepage after 3 sec
    })()
  }, [params?.provider, searchParams])

  return (
    <main className="container py-12">
      {!user && <p>...</p>}
      {user && (
        <div className="inline-flex gap-2">
          Welcome
          <h3 className="font-bold text-gray-900"> {user.username}!</h3>
        </div>
      )}
    </main>
  )
}
