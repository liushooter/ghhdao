import { type HackerHouseEvent } from "#/lib/model"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { TextIcon, GhostIcon, TicketIcon } from "lucide-react"
import { Button } from "./ui/button"
import { EventApplyAction } from "./event-apply-action"

export function EventBottomSection({ event }: { event: HackerHouseEvent }) {
  return (
    <div className="mt-4 flex gap-4">
      <div className="flex flex-1 flex-col gap-4">
        <Card>
          <div className="flex flex-col">
            <CardHeader>
              <CardTitle className="inline-flex items-center gap-2">
                <TicketIcon /> Registration
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              <p>Join this event for fun!</p>
              <EventApplyAction />
            </CardContent>
          </div>
        </Card>

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

      {/* <div className="flex flex-col">
        <Card>
          <div className="flex flex-col">
            <CardHeader>
              <CardTitle className="inline-flex items-center gap-2">
                <GhostIcon /> People
              </CardTitle>
            </CardHeader>

            <CardContent>
              {event.attributes.members?.length}
            </CardContent>
          </div>
        </Card>
      </div> */}
    </div>
  )
}
