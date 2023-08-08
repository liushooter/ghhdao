"use client"

import React, { useState } from "react"
import { LOCAL_JWT_KEY, LOCAL_USER_KEY } from "#/lib/session"
import { Button } from "./ui/button"
// @ts-expect-error typing errors
import { useLocalStorage, useHasMounted } from "@react-hooks-library/core"
import { type HackerHouseEvent } from "#/lib/model"
import ky from "ky"
import { getStrapiURL } from "#/lib/api-helpers"

export function EventApplyAction({ event }: { event: HackerHouseEvent }) {
  const [user, setUser] = useLocalStorage(LOCAL_USER_KEY)
  const [jwt] = useLocalStorage(LOCAL_JWT_KEY)
  console.log("🚀 ~ file: event-apply-action.tsx:15 ~ EventApplyAction ~ jwt:", user, jwt)
  const [isLoading, setIsLoading] = useState(false)
  const hasMounted = useHasMounted()

  const handleRegistration = async () => {
    if (!user || !jwt) {
      return
    }

    setIsLoading(true)
    try {
      const response = await ky.put(getStrapiURL(`/events/${event.id}`), {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        json: {
          data: {
            hackers: [user.id],
          },
        },
      })
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  if (user && hasMounted) {
    return (
      <Button className="" onClick={handleRegistration} isLoading={isLoading}>
        One-Click Apply
      </Button>
    )
  }

  return (
    <div className="font-medium text-red-600">
      Please login to start your registration!
    </div>
  )
}
