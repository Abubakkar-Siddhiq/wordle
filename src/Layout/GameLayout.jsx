import { useState, useEffect } from "react";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import Navbar from "../components/Navbar";
import words from "../words.json";
import GameOver from "../components/GameOver";

export default function GameLayout() {
    const [solution, setSolution] = useState('');
    const [guess, setGuess] = useState(Array(5).fill(""));
    const [currentGuess, setCurrentGuess] = useState(0);
    const [activeKey, setActiveKey] = useState(null);
    const [wordNotFound, setWordNotFound] = useState(false);
    const [gameOver, setGameOver] = useState({ state: false, result: ""});
    const [newGame, setNewGame] = useState(false);
    
    const keyData = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Delete", "Z", "X", "C", "V", "B", "N", "M", "Enter"
    ];

    const checkWord = (word) => words.includes(word.toLowerCase()) ? true : false;

    const resetGame = () => {
        setGuess(Array(5).fill(""));
        setCurrentGuess(0);
        setGameOver({
            state: false,
            result: "",
        });
        setNewGame(!newGame);
    }

    // To Handle Inputs
    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase();

            if (!gameOver.state && keyData.includes(key)) {
                setActiveKey(key);
                if(guess[currentGuess].length  < 5) {
                    let updatedGuess = [...guess];
                    updatedGuess[currentGuess] = updatedGuess[currentGuess]+key;
                    setGuess(updatedGuess);
                }
            }
            
            if (event.key === "Enter") {
                setActiveKey("Enter");
                if(guess[currentGuess]?.length > 4) {
                    if(checkWord(guess[currentGuess])) {
                        if(guess[currentGuess] === solution){
                            setCurrentGuess(prev => prev < 5 ? prev+1 : prev);
                            setGameOver({
                                state: true,
                                result: "win"
                            });
                        } else if (currentGuess === 4) {
                            setCurrentGuess(prev => prev < 5 ? prev+1 : prev);
                            setGameOver({
                                state: true,
                                result: "lose"
                            });
                        } else {
                            setCurrentGuess(prev => prev < 5 ? prev+1 : prev);
                        }
                    } else {
                        setWordNotFound(true);
                        setTimeout(() => setWordNotFound(false), 500);
                    }
                }

                if(gameOver.state) {
                    resetGame();
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
    },[newGame])

    return (
        <section className="w-[40rem] h-full flex flex-col gap-5 items-center justify-center">
            <Navbar />
            <Board guess={guess} solution={solution} currentGuess={currentGuess} wordNotFound={wordNotFound} />
            <Keyboard activeKey={activeKey} keyData={keyData} />

            {
                gameOver.state && <GameOver result={gameOver.result} />
            }
        </section>
    )
}