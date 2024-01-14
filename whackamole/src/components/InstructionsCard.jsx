import { useContext } from "react"
import GameContext from "../ContextFile"
import Button from "./Button"

export default function InstructionsCard( { deactivate } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    const returnMenuFunction = () => {
        setMenuActive(true)
        deactivate(false)
    }

    return (<>
        <div className="instructions-container flex flex-col items-center text-cream px-5">
            <header className="py-5 font-bold tracking-widest text-2xl">
                <h2>Instructions</h2>
            </header>

            <div className="instructions-display ps-3">
                <ul className="list-disc">
                    <li className="py-1 phone:py-3 text-sm phone:text-base tracking-wider">Hit 'Play' to begin game</li>
                    <li className="py-1 phone:py-3 text-sm phone:text-base tracking-wider">Listen for English noun and whack correct image</li>
                    <li className="py-1 phone:py-3 text-sm phone:text-base tracking-wider">Change topic and difficulty in 'Settings'</li>
                    <li className="py-1 phone:py-3 text-sm phone:text-base tracking-wider">Win as many points as you can</li>
                    <li className="py-1 phone:py-3 text-sm phone:text-base tracking-wider">Record your score at end</li>
                    <li className="py-1 phone:py-3 text-sm phone:text-base tracking-wider">Leave feedback and suggestions if you want</li>
                    <li className="py-1 phone:py-3 text-sm phone:text-base tracking-wider">Have fun and good luck!</li>
                </ul>
            </div>

            <footer>
                <Button btnTitle="Exit Page" btnAction={returnMenuFunction} className="text-xl py-5 hover:cursor-pointer hover:underline underline-offset-8" />
            </footer>
        </div>
    </>)
}