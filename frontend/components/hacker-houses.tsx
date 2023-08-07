import React from "react"
import { type HackerHouse } from "#/lib/model"
import { Card } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { getUserInitials } from "#/lib/utils"
import { getStrapiURL } from "#/lib/api-helpers"

interface HackerHousesProps {
  data?: HackerHouse[]
}

export function HackerHouses({ data }: HackerHousesProps) {
  return (
    <div className="mt-4 flex items-center space-x-4">
      {data?.map((house) => {
        const avatarUrl = getStrapiURL(house.avatar)

        return (
          <Card className="max-w-[380px]" key={house.title}>
            <div className="flex p-4">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarImage src={avatarUrl} alt={`@${house.title}`} />
                  <AvatarFallback>
                    {getUserInitials(house.title)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h3 className="font-bold">{house.title}</h3>
                  <p className="text-muted-foreground break-words text-sm">
                    {house.description ?? "no desceiption~"}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
