// @ts-expect-error typing errors
import { useLocalStorage } from "@react-hooks-library/core"
import { type GitHubUser, LOCAL_USER_KEY } from "#/lib/session"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { getUserInitials } from "#/lib/utils"
import { type Hacker } from "#/lib/model"

const normarlizeUser = (user?: Hacker | GitHubUser) => {
  if (!user) {
    return
  }

  if (!!(user as Hacker).attributes) {
    const nUser = user as Hacker
    return {
      ...nUser,
      ...nUser.attributes,
      image: nUser.attributes.image?.data?.attributes.formats.thumbnail?.url,
    } satisfies GitHubUser
  }

  return user as GitHubUser
}

export function UserAvatar({ user }: { user?: Hacker | GitHubUser }) {
  const [currentUser] = useLocalStorage(LOCAL_USER_KEY) as [GitHubUser]
  const displayUser = normarlizeUser(user || currentUser)

  if (!displayUser) {
    return null
  }

  return (
    <Avatar>
      <AvatarImage src={displayUser.image} alt={`@${displayUser.username}`} />
      <AvatarFallback>{getUserInitials(displayUser.username)}</AvatarFallback>
    </Avatar>
  )
}
