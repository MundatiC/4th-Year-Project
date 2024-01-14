import { useContext } from "react"
import GameContext from "../ContextFile"

export default function ScoreForm() {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)


    let result;
    const submitForm = (e) => {
        e.preventDefault()

        const form = e.target
        console.log(e.target.action)
        const xhr = new XMLHttpRequest();

        xhr.open('POST', form.attributes[1].value);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                result = this.responseText;
            }
        });

        const formData = new FormData(form);
        xhr.send(formData);

        setScoreFormActive(false)
        setPoints(0)
        setPlayerName("")


    }

    return (

        <>

            <div className="scoreform-container flex flex-col items-center text-cream">
                <header className="py-5 mb-5 font-bold tracking-widest text-2xl underline underline-offset-8">
                    <h2>Record Your Score</h2>
                </header>

                <form className="flex flex-col items-center" action="http://localhost:8000/add_score.php" method="POST" onSubmit={(e) => submitForm(e)}>

                    {/* hide these readonly inputs and display their values in paragraphs for nicer UX */}
                    <input className="hidden" type="text" name="difficulty" value={gameDifficulty} readOnly />
                    <p className="py-2 text-xl tracking-wider"><strong>Game Difficulty:</strong> {gameDifficulty}</p>

                    <input className="hidden" type="text" name="topic" value={gameTopic} readOnly />
                    <p className="py-2 text-xl tracking-wider"><strong>Game Topic</strong>: {gameTopic}</p>

                    <input className="hidden" type="number" name="score" value={points} readOnly />
                    <p className="py-2 text-xl tracking-wider"><strong>Final Score:</strong> {points}</p>

                    <input className="my-3 phone:my-5 p-2 rounded-md bg-darkergreen text-cream placeholder:text-cream shadow-md shadow-green" type="text" name="user" onChange={(e) => setPlayerName(e.target.value)} placeholder="Enter name..." defaultValue={playerName} required />


                    <button className="my-3 phone:my-5 mx-auto p-2 w-2/3 rounded-md bg-darkergreen text-cream font-bold tracking-wider shadow-md shadow-green hover:bg-darkgreen" type="submit" name="score_submit">Submit</button>

                </form>
                
            </div>

        </>

    )
}