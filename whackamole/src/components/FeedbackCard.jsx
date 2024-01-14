import { useContext, useState } from "react"
import GameContext from "../ContextFile"
import Button from "./Button"

export default function FeedbackCard( { fbResults, deactivate } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    const [formActive, setFormActive] = useState(false)

    const readFunction = (e) => {
        setFormActive(false)
    }

    const writeFunction = () => {
        setFormActive(true)
    }

    const returnMenuFunction = () => {
        setMenuActive(true)
        deactivate(false)
    }

    const formatDate = (date) => {
        return date.split('-').reverse().map((d, i) => i === 2 ? d.slice(-2) : d).join('.');
    }


    console.log(fbResults)

    return (<>
            <div className="feedback-container flex flex-col items-center text-cream">
                <header className="py-5 font-bold tracking-widest text-2xl">
                    <h2>Feedback</h2>
                </header>

                <div className={`feedback-display overflow-auto w-full h-64 phone:h-96 ${formActive ? "hidden" : "block"}`}>
                    <table className="w-full">
                        <thead className="sticky top-0 bg-darkgreen z-10">
                            <tr>
                                <th className="py-2 pe-2 hidden phone:block"><strong>Date</strong></th>
                                <th className="py-2 pe-2"><strong>User</strong></th>
                                <th className="py-2 pe-2"><strong>Comment</strong></th>
                                <th className="py-2 pe-2"><strong>Rating</strong></th>
                            </tr>
                        </thead>
                        <tbody className="relative top-3 text-center">
                            {fbResults.map((item, index) => {
                                return <tr key={index} className="border-b border-cream border-dashed">
                                            <td className="pe-2 py-2 hidden phone:table-cell">{formatDate(item.date)}</td>
                                            <td className="pe-2 py-2">{item.user}</td>
                                            <td className="pe-2 py-2">{item.comment}</td>
                                            <td className="pe-2 py-2 font-bold text-2xl">{item.rating}</td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                </div>

                <div className={`feedback-form w-full ${formActive ? "block" : "hidden"} h-64 phone:h-96 px-5`}>
                    <form className="flex flex-wrap justify-around" action="http://localhost:8000/add_feedback.php" method="post" onSubmit={readFunction}>

                        <input className="my-3 phone:my-5 p-1 phone:p-2 rounded-md bg-darkergreen text-cream placeholder:text-cream shadow-md shadow-green flex-1 min-w-[8rem]" type="text" name="user" defaultValue={playerName} placeholder="Enter name..." />

                        <select className="my-3 phone:my-5 p-1 phone:p-2 rounded-md bg-darkergreen text-cream placeholder:text-cream shadow-md shadow-green ms-1 phone:ms-5"  name="rating" id="rating">
                            <option value="">Rating</option> 
                            <option value="10">10</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                            <option value="7">7</option>
                            <option value="6">6</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>

                        <input className="my-3 mx-auto phone:my-5 p-1 phone:p-2 rounded-md bg-darkergreen text-cream placeholder:text-cream shadow-md shadow-green w-full" type="text" name="comment" placeholder="Enter comment..." />

                        <button className="my-1 phone:my-3 mx-auto p-1 phone:p-2 w-2/3 rounded-md bg-darkergreen text-cream font-bold tracking-wider phone:tracking-widest shadow-md shadow-green hover:bg-darkgreen max-w-[15rem]" type="submit" name="submit">Send Feedback!</button>

                    </form>
                </div>

                <footer className="flex flex-col phone:flex-row justify-evenly w-full">

                    <Button btnTitle="Write Feedback" btnAction={writeFunction} className={`text-lg phone:text-xl pt-2 phone:mt-5 hover:cursor-pointer hover:underline underline-offset-8 ${formActive ? "hidden" : "block"}`} /> 

                    <Button btnTitle="Exit Page" btnAction={returnMenuFunction} className="text-lg phone:text-xl pt-2 phone:mt-5 hover:cursor-pointer hover:underline underline-offset-8" /> 


                </footer>
            </div>
        </>)
}

// needs tweaking so most recent feedback displayed first
// needs frontend validation - name max length 6 chars
// use fontawesome icon instead of 'rating/r'
// change and put a button for writing feedback...this makes feedback temp vanish...looks too cluttered at mo