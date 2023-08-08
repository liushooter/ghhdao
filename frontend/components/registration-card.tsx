"use client"

import { type HackerHouseEvent } from "#/lib/model"
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { TicketIcon } from "lucide-react"
import { LOCAL_JWT_KEY, LOCAL_USER_KEY } from "#/lib/session"
// @ts-expect-error typing errors
import { useLocalStorage } from "@react-hooks-library/core"
import { ReloadIcon } from "@radix-ui/react-icons"
import { getStrapiURL } from "#/lib/api-helpers"
import ky from "ky"
import { UserAvatar } from "./user-avatar"
import { Button } from "./ui/button"

export function RegistrationCard({ event }: { event: HackerHouseEvent }) {
  const [user, setUser] = useLocalStorage(LOCAL_USER_KEY)
  const [jwt] = useLocalStorage(LOCAL_JWT_KEY)
  const [hackers, setHackers] = useState<number[]>([])
  const hasUserRegistered = !!hackers.find((x) => x === user.id)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!user || !jwt) {
      return
    }

    ;(async () => {
      setIsLoading(true)

      const response = await ky
        .get(getStrapiURL(`/api/events/${event.id}?populate=hackers`), {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .json<{ data: HackerHouseEvent }>()
      setHackers(response.data.attributes.hackers!.data.map((x) => x.id))
      setIsLoading(false)
    })()
  }, [event.id, jwt, user])

  if (isLoading) {
    return (
      <Card>
        <div className="flex flex-col">
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2">
              <TicketIcon /> Registration
            </CardTitle>
          </CardHeader>

          <CardContent className="flex items-center gap-2">
            <ReloadIcon className="h-4 w-4 animate-spin" />
            <p>Loading...</p>
          </CardContent>
        </div>
      </Card>
    )
  }

  if (hasUserRegistered) {
    return (
      <Card>
        <div className="flex flex-col">
          <CardHeader>
            <CardTitle className="">
              <UserAvatar user={user} />
            </CardTitle>
          </CardHeader>

          <CardContent className="flex items-center gap-2">
            <h4 className="text-xl font-medium">
              You&apos;ve joint the event!
            </h4>
          </CardContent>
        </div>
      </Card>
    )
  }

  if (!user) {
    return <Card>
      <div className="flex flex-col">
        <CardHeader>
          <CardTitle className="inline-flex items-center gap-2">
            <TicketIcon /> Registration
          </CardTitle>
        </CardHeader>

        <CardContent className="flex items-center gap-2">
          <div className="text-red-500">
            Please login to start your registration!
          </div>
        </CardContent>
      </div>
    </Card>
  }

  const handleRegistration = async () => {
    if (!user || !jwt || hasUserRegistered) {
      return
    }

    setIsLoading(true)
    try {
      const response = await ky.put(getStrapiURL(`/api/events/${event.id}`), {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        json: {
          data: {
            hackers: [...hackers, user.id],
          },
        },
      })

      if (response.ok) {
        // toast
      }
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  return (
    <Card>
      <div className="flex flex-col">
        <CardHeader>
          <CardTitle className="inline-flex items-center gap-2">
            <TicketIcon /> Registration
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <p>Join this event for fun!</p>
          <Button
            onClick={handleRegistration}
            isLoading={isLoading}
          >
            One-Click Apply
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
