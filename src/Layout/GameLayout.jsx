import { useState, useEffect } from "react";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import Navbar from "../components/Navbar";

export default function GameLayout() {
    const [activeKey, setActiveKey] = useState(null);
    
    const keyData = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "", "Z", "X", "C", "V", "B", "N", "M", "Enter"
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase();
            console.log(activeKey)
            if (keyData.includes(key)) {
              setActiveKey(key);
              setTimeout(() => setActiveKey(null), 150);
            }

            if (event.keyCode === 13) {
                setActiveKey("Enter");
                setTimeout(() => setActiveKey(null), 150);
            }
          };
      
          window.addEventListener('keydown', handleKeyDown);
          return () => {
            window.removeEventListener('keydown', handleKeyDown);
          };
    }, [])

    return (
        <section className="w-[40rem] h-full flex flex-col gap-5 items-center justify-center">
            <Navbar />
            <Board />
            <Keyboard activeKey={activeKey} keyData={keyData} />
        </section>
    )
}