const Key = ({ value, isActive, bigKey }) => <h1 className={`px-2 py-1 flex-1 rounded-md text-gray-700 font-bold h-12 grid place-items-center hover:bg-gray-200 ${bigKey && 'px-6'} ${ isActive ? 'bg-gray-100' : 'bg-gray-300' }`}>{value}</h1>; 
 
export default function Keyboard( { activeKey, keyData } ) {
    
    return (
        <div className="flex flex-col gap-1 w-full items-center scale-75 md:scale-90">
            <div className="w-full flex items-center gap-1">
                {
                    keyData.slice(0, 10).map(i => (
                        <Key value={i} isActive={i == activeKey} />
                    ))
                }
            </div>
            <div className="w-full flex items-center gap-1">
                {
                    keyData.slice(10, 19).map(i => (
                        <Key value={i} isActive={i == activeKey} />
                    ))
                }
            </div>
            <div className="w-full flex items-center gap-1">
                {
                    keyData.slice(19,).map(i => {
                        return i.length > 1 
                            ? <Key value={i} isActive={i == activeKey} bigKey /> 
                            : <Key value={i} isActive={i == activeKey} />;
                        })
                }
            </div>
        </div>
    )
}
