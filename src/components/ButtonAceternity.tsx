import { HoverBorderGradient } from "./ui/hover-border-gradient"

export function ButtonAceternity() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
      >
        <span>Challenge</span>
      </HoverBorderGradient>
    </div>
  )
}
