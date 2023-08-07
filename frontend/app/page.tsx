import { HackerHouses } from "#/components/hacker-houses"
import { delay } from "#/lib/api-helpers"
import { type HackerHouse } from "#/lib/model"
import { ConnectButton } from '@rainbow-me/rainbowkit';

const MOCK_DATA: HackerHouse[] = [
  {
    createdAt: "...",
    events: 2,
    name: "AntAlpha",
    people: 2,
    projects: 4,
    avatar: "https://github.com/shadcn.png",
  },
]

const getHackerHouses = async () => {
  await delay(1000)

  return MOCK_DATA
}

export default async function Home() {
  const hackerHouses = await getHackerHouses()

  return (
    <main className="container">
      <div style={{display: 'flex',justifyContent: 'flex-end',padding: 12, }}>
        <ConnectButton />
      </div>
      <div className="flex min-h-screen flex-col py-12">
        <div className="flex justify-between">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Hacker House
          </h2>
        </div>
        <HackerHouses data={hackerHouses} />
      </div>
    </main>
  )
}
