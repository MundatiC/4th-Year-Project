import { useContext, useState, useRef } from "react"
import GameContext from "../ContextFile"
import SettingsCard from "./SettingsCard"
import Scoreboard from "./Scoreboard"
import FeedbackCard from "./FeedbackCard"
import InstructionsCard from "./InstructionsCard"

export default function MenuCard( { scoreResults, feedbackResults } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    const [settingsCardActive, setSettingsCardActive] = useState(false)
    const [scoreboardActive, setScoreboardActive] = useState(false)
    const [feedbackCardActive, setFeedbackCardActive] = useState(false)
    const [instructionsCardActive, setInstructionsCardActive] = useState(false)

    const instructionsCardFunction = () => {
        setInstructionsCardActive(true)
    }

    const settingsCardFunction = () => {
        setSettingsCardActive(true)
    }

    const scoreboardFunction = () => {   
        setScoreboardActive(true)
    }

    const feedbackCardFunction = () => {
        setFeedbackCardActive(true)
    }

    const exitMenuFunction = () => {
        setMenuActive(false)
    }

    return ( <>
    
                <div className={`menu-container ${(settingsCardActive || scoreboardActive || feedbackCardActive || instructionsCardActive) && "hidden"}`}>
                        <div className="menu flex flex-col items-center text-cream">
                            <header className="py-5 font-bold tracking-widest text-2xl">
                                <h2>Game Menu</h2>
                            </header>
                            <ul className="mt-0 phone:mt-5 flex flex-col items-center">

                                <li className="py-4 phone:py-5 text-xl tracking-wider hover:cursor-pointer hover:underline underline-offset-8" onClick={instructionsCardFunction}>Instructions</li>

                                <li className="py-4 phone:py-5 text-xl tracking-wider hover:cursor-pointer hover:underline underline-offset-8" onClick={settingsCardFunction}>Settings</li>

                                <li className="py-4 phone:py-5 text-xl tracking-wider hover:cursor-pointer hover:underline underline-offset-8" onClick={scoreboardFunction}>Scoreboard</li>

                                <li className="py-4 phone:py-5 text-xl tracking-wider hover:cursor-pointer hover:underline underline-offset-8" onClick={feedbackCardFunction}>Feedback</li>

                                <li className="py-4 phone:py-5 text-xl tracking-wider hover:cursor-pointer hover:underline underline-offset-8" onClick={exitMenuFunction}>Exit Menu</li>

                            </ul>
                        </div>
                    </div>

                    {instructionsCardActive && <InstructionsCard deactivate={setInstructionsCardActive} />}

                    {settingsCardActive && <SettingsCard cardActive={settingsCardActive} setCardActive={setSettingsCardActive} />}

                    {scoreboardActive && <Scoreboard results={scoreResults.current}  setBoardActive={setScoreboardActive} />}

                    {feedbackCardActive && <FeedbackCard fbResults={feedbackResults.current} deactivate={setFeedbackCardActive} />}

            </>
        
    )
}