import React from "react"
import { type HackerHouse } from "#/lib/model"
import { Card } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { IconPlus } from "./ui/icons"
import Link from "next/link"

interface HackerHousesProps {
  data?: HackerHouse[]
}

export function HackerHouses({ data }: HackerHousesProps) {
  return (
    <div className="mt-4 flex items-center space-x-4">
      {data?.map((house) => {
        const firstTwoCapLetters =
          house.name[0].toUpperCase() +
          (house.name.slice(house.name.indexOf(" "))[0]?.toUpperCase() ?? "")

        return (
          <Link href={`/hacker-house/${house.id}`} key={house.name}>
            <Card className="max-w-[380px] transition-all hover:scale-105">
              <div className="flex p-4">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src={house.avatar} alt={`@${house.name}`} />
                    <AvatarFallback>{firstTwoCapLetters}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="font-bold">{house.name}</h3>
                    <p className="text-muted-foreground break-words text-sm">
                      {house.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        )
      })}

      <Button variant="outline" className="h-16 w-16">
        <IconPlus className="h-8 w-8" />
      </Button>
    </div>
  )
}
