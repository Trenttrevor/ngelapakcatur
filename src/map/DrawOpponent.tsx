import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import type { TeamType } from "@/dummies/dataTeam"
import { KeyPlayers } from "./KeyPlayers"
import { Separator } from "@/components/ui/separator"
import { ChallengePopup } from "./ChallengePopup"

type TeamProps = {
  dataTeam: TeamType[]
  selectedTeam: number | undefined
  onSelect: () => void
}

export function DrawOpponent({ dataTeam, selectedTeam, onSelect }: TeamProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline" className="capitalize" onClick={onSelect}>
            View Team
          </Button>
        </DrawerTrigger>

        {dataTeam.map(
          (team) =>
            selectedTeam === team.id && (
              <>
                <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
                  <DrawerHeader>
                    <img
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
                      alt="Event cover"
                      className="h-50 w-full rounded-xl object-cover"
                    />
                    <DrawerTitle className="mt-5">{team.nameTeam}</DrawerTitle>

                    <DrawerDescription>
                      ELO RATING (AVR):{" "}
                      <p className="font-bold text-white">{team.eloAverage}</p>
                    </DrawerDescription>
                    <DrawerDescription>
                      Members:{" "}
                      <p className="font-bold text-white">
                        {team.amountMember} Persons
                      </p>
                    </DrawerDescription>
                    <Separator className="mt-5" />

                    <div className="mt-5 flex flex-col">
                      <h1 className="mb-2 text-xl">Key Players</h1>
                      <KeyPlayers team={team} />
                    </div>
                    <Separator className="mt-5" />
                  </DrawerHeader>
                  <div className="no-scrollbar overflow-y-auto px-4"></div>
                  <DrawerFooter>
                    <ChallengePopup team={team} />
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </>
            )
        )}
      </Drawer>
    </div>
  )
}
