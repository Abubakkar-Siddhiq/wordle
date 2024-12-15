export default function GameOver({ result }) {
  return (
    <div className="absolute w-[20rem] left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 rounded-md overflow-hidden ring-2 ring-green-300">
        <div className="pt-6 pb-2 py-8 bg-white items-center flex flex-col justify-between">
            <h1 className="text-2xl font-semibold">
              {
                result === "win" ? "You Won 🏆" : "You Lost 💔" 
              }
            </h1>
            <i className="text-xs text-gray-400 mt-6">Press [Enter] for New Game</i>
        </div>
    </div>
  )
}
