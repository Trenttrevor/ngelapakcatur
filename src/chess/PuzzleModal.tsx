import { useState } from "react"
import { Chessboard } from "react-chessboard"
import { Chess } from "chess.js"

type Puzzle = {
  fen: string
  solution: string[]
}

type Props = {
  puzzle: Puzzle
  onSolved: () => void
}

export default function PuzzleModal({ puzzle, onSolved }: Props) {
  const [game, setGame] = useState(new Chess(puzzle.fen))
  const [moveIndex, setMoveIndex] = useState(0)
  const [message, setMessage] = useState("Find the best move!")

  function handleMove(from: string, to: string) {
    const newGame = new Chess(game.fen())
    const move = newGame.move({ from, to, promotion: "q" })

    if (!move) return false

    console.log(move.from, move.to)
    console.log("User played:", move.san)

    const expected = puzzle.solution[moveIndex]

    if (move.san === expected) {
      setGame(newGame)
      setMoveIndex(moveIndex + 1)

      if (moveIndex + 1 === puzzle.solution.length) {
        setMessage("✅ Solved!")
        onSolved()
      } else {
        setMessage("Good move!")
      }

      return true
    } else {
      setMessage("❌ Wrong move")
      return false
    }
  }

  return (
    <div className="ml-[500px] flex w-[500px] flex-col rounded-xl bg-white p-4">
      <Chessboard position={game.fen()} onPieceDrop={handleMove} />
      <p className="mt-2 text-2xl">{message}</p>
    </div>
  )
}
