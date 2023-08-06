import React from "react"
import { type HackerHouse } from "#/lib/model"
import { Card } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface HackerHousesProps {
  data?: HackerHouse[]
}

export function HackerHouses({ data }: HackerHousesProps) {
  return (
    <div className="flex">
      {data?.map((house) => {
        const firstTwoCapLetters =
          house.name[0].toUpperCase() +
          (house.name.slice(house.name.indexOf(" "))[0]?.toUpperCase() ?? "")

        return (
          <Card key={house.name}>
            <div className="flex p-4">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarImage src={house.avatar} alt={`@${house.name}`} />
                  <AvatarFallback>{firstTwoCapLetters}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h3 className="font-bold">{house.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    App dir, Routing, Layouts, Loading UI and API routes.
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
