const Cell = ({ value }) => {
    return (
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <h1 key={i} className="rounded-md border-2 border-gray-300 text-gray-800 text-3xl font-semibold w-16 h-16 grid place-items-center">
            {value}
          </h1>
        ))}
      </div>
    );
};
  
export default function Board() {
  return (
    <div className="flex flex-col gap-2">
        {
            Array.from({ length: 5 }).map((_, i) => {
                console.log(i)
               return  <Cell value={i} />
            })
        }
    </div>
  )
}