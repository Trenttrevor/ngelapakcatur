import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import type { TeamType } from "@/dummies/dataTeam"

// const players = [
//   "Thomas Nurnberg",
//   "Arnold Almeida",
//   "Rico",
//   "Alfred Müller",
// ] as const

type TeamProps = {
  team: TeamType
}

export function KeyPlayers({ team }: TeamProps) {
  return (
    <div className="flex h-[200px] flex-col justify-center gap-2 overflow-y-auto">
      {team.members.map((member) => (
        <HoverCard key={team.id}>
          <HoverCardTrigger
            delay={100}
            closeDelay={100}
            render={
              <Button variant="outline" className="capitalize">
                {member.name}
              </Button>
            }
          />

          <HoverCardContent side="left">
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">{member.name}</h4>
              <p>ELO RATING: {member.elo}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
