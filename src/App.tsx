import { Separator } from "./components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar"
import { ActiveOpponent } from "./map/ActiveOpponent"
import { MyMap } from "./map/MyMap"
import { dataTeam } from "./dummies/dataTeam"
import { useState } from "react"

type Point = {
  name: string
  lng: number
  lat: number
}

export function App() {
  const [start, setStart] = useState<Point | null>(null)
  const [end, setEnd] = useState<Point | null>(null)
  return (
    <SidebarProvider>
      <div className="relative h-screen w-screen overflow-hidden">
        <Sidebar variant="sidebar" className="w-67.5">
          <SidebarContent className="p-4">
            <div className="mx-3">
              <ActiveOpponent
                dataTeam={dataTeam}
                start={start}
                end={end}
                setStart={setStart}
                setEnd={setEnd}
              />
            </div>
          </SidebarContent>

          <div className="absolute top-4 left-70 z-50 flex items-center gap-3 rounded-lg border border-border/40 bg-background/70 px-2.5 py-2 backdrop-blur-sm">
            <div className="flex h-5 items-center gap-4 text-sm">
              <SidebarTrigger />
              <Separator orientation="vertical" />
              <div className="size-2.5 shrink-0 rounded-full border border-white bg-blue-500 shadow-sm" />
              <div>Ready</div>
              <Separator orientation="vertical" />
              <div className="size-2.5 shrink-0 rounded-full border border-white bg-red-500 shadow-sm" />
              <h1>Off</h1>
            </div>
          </div>
        </Sidebar>
        <MyMap start={start} end={end} setStart={setStart} setEnd={setEnd} />
      </div>
    </SidebarProvider>
  )
}

export default App
