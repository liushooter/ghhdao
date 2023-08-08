import React from "react"
import { Card } from "./ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"
import Link from "next/link"
import { getUserInitials } from "#/lib/utils"
import { type HackerHouseEvent } from "#/lib/model"
import { format } from "date-fns"
import { getStrapiURL } from "#/lib/api-helpers"

interface HackerHouseEventsProps {
  data?: HackerHouseEvent[]
}

export function HackerHouseEvents({ data }: HackerHouseEventsProps) {
  return (
    <div className="mt-4 flex space-x-4">
      {data?.map((x) => {
        const hasCover = !!x.attributes.post?.data?.[0]?.attributes?.url

        return (
          <Link href={`/event/${x.id}`} key={x.attributes.title}>
            <Card className="w-[380px] transition-all hover:scale-105">
              <div className="flex flex-col space-y-4 p-4">
                <div className="flex shrink items-center justify-center bg-gray-200">
                  {hasCover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={getStrapiURL(
                        x.attributes.post?.data?.[0].attributes.url
                      )}
                      className="max-h-72 w-full object-cover"
                      alt={`Cover of ${x.attributes.title}`}
                    />
                  ) : (
                    <Avatar>
                      <AvatarFallback className="bg-gray-500 text-white">
                        {getUserInitials(x.attributes.title)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>

                <div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900">
                      {x.attributes.title}
                    </h3>
                    <p className="truncate break-words text-sm text-gray-900">
                      {x.attributes.introduce ?? "no desceiption~"}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <p className="text-muted-foreground text-sm">
                      {format(new Date(x.attributes.start_time), "do MMM, yyyy")}
                      {" to "}
                      {format(new Date(x.attributes.end_time), "do MMM, yyyy")}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
