"use client"

import React, { useState } from "react"
import { LOCAL_USER_KEY } from "#/lib/session"
import { Button } from "./ui/button"
// @ts-expect-error typing errors
import { useLocalStorage } from "@react-hooks-library/core"

// TODO: Hacker Apply feature
export function EventApplyAction() {
  const [user, setUser] = useLocalStorage(LOCAL_USER_KEY)
  const [isLoading, setIsLoading] = useState(false)

  if (user) {
    return (
      <Button
        className=""
        onClick={() => {
          setIsLoading(true)
          setTimeout(() => setIsLoading(false), 2000)
        }}
        isLoading={isLoading}
      >
        One-Click Apply
      </Button>
    )
  }

  return <div>EventApplyAction</div>
}
