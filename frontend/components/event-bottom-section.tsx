import { type HackerHouseEvent } from "#/lib/model"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { GhostIcon, TextIcon } from "lucide-react"
import { RegistrationCard } from "./registration-card"
import { UserAvatar } from "./user-avatar"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { getUserInitials } from "#/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export function EventBottomSection({ event }: { event: HackerHouseEvent }) {
  return (
    <div className="mt-4 flex flex-col gap-4 md:flex-row">
      <div className="flex flex-1 flex-col gap-4">
        <RegistrationCard event={event} />

        {event?.attributes.introduce && (
          <Card>
            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2">
                  <TextIcon /> About
                </CardTitle>
              </CardHeader>

              <CardContent>{event.attributes.introduce}</CardContent>
            </div>
          </Card>
        )}
      </div>

      <div className="flex flex-col md:w-[320px]">
        <Card>
          <div className="flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="inline-flex items-center gap-2">
                <GhostIcon /> People
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-4">
              {event.attributes.hackers?.data && (
                <>
                  <h4 className="font-medium">
                    {event.attributes.hackers?.data.length} Hackers
                  </h4>
                  <div className="mt-2 flex">
                    {event.attributes.hackers?.data.map((hacker) => (
                      <div className="flex max-w-[2rem] flex-col gap-2" key={`hacker-col ${hacker.id}`}>
                        <Tooltip>
                          <TooltipTrigger className="cursor-default">
                            <Avatar className="h-6 w-6 text-xs">
                              <AvatarImage
                                src={
                                  hacker.attributes.image?.data.attributes
                                    .formats.thumbnail?.url
                                }
                                alt={`@${hacker.attributes.username}`}
                              />
                              <AvatarFallback>
                                {getUserInitials(hacker.attributes.username)}
                              </AvatarFallback>
                            </Avatar>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{hacker.attributes.username}</p>
                          </TooltipContent>
                        </Tooltip>

                        <p className="truncate text-xs text-gray-600">
                          {hacker.attributes.username}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  )
}
