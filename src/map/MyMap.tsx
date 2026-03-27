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
export function MyMap({ start, end, setStart, setEnd }: Props) {
  return (
    <Card className="h-full w-full overflow-hidden p-0">
      <Map center={[12.36, 51.3308]} zoom={11}>
        {/* ✅ Only render if both exist */}
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
