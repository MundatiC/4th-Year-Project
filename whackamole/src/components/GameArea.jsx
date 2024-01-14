import Hole from "./Hole"
// import Mole from "../images/mole.png"
import { useRef, useContext, useEffect, useState } from "react";
import GameContext from "../ContextFile"
import smashSound from "../audio/boing.mp3"

export default function GameArea( { mousemove } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive, correctAnswers, setCorrectAnswers, correctClicks, setCorrectClicks] = useContext(GameContext)
    
    let occupiedHoles = useRef([])
    const [randomVal, setRandomVal] = useState(0)
    const [imageClicked, setImageClicked] = useState(false)
    const boingSound = new Audio(smashSound)

    const imgClickHandler = (e) => {

        boingSound.play()

        const regex = /\/(.*?)\./
        const match = randomAudio.match(regex);
        const audioWordToMatch = match[1].split("/")
        const wordCall = audioWordToMatch[2]

        const imgWord = e.target.src
        const matchImgWord = imgWord.match(regex)
        const imgWordToMatch = matchImgWord[1].split("/")
        const clickedImg = imgWordToMatch[4]

        if(wordCall === clickedImg) {
            setCorrectAnswers(correctAnswers => correctAnswers + 1)
            setCorrectClicks(correctClicks => correctClicks + 1)
            switch(gameDifficulty) {
                case "Easy":
                    setPoints(points => points+1);
                    break;
                case "Medium":
                    setPoints(points => points+5);
                    break;
                    case "Hard":
                    setPoints(points => points+10);
                    break;
            }
        } else {
            setCorrectAnswers(correctAnswers => correctAnswers - 1)
            setCorrectClicks(correctClicks => correctClicks - 1)
            switch(gameDifficulty) {
                case "Easy":
                    setPoints(points => points-1);
                    break;
                case "Medium":
                    setPoints(points => points-5);
                    break;
                    case "Hard":
                    setPoints(points => points-10);
                    break;
            }
        }

        const holeToCancel = e.target.parentElement.classList[1]
        const updatedHoles = [...holesOccupied]
        updatedHoles[holeToCancel] = null
        setHolesOccupied(updatedHoles)
        setImageClicked(true)
    }

    useEffect(() => {
        if(correctClicks === 2) {
            console.log('Yay, multi points!')
            switch(gameDifficulty) {
                case "Easy":
                    setPoints(points => points+5);
                    break;
                case "Medium":
                    setPoints(points => points+25);
                    break;
                    case "Hard":
                    setPoints(points => points+50);
                    break;
            }
        }
    }, [correctClicks])



    let randomValue;
    useEffect(() => {
        occupiedHoles.current = []
        holesOccupied.forEach((item, index) => {
            if(item === true) {
                occupiedHoles.current.push(index)
            }
        })
        // console.log(occupiedHoles.current)
        if(!imageClicked) {
            const randomIndex = Math.floor(Math.random() * occupiedHoles.current.length)
            randomValue = occupiedHoles.current[randomIndex]
            setRandomVal(randomValue)
        } else {
            setImageClicked(false)
        }
       
    }, [holesOccupied])

    return (
        <div className="game-area w-fit mx-auto grid grid-cols-3 grid-flow-row justify-items-center py-5" onMouseMove={mousemove}>
            {holes.map((hole, index) => (
                <Hole key={index} id={index} occupied={holesOccupied[index]} randomVal={randomVal} clickHandler={imgClickHandler} />
            ))}
        </div>
    )
}


/* NEED SOMETHING LIKE THIS TO ENSURE RANDOM VALUE DIFFERENT EVERYTIME ...

      let newRandomValue;
  do {
    const randomIndex = Math.floor(Math.random() * occupiedHoles.current.length);
    newRandomValue = occupiedHoles.current[randomIndex];
  } while (newRandomValue === randomValue);

  setRandomVal(newRandomValue);
  
*/