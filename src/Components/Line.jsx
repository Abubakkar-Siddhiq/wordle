export default function Line({ value, solution, currentGuess, lineIndex }){

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        // How to make this code run only for previous two indexes of the guesses array? Eg: ["baker", "Hanna", "..", "...", ".."]
        if(lineIndex < currentGuess && value.length === 5 ) {
            if(solution[i] == value[i]) {
                return (
                    <h1
                        key={i}
                        className={`rounded-md uppercase text-2xl font-semibold w-14 h-14 grid place-items-center bg-[#31c26e] text-white`}
                    >
                        {value[i] || ''}
                    </h1>
                )
            } else if (solution.includes(value[i])) {
                return (
                    <h1
                        key={i}
                        className={`rounded-md uppercase text-2xl font-semibold w-14 h-14 grid place-items-center bg-[#F3C237] text-white`}
                    >
                        {value[i] || ''}
                    </h1>
                )
            } else {
                return (
                    <h1
                        key={i}
                        className={`rounded-md uppercase text-2xl font-semibold w-14 h-14 grid place-items-center bg-[#A4AEC4] text-white`}
                    >
                        {value[i] || ''}
                    </h1>
                )
            }
        }

        return (
            <h1
                key={i}
                className={`rounded-md text-gray-700 uppercase text-2xl font-semibold w-14 h-14 grid place-items-center border-2 border-gray-300`}
            >
                {value[i] || ''}
            </h1>
        )
      })}
    </div>
  );
};