import { BackgroundGradient } from "@/components/ui/background-gradient"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import type { TeamType } from "@/dummies/dataTeam"
import { RiSwordLine } from "react-icons/ri"

type Point = {
  name: string
  lng: number
  lat: number
}

type Props = {
  dataTeam: TeamType[]
  start: Point | null
  end: Point | null
  setStart: (p: Point) => void
  setEnd: (p: Point | null) => void
}

export function ActiveOpponent({
  dataTeam,
  start,
  end,
  setStart,
  setEnd,
}: Props) {
  const handleClick = (team: TeamType) => {
    const point = {
      name: team.nameTeam,
      lng: team.longitude,
      lat: team.latitude,
    }

    if (!start) {
      setStart(point)
    } else if (!end) {
      setEnd(point)
    } else {
      setStart(point)
      setEnd(null)
    }
  }

  return (
    <div className="flex flex-col">
      <h2 className="mb-2 font-bold text-white">Active Opponent</h2>

      <ScrollArea className="h-60 w-55 rounded-sm border">
        {dataTeam.map((team) => {
          const isStart = start?.name === team.nameTeam
          const isEnd = end?.name === team.nameTeam

          return (
            <div
              key={team.id}
              onClick={() => handleClick(team)}
              className={`cursor-pointer py-2 pl-5 text-sm ${isStart ? "bg-green-200 text-black" : ""} ${isEnd ? "bg-red-200 text-black" : ""} ${!isStart && !isEnd ? "hover:bg-[#1f1f1f]" : ""} `}
            >
              {team.nameTeam}
            </div>
          )
        })}
      </ScrollArea>
      <Separator className="my-4" />

      <h1 className="mb-4">Now Playing</h1>
      <div className="flex flex-col gap-y-10">
        <BackgroundGradient className="flex max-w-sm cursor-pointer flex-col items-center justify-center rounded-[22px] bg-white p-1 dark:bg-zinc-900">
          {/* <div className="my-2 flex flex-col items-center justify-center rounded-xl bg-[#1F1F1F] p-2"> */}
          <h1>team1</h1>
          <RiSwordLine />
          <h1>team2</h1>
          {/* </div> */}
        </BackgroundGradient>
        <BackgroundGradient className="flex max-w-sm cursor-pointer flex-col items-center justify-center rounded-[22px] bg-white p-1 dark:bg-zinc-900">
          {/* <div className="my-2 flex flex-col items-center justify-center rounded-xl bg-[#1F1F1F] p-2"> */}
          <h1>team1</h1>
          <RiSwordLine />
          <h1>team2</h1>
          {/* </div> */}
        </BackgroundGradient>
        <BackgroundGradient className="flex max-w-sm cursor-pointer flex-col items-center justify-center rounded-[22px] bg-white p-1 dark:bg-zinc-900">
          {/* <div className="my-2 flex flex-col items-center justify-center rounded-xl bg-[#1F1F1F] p-2"> */}
          <h1>team1</h1>
          <RiSwordLine />
          <h1>team2</h1>
          {/* </div> */}
        </BackgroundGradient>
      </div>
    </div>
  )
}
