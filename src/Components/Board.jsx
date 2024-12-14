import Line from "./Line";

export default function Board({ guess, solution, currentGuess }) {
  return (
    <div className="flex flex-col gap-1">
      {guess.map((c, i) => (
        <Line
          key={i}
          value={c ?? ''}
          solution={solution}
          currentGuess={currentGuess}
          lineIndex={i}
        />
      ))}
    </div>
  );
}

