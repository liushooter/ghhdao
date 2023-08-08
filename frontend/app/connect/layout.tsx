import { SiteHeader } from "#/components/site-header"
import { type PropsWithChildren } from "react"

export default function ConnectLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <div className="bg-muted">{children}</div>
    </>
  )
}
