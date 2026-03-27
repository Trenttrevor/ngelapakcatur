import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LocateIcon } from "lucide-react"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map"
import type { TeamType } from "@/dummies/dataTeam"
import { DrawOpponent } from "./DrawOpponent"
import { useState } from "react"

type TeamProps = {
  dataTeam: TeamType[]
}

const Point = ({ dataTeam }: TeamProps) => {
  const [selectedTeam, setSelectedTeam] = useState<number | undefined>()

  return (
    <div>
      {dataTeam.map((team) => (
        <MapMarker longitude={team.longitude} latitude={team.latitude}>
          <MarkerContent>
            {team.active ? (
              <div className="relative flex items-center justify-center">
                {/* Ping effect */}
                <span className="absolute inline-flex h-6 w-6 animate-ping rounded-full bg-blue-500 opacity-75"></span>

                {/* Solid dot */}
                <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-600"></span>
              </div>
            ) : (
              <div className="size-4 rounded-full border-2 border-white bg-primary shadow-lg" />
            )}
          </MarkerContent>
          <MarkerTooltip>{team.nameTeam}</MarkerTooltip>
          <MarkerPopup className="w-[300px] p-0">
            <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
                alt="Event cover"
                className="h-[140px] w-full object-cover"
              />
              {/* Overlay (optional) */}
              {/* <div className="pointer-events-none absolute top-0 left-0 h-[400px] w-full bg-black/30" /> */}

              <CardHeader>
                <CardAction>
                  <Badge variant="outline">PRO</Badge>
                </CardAction>
                <CardTitle>{team.nameTeam}</CardTitle>
                <CardDescription className="mb-2">
                  ELO Rating (AVR): {team.eloAverage}
                  <br />
                  Members: {team.amountMember} persons
                </CardDescription>
                <CardDescription className="flex items-center">
                  <LocateIcon size={40} className="mr-2" />
                  <h2>{team.address}</h2>
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <DrawOpponent
                  dataTeam={dataTeam}
                  selectedTeam={selectedTeam}
                  onSelect={() => setSelectedTeam(team.id)}
                />
              </CardFooter>
            </Card>
          </MarkerPopup>
        </MapMarker>
      ))}
    </div>
  )
}

export default Point
