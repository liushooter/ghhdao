import ky, { type SearchParamsOption } from "ky"

export const LOCAL_JWT_KEY = "__GHH_JWT__"
export const LOCAL_USER_KEY = "__GHH_CURRENT_USER__"
export interface Session {
  jwt: string
  user: GitHubUser
}

export interface GitHubUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  image?: string;
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

export function signOut() {
  if (typeof window === "undefined") {
    return
  }

  localStorage.removeItem(LOCAL_JWT_KEY)
  localStorage.removeItem(LOCAL_USER_KEY)

  window.location.replace("/")
}
