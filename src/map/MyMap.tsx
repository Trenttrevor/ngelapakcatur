import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
} from "@/components/ui/map"
import { Card } from "@/components/ui/card"
import { dataTeam } from "@/dummies/dataTeam"
import Point from "./Point"
import { SelectRoute } from "./SelectRoute"
import { useState } from "react"
import PuzzleModal from "@/chess/PuzzleModal"

type Point = {
  name: string
  lat: number
  lng: number
}

type Props = {
  start: Point | null
  end: Point | null
  setStart: (p: Point | null) => void
  setEnd: (p: Point | null) => void
}

type Quest = {
  id: string
  lat: number
  lng: number
  fen: string
  solution: string[]
}

const quests: Quest[] = [
  {
    id: "1",
    lat: 51.3308,
    lng: 12.36,
    fen: "6k1/5ppp/8/8/8/5Q2/5PPP/6K1 w - - 0 1",
    solution: ["Qa8#"],
  },
]

export function MyMap({ start, end, setStart, setEnd }: Props) {
  const [activePuzzle, setActivePuzzle] = useState<Quest | null>(null)
  return (
    <Card className="h-full w-full overflow-hidden p-0">
      <Map center={[12.36, 51.3308]} zoom={11}>
        {/* ✅ Only render if both exist */}

        {quests.map((quest) => (
          <MapMarker
            key={quest.id}
            latitude={quest.lat}
            longitude={quest.lng}
            onClick={() => setActivePuzzle(quest)}
          >
            <MarkerContent>
              <div className="h-6 w-6 rounded-full bg-blue-500" />
              <MarkerLabel>Quest</MarkerLabel>
            </MarkerContent>
          </MapMarker>
        ))}

        {activePuzzle && (
          <div>
            <PuzzleModal
              puzzle={activePuzzle}
              onSolved={() => {
                alert("Reward + XP 🎉")
                setActivePuzzle(null)
              }}
            />
          </div>
        )}

        {start && end && (
          <SelectRoute
            start={start}
            end={end}
            setStart={setStart}
            setEnd={setEnd}
          />
        )}

        {/* ✅ Start marker */}
        {start && (
          <MapMarker longitude={start.lng} latitude={start.lat}>
            <MarkerContent>
              <div className="size-5 rounded-full bg-green-500" />
              <MarkerLabel>{start.name}</MarkerLabel>
            </MarkerContent>
          </MapMarker>
        )}

        {/* ✅ End marker */}
        {end && (
          <MapMarker longitude={end.lng} latitude={end.lat}>
            <MarkerContent>
              <div className="size-5 rounded-full bg-red-500" />
              <MarkerLabel>{end.name}</MarkerLabel>
            </MarkerContent>
          </MapMarker>
        )}

        <MapControls />
        <Point dataTeam={dataTeam} />
      </Map>
    </Card>
  )
}
