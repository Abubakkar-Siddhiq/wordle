const Line = ({ value, solution }) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <h1 key={i} className="rounded-md border-2 border-gray-300 text-gray-800 uppercase text-2xl font-semibold w-14 h-14 grid place-items-center">
          {value[i]}
        </h1>
      ))}
    </div>
  );
};

export default function Board({ guess, solution }) {
  return (
    <div className="flex flex-col gap-2">
      {
        guess.map((c, i) => {
          console.log(c)
          return <Line value={c ?? ''} />
        })
      }
    </div>
  )
}