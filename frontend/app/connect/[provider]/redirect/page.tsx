"use client"

import { useEffect, useState } from "react"
import { type GitHubUser, getCurrentSession } from "#/lib/session"
// @ts-expect-error typings
import { useHasMounted } from "@react-hooks-library/core"

interface LoginRedirectPageProps {
  params?: { provider: "github" }
  searchParams?: { access_token: string; error: string }
}

export default function LoginRedirectPage({
  params,
  searchParams,
}: LoginRedirectPageProps) {
  const [user, setUser] = useState<GitHubUser>()
  const [error, setError] = useState<string>()
  const hasMounted = useHasMounted()

  useEffect(() => {
    if (!hasMounted) {
      return
    }

    ;(async () => {
      if (!params?.provider || !searchParams?.access_token) {
        return setTimeout(() => window.location.replace("/"), 3000)
      }

      if (searchParams.error) {
        setError(searchParams.error)
        return setTimeout(() => window.location.replace("/"), 3000)
      }

      const session = await getCurrentSession({
        providerName: params.provider,
        searchParams,
      })

      if (!session) {
        throw new Error(`Couldn't login to Strapi.`)
      }

      localStorage.setItem("__GHH_JWT__", JSON.stringify(session.jwt))
      localStorage.setItem("__GHH_CURRENT_USER__", JSON.stringify(session.user))
      setUser(session.user)
      setTimeout(() => window.location.replace("/"), 3000)
    })()
  }, [hasMounted, params?.provider, searchParams])

  return (
    <main className="container py-12">
      {!user && <p>...</p>}
      {user && (
        <div className="inline-flex gap-2">
          Welcome
          <h3 className="font-bold text-gray-900"> {user.username}!</h3>
        </div>
      )}

      {error && <p className="text-red-600">{error}</p>}
    </main>
  )
}
