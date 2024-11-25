import { useState, useEffect } from "react";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import Navbar from "../components/Navbar";
import words from "../words.json";

export default function GameLayout() {
    const [solution, setSolution] = useState('');
    const [guess, setGuess] = useState(Array(5).fill(""));


    // Guesses
    // [
    //     "", 0
    //     "", 1
    //     "", 2
    //     "", 3
    //     "", 4
    // ]

    const [currentGuess, setCurrentGuess] = useState(0); // 0 - 4 so basically 5.
    const [activeKey, setActiveKey] = useState(null);
    
    const keyData = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Delete", "Z", "X", "C", "V", "B", "N", "M", "Enter"
    ];

    const check = (x) => {
        console.log("Check -> ", x)
    }

    // To Handle Inputs
    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase();

            if (keyData.includes(key)) {
                setActiveKey(key);
                if(guess[currentGuess].length  < 5) {
                    let updatedGuess = [...guess];
                    updatedGuess[currentGuess] = updatedGuess[currentGuess]+key;
                    setGuess(updatedGuess);
                }
                
            }
            
            if (event.key === "Enter") {
                setActiveKey("Enter");
                if(guess[currentGuess].length > 4) {
                    check(guess[currentGuess]);
                    setCurrentGuess(prev => prev < 4 ? prev+1 : prev);
                }
            }
            
            if (event.key === "Backspace") {
                setActiveKey("Delete");
                if(guess[currentGuess].length > 0) {
                    let updatedGuess = [...guess];
                    updatedGuess[currentGuess] = updatedGuess[currentGuess].slice(0, -1);
                    setGuess(updatedGuess);
                }
            }
            setTimeout(() => setActiveKey(null), 150);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [guess, currentGuess])
    
    // To Set Solution
    useEffect(() => {
        setSolution(words[Math.floor(Math.random() * words.length)].toUpperCase())
    },[])

    return (
        <section className="w-[40rem] h-full flex flex-col gap-5 items-center justify-center">
            <Navbar />
            <Board guess={guess} solution={solution} />
            <Keyboard activeKey={activeKey} keyData={keyData} />
            {solution}
            <br />
            {"Guess -> ["+guess+"]"}
            <br />
            {"Available Guesses -> "+currentGuess}
        </section>
    )
}