import ky, { type SearchParamsOption } from "ky"

export interface Session {
  jwt: string
  user: GitHubUser
}

export interface GitHubUser {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
}

export async function getCurrentSession({
  providerName,
  searchParams,
}: {
  providerName?: "github"
  searchParams?: SearchParamsOption
} = {}) {
  if (!providerName || !searchParams) {
    return
  }

  const session = await ky
    .get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/${providerName}/callback`,
      { searchParams }
    )
    .json<Session>()

  return session
}
