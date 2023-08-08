import { type Session } from "#/lib/session"
import { useEffect, useState } from "react"

export const useUser = () => {
  const [user, setUser] = useState<Session["user"]>()

  useEffect(() => {
    if (!localStorage) {
      return
    }
    try {
      // Throw errors when empty
      const user = JSON.parse(
        localStorage.getItem("__GHH_CURRENT_USER__") ?? ""
      )
      setUser(user)
    } catch {
      // do nothing
    }
  }, [])

  return user
}
