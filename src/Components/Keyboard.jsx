const Key = ({ value }) => <h1 className="p-1 flex-1 rounded-md bg-gray-300 text-gray-700 text-xs font-bold h-9 grid place-items-center hover:bg-gray-200">{value}</h1>; 

export default function Keyboard() {
    const keyData = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "", "Z", "X", "C", "V", "B", "N", "M", ""
    ];
    
    return (
        <div className="flex flex-col gap-1 w-[75%] items-center">
            <div className="w-full flex items-center gap-1">
                {
                    keyData.slice(0, 10).map(i => {
                        return (
                          <Key value={i} />
                        )
                    })
                }
            </div>
            <div className="w-full flex items-center gap-1">
                {
                    keyData.slice(10, 19).map(i => {
                        return (
                            <Key value={i} />
                        )
                    })
                }
            </div>
            <div className="w-full flex items-center gap-1">
                {
                    keyData.slice(19,).map(i => {
                        return (
                            <Key value={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}
