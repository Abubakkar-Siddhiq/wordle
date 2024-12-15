import Line from "./Line";

export default function Board({ guess, solution, currentGuess, wordNotFound }) {
  return (
    <div className="relative flex flex-col gap-1">
      {guess.map((c, i) => (
        <Line
          key={i}
          value={c ?? ''}
          solution={solution}
          currentGuess={currentGuess}
          lineIndex={i}
        />
      ))}

      {
        wordNotFound && (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md px-12 py-5 whitespace-nowrap shadow-sm ring-1 ring-red-400 shadow-gray-500">
              <h1 className="text-xl font-semibold">Word Not Found!</h1>
            </div>
        )
      }

    </div>
  );
}

