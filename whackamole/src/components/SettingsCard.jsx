import { useContext, useState } from "react"
import GameContext from "../ContextFile"
import Button from "./Button"

export default function SettingsCard( { cardActive, setCardActive } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    const [formPlayer, setFormPlayer] = useState("")
    const [formTopic, setFormTopic] = useState("")
    const [formDifficulty, setFormDifficulty] = useState("")

    const nameChange = (name) => {
        setFormPlayer(name)
    }

    const topicChange = (topic) => {
        setFormTopic(topic)
    }

    const difficultyChange = (difficulty) => {
        setFormDifficulty(difficulty)
    }

    const returnMenuFunction = () => {
        setCardActive(false)
        setMenuActive(true)
    }

    const settingsFormSubmit = (e) => {
        e.preventDefault()
        setPlayerName(formPlayer)
        if(formTopic) {
            setGameTopic(formTopic)
        } else {
            setGameTopic(gameTopic)
        }
        if(formDifficulty) {
            setGameDifficulty(formDifficulty)
        } else {
            setGameDifficulty(gameDifficulty)
        }
        setMenuActive(false)
    }

    return (

        <>
        
            <div className="settings-container flex flex-col items-center text-cream">
                <header className="py-5 font-bold tracking-widest text-2xl text-center">
                    <h2>Game Settings</h2>
                </header>
                
                <form className="flex flex-col h-full w-11/12 max-w-md mx-auto" action="" onSubmit={settingsFormSubmit}>

                    <input className="my-3 phone:my-5 p-2 rounded-md bg-darkergreen text-cream placeholder:text-cream shadow-md shadow-green" type="text" name="nameInput" onChange={(e) => nameChange(e.target.value)} placeholder="Player Name..." />

                        <select className="my-3 phone:my-5 p-2 rounded-md bg-darkergreen text-cream placeholder:text-cream shadow-md shadow-green" name="gameTopic" id="gameTopic" onChange={(e) => topicChange(e.target.value)}>
                            <option value="">--Select Topic--</option>
                            <option value="Animals">Animals</option>
                            <option value="Foods">Foods</option>
                            <option value="Colors">Colors</option>
                            <option value="Body Parts">Body Parts</option>
                        </select>

                        <select className="my-3 phone:my-5 p-2 rounded-md bg-darkergreen text-cream placeholder:text-cream shadow-md shadow-green" name="gameDifficulty" id="gameDifficulty" onChange={(e) => difficultyChange(e.target.value)}>
                            <option value="">--Select Difficulty--</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
            
                    <button className="my-3 phone:my-5 mx-auto p-2 w-2/3 rounded-md bg-darkergreen text-cream font-bold tracking-wider phone:tracking-widest max-w-[15rem] shadow-md shadow-green hover:bg-darkgreen" type="submit">Submit Form</button>
                </form>
                
                <Button btnTitle="Exit Settings" btnAction={returnMenuFunction} className="text-xl py-5 hover:cursor-pointer hover:underline underline-offset-8" /> 

            </div>
        
        </>

    )
}