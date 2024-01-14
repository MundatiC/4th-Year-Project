import { useContext } from "react"
import GameContext from "../ContextFile"

export default function TimeScore() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive, correctAnswers, setCorrectAnswers, correctClicks, setCorrectClicks] = useContext(GameContext)

    
    return (

        <div className="time-and-score flex justify-evenly py-3 text-cream text-xl font-bold tracking-wider">
            <div className="time">
                <p>Time: <span>{gameTime}</span></p>
            </div>
            <div className="score">
                <p>Score: <span>{points}</span></p>
            </div>
        </div>

    )
}

