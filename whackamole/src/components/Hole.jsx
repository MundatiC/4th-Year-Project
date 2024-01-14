import { useContext, useEffect, useState } from "react"
import GameContext from "../ContextFile"

export default function Hole( { id, occupied, randomVal, clickHandler } ) {

    const [holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive] = useContext(GameContext)

    const [holeImage, setHoleImage] = useState()

    useEffect(() => {
        if (occupied) {
          const newImage = generateImage();
          setHoleImage(newImage);
        }
    }, [randomVal]);
    
    const generateImage = () => {
    
        const regex = /\/(.*?)\./
        const match = randomAudio.match(regex)
        const audioWordToMatch = match[1].split("/")
        const wordCall = audioWordToMatch[2]
    
        // console.log(randomVal) 

        switch(gameTopic) {
            case "Animals":
                if(randomVal === id) {
                    const returnVal = animalArray.filter(item => {
                        if(item.name === wordCall) {
                            return item.icon;
                        }
                    })
                    return returnVal[0].icon
                } else {
                    return animalArray[Math.floor(Math.random() * animalArray.length)].icon
                };
                break;
            case "Colors":
                if(randomVal === id) {
                    const returnVal = colorArray.filter(item => {
                        if(item.name === wordCall) {
                            return item.icon;
                        }
                    })
                    return returnVal[0].icon
                } else {
                    return colorArray[Math.floor(Math.random() * colorArray.length)].icon
                }
            case "Foods":
                if(randomVal === id) {
                    const returnVal = foodArray.filter(item => {
                        if(item.name === wordCall) {
                            return item.icon;
                        }
                    })
                    return returnVal[0].icon
                } else {
                    return foodArray[Math.floor(Math.random() * foodArray.length)].icon
                }
            case "Body Parts":
                if(randomVal === id) {
                    const returnVal = bodypartsArray.filter(item => {
                        if(item.name === wordCall) {
                            return item.icon;
                        }
                    })
                    return returnVal[0].icon
                } else {
                    return bodypartsArray[Math.floor(Math.random() * bodypartsArray.length)].icon
                }
        }
    
        
    
    }
    
    return (
        <div className={`hole ${id} rounded-full m-1 phone:m-3 w-20 phone:w-28 h-20 phone:h-28 bg-lightgreen shadow-inner shadow-darkergreen border-b border-darkergreen opacity-80 relative`}> 

            <p className={`${occupied ? "hidden" : "block"} absolute top-1/2 -translate-y-1/2 text-cream inset-0 flex items-center justify-center z-10 text-5xl font-bold`}>{id + 1}</p>
            <img src={occupied ? holeImage : ""} className="hole-image z-50 max-h-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" onClick={(e) => clickHandler(e)} alt="" />

        </div>
    )
}




