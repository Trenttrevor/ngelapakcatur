import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SwordsIcon } from "lucide-react"
import type { TeamType } from "@/dummies/dataTeam"
import { ButtonAceternity } from "@/components/ButtonAceternity"

type Props = {
  team: TeamType
}

export function ChallengePopup({ team }: Props) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline">
            {" "}
            <SwordsIcon />
            Challenge
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ready to Play?</DialogTitle>
          <DialogDescription>
            {team.nameTeam} Ready to accept challenge
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          There are some rules to play away. Please respect home team
        </div>
        <DialogFooter className="flex items-center">
          <ButtonAceternity />
          <DialogClose render={<Button variant="outline">Close</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
