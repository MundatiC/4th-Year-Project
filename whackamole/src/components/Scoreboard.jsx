import { useContext } from "react"
import GameContext from "../ContextFile"
import Button from "./Button"

export default function Scoreboard( { results, setBoardActive } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    console.log(results)

    const returnMenuFunction = () => {
        setMenuActive(true)
        setBoardActive(false)
    }

    return (<>
        <div className="scoreboard-container flex flex-col items-center text-cream">

            <header className="py-5 font-bold tracking-widest text-2xl">
                <h2>Scoreboard</h2>
            </header>

            <div className="table-container w-full overflow-auto h-64 phone:h-96">
                <table className="w-full">
                    <thead className="sticky top-0 bg-darkgreen z-10">
                        <tr>
                            <th className="py-3 pe-2"><strong>User</strong></th>
                            <th className="py-3 pe-2 hidden phone:block"><strong>Topic</strong></th>
                            <th className="py-3 pe-2"><strong>Difficulty</strong></th>
                            <th className="py-3 pe-2"><strong>Score</strong></th>
                        </tr>
                    </thead>
                    <tbody className="relative top-3 text-center">
                        {results.map((item, index) => {
                            return <tr key={index} className="border-b border-cream border-dashed">
                                        <td className="pe-2 py-2">{item.user}</td>
                                        <td className="pe-2 hidden phone:table-cell">{item.topic}</td>
                                        <td className="pe-2">{item.difficulty}</td>
                                        <td className="pe-2">{item.score}</td>
                                    </tr>
                        })}
                    </tbody>
                </table>
            </div>

            <footer>
            <Button btnTitle="Exit Scoreboard" btnAction={returnMenuFunction} className="text-xl py-5 hover:cursor-pointer hover:underline underline-offset-8" />
            </footer>
        </div>
    </>)
}