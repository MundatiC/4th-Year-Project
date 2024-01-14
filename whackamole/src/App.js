// MISC IMPORTS
import './App.css';
import { useState, useEffect, useRef } from 'react';


// COMPONENT IMPORTS
import Header from './components/Header';
import TimeScore from './components/TimeScore';
import GameArea from './components/GameArea';
import Footer from './components/Footer';
import GameContext from "./ContextFile"
import MenuCard from './components/MenuCard';


// FILE IMPORTS - IMAGES
// animals
import mole from "./images/animals/mole.png"
import bird from "./images/animals/bird.png"
import cat from "./images/animals/cat.png"
import dog from "./images/animals/dog.png"
import zebra from "./images/animals/zebra.png"
import elephant from "./images/animals/elephant.png"
import lion from "./images/animals/lion.png"
import monkey from "./images/animals/monkey.png"
import giraffe from "./images/animals/giraffe.png"
import fish from "./images/animals/fish.png"
import horse from "./images/animals/horse.png"
import tiger from "./images/animals/tiger.png"
import penguin from "./images/animals/penguin.png"
import turtle from "./images/animals/turtle.png"
import dolphin from "./images/animals/dolphin.png"

// foods
import apple from "./images/foods/apple.png"
import banana from "./images/foods/banana.png"
import bread from "./images/foods/bread.png"
import broccoli from "./images/foods/broccoli.png"
import carrot from "./images/foods/carrot.png"
import cereal from "./images/foods/cereal.png"
import cheese from "./images/foods/cheese.png"
import chocolate from "./images/foods/chocolate.png"
import chicken from "./images/foods/chicken.png"
import egg from "./images/foods/egg.png"
import milk from "./images/foods/milk.png"
import pasta from "./images/foods/pasta.png"
import pizza from "./images/foods/pizza.png"
import strawberry from "./images/foods/strawberry.png"
import yogurt from "./images/foods/yogurt.png"

// bodyparts
import arm from "./images/bodyparts/arm.png"
import chest from "./images/bodyparts/chest.png"
import ear from "./images/bodyparts/ear.png"
import elbow from "./images/bodyparts/elbow.png"
import eye from "./images/bodyparts/eye.png"
import foot from "./images/bodyparts/foot.png"
import hair from "./images/bodyparts/hair.png"
import hand from "./images/bodyparts/hand.png"
import head from "./images/bodyparts/head.png"
import knee from "./images/bodyparts/knee.png"
import leg from "./images/bodyparts/leg.png"
import mouth from "./images/bodyparts/mouth.png"
import nose from "./images/bodyparts/nose.png"

// colors
import red from "./images/colors/red.png"
import blue from "./images/colors/blue.png"
import green from "./images/colors/green.png"
import yellow from "./images/colors/yellow.png"
import orange from "./images/colors/orange.png"
import purple from "./images/colors/purple.png"
import black from "./images/colors/black.png"
import white from "./images/colors/white.png"
import grey from "./images/colors/grey.png"

// FILE IMPORTS - AUDIO
// animals
import moleMP3 from "./audio/animals/mole.mp3"
import birdMP3 from "./audio/animals/bird.mp3"
import catMP3 from "./audio/animals/cat.mp3"
import dogMP3 from "./audio/animals/dog.mp3"
import zebraMP3 from "./audio/animals/zebra.mp3"
import elephantMP3 from "./audio/animals/elephant.mp3"
import lionMP3 from "./audio/animals/lion.mp3"
import monkeyMP3 from "./audio/animals/monkey.mp3"
import giraffeMP3 from "./audio/animals/giraffe.mp3"
import fishMP3 from "./audio/animals/fish.mp3"
import horseMP3 from "./audio/animals/horse.mp3"
import tigerMP3 from "./audio/animals/tiger.mp3"
import penguinMP3 from "./audio/animals/penguin.mp3"
import turtleMP3 from "./audio/animals/turtle.mp3"
import dolphinMP3 from "./audio/animals/dolphin.mp3"

// foods
import appleMP3 from "./audio/foods/apple.mp3"
import bananaMP3 from "./audio/foods/banana.mp3"
import breadMP3 from "./audio/foods/bread.mp3"
import broccoliMP3 from "./audio/foods/broccoli.mp3"
import carrotMP3 from "./audio/foods/carrot.mp3"
import cerealMP3 from "./audio/foods/cereal.mp3"
import cheeseMP3 from "./audio/foods/cheese.mp3"
import chocolateMP3 from "./audio/foods/chocolate.mp3"
import chickenMP3 from "./audio/foods/chicken.mp3"
import eggMP3 from "./audio/foods/egg.mp3"
import milkMP3 from "./audio/foods/milk.mp3"
import pastaMP3 from "./audio/foods/pasta.mp3"
import pizzaMP3 from "./audio/foods/pizza.mp3"
import strawberryMP3 from "./audio/foods/strawberry.mp3"
import yogurtMP3 from "./audio/foods/yogurt.mp3"

// bodyparts
import armMP3 from "./audio/bodyparts/arm.mp3"
import chestMP3 from "./audio/bodyparts/chest.mp3"
import earMP3 from "./audio/bodyparts/ear.mp3"
import elbowMP3 from "./audio/bodyparts/elbow.mp3"
import eyeMP3 from "./audio/bodyparts/eye.mp3"
import footMP3 from "./audio/bodyparts/foot.mp3"
import hairMP3 from "./audio/bodyparts/hair.mp3"
import handMP3 from "./audio/bodyparts/hand.mp3"
import headMP3 from "./audio/bodyparts/head.mp3"
import kneeMP3 from "./audio/bodyparts/knee.mp3"
import legMP3 from "./audio/bodyparts/leg.mp3"
import mouthMP3 from "./audio/bodyparts/mouth.mp3"
import noseMP3 from "./audio/bodyparts/nose.mp3"

// colors
import redMP3 from "./audio/colors/red.mp3"
import blueMP3 from "./audio/colors/blue.mp3"
import greenMP3 from "./audio/colors/green.mp3"
import yellowMP3 from "./audio/colors/yellow.mp3"
import orangeMP3 from "./audio/colors/orange.mp3"
import purpleMP3 from "./audio/colors/purple.mp3"
import blackMP3 from "./audio/colors/black.mp3"
import whiteMP3 from "./audio/colors/white.mp3"
import greyMP3 from "./audio/colors/grey.mp3"

import ScoreForm from './components/ScoreForm';


// GLOBAL VARIABLES, ARRAYS, ETC
const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const animalArray = [
    {icon: mole, name: "mole"},
    {icon: bird, name: "bird"},
    {icon: cat, name: "cat"},
    {icon: dog, name: "dog"},
    {icon: zebra, name: "zebra"},
    {icon: elephant, name: "elephant"},
    {icon: lion, name: "lion"},
    {icon: monkey, name: "monkey"},
    {icon: giraffe, name: "giraffe"},
    {icon: fish, name: "fish"},
    {icon: horse, name: "horse"},
    {icon: tiger, name: "tiger"},
    {icon: penguin, name: "penguin"},
    {icon: turtle, name: "turtle"},
    {icon: dolphin, name: "dolphin"},
    // replace doplphin, giraffe and horse
]

const animalAudioArray = [
    {word: moleMP3, name: "mole"},
    {word: birdMP3, name: "bird"},
    {word: catMP3, name: "cat"},
    {word: dogMP3, name: "dog"},
    {word: zebraMP3, name: "zebra"},
    {word: elephantMP3, name: "elephant"},
    {word: lionMP3, name: "lion"},
    {word: monkeyMP3, name: "monkey"},
    {word: giraffeMP3, name: "giraffe"},
    {word: fishMP3, name: "fish"},
    {word: horseMP3, name: "horse"},
    {word: tigerMP3, name: "tiger"},
    {word: penguinMP3, name: "penguin"},
    {word: turtleMP3, name: "turtle"},
    {word: dolphinMP3, name: "dolphin"},
]

const foodArray = [
    {icon: apple, name: "apple"},
    {icon: banana, name: "banana"},
    {icon: bread, name: "bread"},
    {icon: broccoli, name: "broccoli"},
    {icon: carrot, name: "carrot"},
    {icon: cereal, name: "cereal"},
    {icon: cheese, name: "cheese"},
    {icon: chocolate, name: "chocolate"},
    {icon: chicken, name: "chicken"},
    {icon: egg, name: "egg"},
    {icon: milk, name: "milk"},
    {icon: pasta, name: "pasta"},
    {icon: pizza, name: "pizza"},
    {icon: strawberry, name: "strawberry"},
    {icon: yogurt, name: "yogurt"},
]

const foodAudioArray = [
    {word: appleMP3, name: "apple"},
    {word: bananaMP3, name: "banana"},
    {word: breadMP3, name: "bread"},
    {word: broccoliMP3, name: "broccoli"},
    {word: carrotMP3, name: "carrot"},
    {word: cerealMP3, name: "cereal"},
    {word: cheeseMP3, name: "cheese"},
    {word: chocolateMP3, name: "chocolate"},
    {word: chickenMP3, name: "chicken"},
    {word: eggMP3, name: "egg"},
    {word: milkMP3, name: "milk"},
    {word: pastaMP3, name: "pasta"},
    {word: pizzaMP3, name: "pizza"},
    {word: strawberryMP3, name: "strawberry"},
    {word: yogurtMP3, name: "yogurt"},
]

const bodypartsArray = [
    {icon: arm, name: "arm"},
    {icon: chest, name: "chest"},
    {icon: ear, name: "ear"},
    {icon: elbow, name: "elbow"},
    {icon: eye, name: "eye"},
    {icon: foot, name: "foot"},
    {icon: hair, name: "hair"},
    {icon: hand, name: "hand"},
    {icon: head, name: "head"},
    {icon: knee, name: "knee"},
    {icon: leg, name: "leg"},
    {icon: mouth, name: "mouth"},
    {icon: nose, name: "nose"},
]

const bodypartsAudioArray = [
    {word: armMP3, name: "arm"},
    {word: chestMP3, name: "chest"},
    {word: earMP3, name: "ear"},
    {word: elbowMP3, name: "elbow"},
    {word: eyeMP3, name: "eye"},
    {word: footMP3, name: "foot"},
    {word: hairMP3, name: "hair"},
    {word: handMP3, name: "hand"},
    {word: headMP3, name: "head"},
    {word: kneeMP3, name: "knee"},
    {word: legMP3, name: "leg"},
    {word: mouthMP3, name: "mouth"},
    {word: noseMP3, name: "nose"},
]

const colorArray = [
    {icon: red, name: "red"},
    {icon: blue, name: "blue"},
    {icon: green, name: "green"},
    {icon: yellow, name: "yellow"},
    {icon: orange, name: "orange"},
    {icon: purple, name: "purple"},
    {icon: black, name: "black"},
    {icon: white, name: "white"},
    {icon: grey, name: "grey"},
    // problem with grey
]

const colorAudioArray = [
    {word: redMP3, name: "red"},
    {word: blueMP3, name: "blue"},
    {word: greenMP3, name: "green"},
    {word: yellowMP3, name: "yellow"},
    {word: orangeMP3, name: "orange"},
    {word: purpleMP3, name: "purple"},
    {word: blackMP3, name: "black"},
    {word: whiteMP3, name: "white"},
    {word: greyMP3, name: "grey"},
]

// MAIN
let updatedHoles;

function App() {

// STATE 
    const [holesOccupied, setHolesOccupied] = useState(Array(9).fill(null))
    let [randomAudio, setRandomAudio] = useState()
    const [points, setPoints] = useState(0)
    const [menuActive, setMenuActive] = useState(false)
    const [playerName, setPlayerName] = useState("")
    const [gameTopic, setGameTopic] = useState("Animals")
    const [gameDifficulty, setGameDifficulty] = useState("Easy")
    const [gameTime, setGameTime] = useState()
    const [cdActive, setCdActive] = useState(false)
    const [scoreFormActive, setScoreFormActive] = useState(false)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [correctClicks, setCorrectClicks] = useState(0)

    let gameInterval = useRef(5000)


function clearHoles() {
    
    setHolesOccupied(Array(9).fill(null))
    setCorrectClicks(0)
    audioSet()
}

function audioSet() {
    setRandomAudio(prevRandomAudio => {

        switch(gameTopic) {
            case "Animals":
                randomAudio = animalAudioArray[Math.floor(Math.random() * animalAudioArray.length)].word;
                break;
            case "Colors":
                randomAudio = colorAudioArray[Math.floor(Math.random() * colorAudioArray.length)].word;
                break;
            case "Foods":
                randomAudio = foodAudioArray[Math.floor(Math.random() * foodAudioArray.length)].word;
                break;
            case "Body Parts":
                randomAudio = bodypartsAudioArray[Math.floor(Math.random() * bodypartsAudioArray.length)].word;
                break;
        }

        
        const audio = new Audio(randomAudio);
        audio.play();

        setTimeout(populateHoles, 500)
        return randomAudio;
    }); 
}

function populateHoles() {
    const numOfHoles = Math.floor(Math.random() * 4) + 2
    const holesToPop = []
    for(let i = 0; i < numOfHoles; i++) {
        const holePop = Math.floor(Math.random() * holes.length)
        if(!holesToPop.includes(holePop)) {
            holesToPop.push(holePop)
        }
    }
    while(holesToPop.length < numOfHoles) {
        const holePop = Math.floor(Math.random() * holes.length)
        if(!holesToPop.includes(holePop)) {
            holesToPop.push(holePop)
        }
    }

    updatedHoles = Array(9).fill(null)
    holesToPop.forEach(item => {
        return updatedHoles[item] = true
    })
    setHolesOccupied(updatedHoles)
}

// GAME BEGINS ONLY WHEN COUNTDOWN IS ACTIVE
    useEffect(() => {

        if(cdActive) {
            clearHoles()
            const intervalId = setInterval(() => {

                clearHoles()
                
                
            }, gameInterval.current);
    
            return () => {
                clearInterval(intervalId);
            };
        }
        
    }, [gameInterval.current, cdActive]);


    useEffect(() => {
        setGameTime(function() {
            if(gameDifficulty === "Hard") {
                return "1:00"
            } else if(gameDifficulty === "Medium") {
                return "2:00"
            } else {
                return "3:00"
            }
        })

        switch(gameDifficulty) {
            case "Hard":
                gameInterval.current = 2000;
                break;
            case "Medium":
                gameInterval.current = 3500;
                break;
            case "Easy":
                gameInterval.current = 5000;
                break;
        }

    }, [gameDifficulty])

    

// COUNTDOWN FUNCTIONALITY

    let countdownInterval;
    const countdownFunction = () => {
        setCdActive(true)
    }

    useEffect(() => {
        if(cdActive) {
            let [minutes, seconds] = gameTime.split(":").map(Number)
            countdownInterval = setInterval(function() {
                seconds--
                if(seconds < 0) {
                    minutes--
                    seconds = 59
                }
    
                if(minutes === 0 && seconds === 0) {
                    clearInterval(countdownInterval)
                    setCdActive(false)
                    setTimeout(function() {
                        setHolesOccupied(Array(9).fill(null))
                        setScoreFormActive(true)
                    }, gameInterval.current)
                }
    
                let formattedSeconds = seconds < 10 ? "0" + seconds : seconds
                setGameTime(String(minutes + ":" + formattedSeconds))
            }, 1000)
            return () => clearInterval(countdownInterval)
        } else {
            clearInterval(countdownInterval)
            setGameTime(function() {
                if(gameDifficulty === "Hard") {
                    return "1:00"
                } else if(gameDifficulty === "Medium") {
                    return "2:00"
                } else {
                    return "3:00"
                }
            })
            
            
        }
    }, [cdActive, gameTime])

    const resetFunction = () => {
        setCdActive(false)
        setHolesOccupied(Array(9).fill(null))
        setPoints(0)
    }


    let scoreResults = useRef([])
    let feedbackResults = useRef([])

    const menuFunction = () => {
        setMenuActive(true)
        setCdActive(false)
        setHolesOccupied(Array(9).fill(null))
        setPoints(0)

        const scoreXhr = new XMLHttpRequest();
    
        scoreXhr.open('GET', 'http://localhost:8000/get_scores.php');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        scoreXhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                scoreResults.current = JSON.parse(this.responseText)
            }
        });

        scoreXhr.send();

        const fbXhr = new XMLHttpRequest();
    
        fbXhr.open('GET', 'http://localhost:8000/get_feedback.php');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        fbXhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                feedbackResults.current = JSON.parse(this.responseText)
            }
        });

        fbXhr.send();
    }

    let cursor;
    useEffect(() => {

        document.body.style.cursor = menuActive || scoreFormActive ? "default" : "none"

        cursor = document.querySelector('.cursor')

        const updateCursorPosition = (e) => {

            if(!menuActive && !scoreFormActive) {

                cursor.style.top = (e.clientY - cursor.offsetHeight / 2) + 'px';
                cursor.style.left = (e.clientX - cursor.offsetWidth / 5) + 'px';
            }

        };

        window.addEventListener('mousemove', updateCursorPosition)

        window.addEventListener('mousedown', () => {
            if(!menuActive && !scoreFormActive) {

                cursor.classList.add('active')
            }
        })

        window.addEventListener('mouseup', () => {
            if(!menuActive && !scoreFormActive) {

                cursor.classList.remove('active')
            }
        })
    })
    
    const mouseoverFunction = () => {
        cursor.style.display = "none"
        document.body.style.cursor = "default"
    }
    
    const mouseoutFunction = () => {
        cursor.style.display = "block"
        document.body.style.cursor = "none"
    }

    const mousemoveFunction = () => {
        if(!menuActive && !scoreFormActive) {
            cursor.style.display = "block"
            document.body.style.cursor = "none"
        }
    }
    

  return (<>

        <div className='overlay w-full h-full bg-darkergreen absolute opacity-50'></div>
    
        <div className="game-container rounded-xl w-11/12 h-[25.6rem] phone:h-[34.6rem] max-w-xl mx-auto relative top-20 bg-gradient-to-br from-darkgreen to-green shadow-md shadow-darkergreen z-10">

        <div className={`${(!menuActive && !scoreFormActive) && "cursor"} z-10`}></div>

            {menuActive ? 
            <>
                <GameContext.Provider value={[holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive]}>
                    <MenuCard scoreResults={scoreResults} feedbackResults={feedbackResults} />
                </GameContext.Provider>
            </>
            : scoreFormActive ? 
            <>
                <GameContext.Provider value={[holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive]}>
                    <ScoreForm />
                </GameContext.Provider>
            </>
            :
            <>
                {/* <Header h1Title="Whack-a-Mole" /> */}

                <GameContext.Provider value={[holesOccupied, setHolesOccupied, holes, animalArray, colorArray, foodArray, bodypartsArray, randomAudio, points, setPoints, menuActive, setMenuActive, playerName, setPlayerName, gameTopic, setGameTopic, gameDifficulty, setGameDifficulty, gameTime, setGameTime, cdActive, setCdActive, scoreFormActive, setScoreFormActive, correctAnswers, setCorrectAnswers, correctClicks,setCorrectClicks]}>
                    <TimeScore />
                    <GameArea mousemove={mousemoveFunction} />
                    <Footer countdownFunction={countdownFunction} resetFunction={resetFunction} menuFunction={menuFunction} mouseover={mouseoverFunction} mouseout={mouseoutFunction} />
                    
                </GameContext.Provider>

            </>
            

            }


        </div>

  </>)
}

export default App;

/* ---- IDEAS ----

- multiplayer / single player - scores can be added to high-score db regardless of setting
- everything displayed in game container - menu/reset confirmation conditionally
- different voices/accents for noun calls
- scoreboard choice in menu
- give holes numbers 1-9 - kids will love shouting that out to their mates who are playing in class

*/


// NEED BETTER IMAGES
// NEED BETTER WAY TO DISPLAY IMAGES
// NEED TO CONGRAT WHEN MULTI POINTS SCORED, USE SCOREBOARD AND SFX