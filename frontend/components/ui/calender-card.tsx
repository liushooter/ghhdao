import React from "react"

export function CalenderCard() {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border">
      <div className="min-h-full w-full text-center">
        <div className="bg-black/5 text-[0.5rem] text-gray-600">Jul</div>
        <div className="font-medium text-gray-500">22</div>
      </div>
    </div>
  )
}
