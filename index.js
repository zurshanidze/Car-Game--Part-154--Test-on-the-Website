let sky = document.querySelector(".sky")

let roadVector = document.querySelector(".road-vector")
let road = document.querySelector(".road")
let roadLineWrapper = document.querySelector(".road-line-wrapper")
let roadLines = document.querySelectorAll(".road-line")
let mountainsVector = document.querySelector(".mountains-vector")
let mountainsVectorLeftSide = document.querySelector(".mountains-range-left")
let mountainsVectorRightSide = document.querySelector(".mountains-range-right")
let carHood = document.getElementById("car-hood")
let carHoodDamaged = document.querySelector(".car-hood-damaged")
let carsVector = document.querySelector(".cars-vector")
let oppositeCar = document.getElementsByName("opposite-car")
let roadLinesArray = [...roadLines]
let steeringWheel = document.querySelector(".steering-wheel")
let details = document.querySelector(".details")
let distance = document.getElementById("distance")
let distanceText = document.getElementById("distance-text")
let distanceKM = document.getElementById("distance-km")
let distanceKMText = document.getElementById("distance-text-km")
let distanceMeters = document.getElementById("distance-meters")
let distanceMetersText = document.getElementById("distance-text-meters")
let distanceBtn = document.getElementById("distance-btn")
let btnMenuSettings = document.getElementById("btn-menu-settings")
let menu = document.getElementById("menu")
let menuSettingAll = document.querySelectorAll(".menu-setting-all")
  let menuSettingAllArray = [...menuSettingAll]
let startBtn = document.getElementById("start")
let changeSteeringWheel = document.getElementById("change-steering-wheel")
let SteeringWheelsListContainer = document.getElementById("steering-wheels-list-container")
let changeCarColor = document.getElementById("change-car-color")
let carColorListContainer = document.getElementById("car-color-list-container")

let gameStarted = false;



function soundEffects(url){
  let a = new Audio(url)
  a.play()
}

menuSettingAllArray.map((menuItem) => {
  console.log(menuItem)
  menuItem.addEventListener(
    "mouseover", () => soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3")
  )
})

// http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatpellet.ogg - 1
// http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race1.ogg - 2
// http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg - 3
// http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/start.ogg - 4
// https://rpg.hamsterrepublic.com/wiki-images/7/72/Metal_Hit.ogg - 5





let SteeringWheelsList = [
  "https://i.postimg.cc/HLmfpY2K/steering-wheel-115399042105p38svvilr-removebg-preview.png",
  
  "https://i.postimg.cc/dQ9Dv39M/a362385a988a692bf094ad12179368a5-removebg-preview.png",
  
  "https://i.postimg.cc/8PkrHKd5/momo-montecarlo-steering-wheel-black-leather-yellow-stitching-black-spokes-350mm-580x-removebg-previ.png",
  
  "https://i.postimg.cc/Jh62CcC5/removal-ai-tmp-632ec937daf08.png",
 
  "https://i.postimg.cc/LXrq77CK/removal-ai-tmp-632eca101cdeb.png", 
  
  "https://i.postimg.cc/y8kHgd6j/removal-ai-tmp-632eca1f874f6.png",
  
  "https://i.postimg.cc/vZL7Mykv/removal-ai-tmp-632eca3725d21.png",
  
  "https://i.postimg.cc/28dLLwGk/removal-ai-tmp-632eca44cbbd7.png",
  
  "https://i.postimg.cc/59RnkxWY/drifting-removebg-preview.png",// +
  
  "https://i.postimg.cc/J7Xtkqxy/SCA-SPO3078484-hi-res-removebg-preview.png",
    
  "https://i.postimg.cc/3RF8tLc9/SCA-360648-hi-res-removebg-preview.png",
  
  // https://postimg.cc/delete/J9PrSwsL/62e13c0c
  
  "https://i.postimg.cc/hvmHChvn/1649191010-4231-9011-01-1-removebg-preview.png",
//   https://postimg.cc/delete/tK3L8WSV/7c9507fb
]


// openElement(restart)

window.addEventListener("load", () => openElement(menu))
btnMenuSettings.addEventListener("click", () => openElement(menu))
btnMenuSettings.addEventListener("click", () => btnMenuSettings.classList.toggle("btn-menu-settings-animated"))

function openElement(element){
  element.classList.toggle("displayed") 
}






changeSteeringWheel.addEventListener("click", openSteeringWheelsList)
let SteeringWheelsListContainerArray = []



function openSteeringWheelsList(){
  SteeringWheelsListContainer.classList.toggle("displayed")
  SteeringWheelsList.map((SteeringWheelItem)=> {
    
   if(SteeringWheelsListContainerArray.length < SteeringWheelsList.length){
      SteeringWheelsListContainerArray.push(SteeringWheelItem)
     
      let SteeringWheelDiv = document.createElement("div")
      SteeringWheelDiv.classList.add("steering-wheel-div")
      SteeringWheelDiv.style.background = `url(${SteeringWheelItem})`
      SteeringWheelDiv.style.backgroundPosition = "center"
      SteeringWheelDiv.style.backgroundSize = "contain"
      SteeringWheelDiv.style.backgroundRepeat = "no-repeat";
      SteeringWheelsListContainer.appendChild(SteeringWheelDiv)
    
      SteeringWheelDiv.addEventListener("click", selectSteeringWheel)

      function selectSteeringWheel(){
        let selectedSteeringWheel = this.style.background
        steeringWheel.style.background = selectedSteeringWheel
        soundEffects("http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a")
        if(gameStarted == false){
          null
        }
        else{
          openElement(menu)
        }
      }
    }
    
  })
  console.log(SteeringWheelsListContainerArray.length, SteeringWheelsList.length, "length of Arrays")
}


console.log(SteeringWheelsList.length, "SteeringWheelsList")










let carColorsList = [
  "rgb(255, 87, 51)",
  "rgb(255, 165, 51)",
  "rgb(255, 231, 51)",
  "rgb(223, 255, 51)",
  "rgb(97, 255, 51)",
  "rgb(51, 255, 101)",
  "rgb(51, 255, 188)",
  "rgb(51, 206, 255)",
  "rgb(51, 119, 255)",
  "rgb(51, 71, 255)",
  "rgb(109, 51, 255)",
  "rgb(154, 51, 255)",
  "rgb(109, 12, 205)",
  "rgb(192, 38, 255)",
  "rgb(243, 38, 255)",
  "rgb(255, 38, 130)",
  "rgb(255, 38, 64)",
  "rgb(255, 8, 44)",
  "rgb(193, 179, 176)",
  "rgb(159, 158, 157)",
  "rgb(192, 192, 192)",
  "rgb(28, 30, 43)",
  "rgb(17, 17, 18)",
]



changeCarColor.addEventListener("click", openCarColorList)
let carColorListContainerArray = []


function openCarColorList(){
  carColorListContainer.classList.toggle("displayed")
  carColorsList.map((carColor)=> {
    
   if(carColorListContainerArray.length < carColorsList.length){
      carColorListContainerArray.push(carColor)
     
      let carColorDiv = document.createElement("div")
      carColorDiv.classList.add("car-color-div")
      carColorDiv.style.background = `${carColor}`
      carColorListContainer.appendChild(carColorDiv)
    
      carColorDiv.addEventListener("click", selectCarColor)

      function selectCarColor(){
        let selectedCarColor = this.style.background
        carHood.style.background = selectedCarColor
        carHoodDamaged.style.background = selectedCarColor
        console.log(carHood.style.background)
        console.log(carHoodDamaged.style.background)
       
        soundEffects("http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a")
        if(gameStarted == false){
          null
        }
        else{
          openElement(menu)
        }
      }
    }
    
  })
  console.log(carColorListContainerArray.length, carColorsList.length, "length of Arrays")
}
















start.addEventListener("click", () => {
  start.style.display = "none";
  btnMenuSettings.classList.toggle("btn-menu-settings-animated")
  openElement(menu)
  gameStarted = true

let turnDegree = 0;
let turnLeft = false;
let turnRight = false;
let roadVectorLeft = 350
let roadVectorRotateZ = 45
let oppositeCarsRotateX = 90;
let oppositeCarsRotateY = 0;
let oppositeCarsRotateZ = 0;
let roadLineWrapperRotateZ = -45
let gameOver = false;

document.addEventListener("keydown", turnSteeringWheel)
document.addEventListener("keyup", returnSteeringWheelNormPosition)


console.log(window.innerHeight)


function checkNodes(){
  if(!gameOver){
    let intervalId = setInterval(()=>{
      let roadWrapper = [...roadLineWrapper.childNodes]
      // let arrayRoad = [...roadWrapper]
      roadWrapper.map((oppositeCar)=>{
        if(oppositeCar.classList == "opposite-cars"){
          // console.log(oppositeCar.style.top)
          
          if(parseInt(oppositeCar.style.top) >= document.body.clientHeight - document.body.clientHeight + 190 && roadVectorLeft > 270){
            gameOver = true;
            // carHood.style.animation = "carHoodDamaged 1000ms forwards";
            carHoodDamaged.style.display = "flex"
            steeringWheel.style.transform = "rotateY(10deg) rotateZ(50deg)"
            smoke()
            openElement(restart)
          }
          
          if(parseInt(oppositeCar.style.top) > 450){
            oppositeCar.remove()
          }
        }
      })
      // console.log(roadWrapper)
     clearInterval(intervalId)
     checkNodes()
    }, 50)
  }
 
}
checkNodes()





function createRoadLineAndPosition(){
  
  
  function createRoadLine(){
    
    if(!gameOver){
    let intervalId1 = setInterval(()=> {
      let roadLineFirstTopPosition = 0;
      let roadLineNewTopPosition = 0;
      let roadLineHeight = 1
      let roadLineNewHeight = 1
      let roadLineWidth = 1
      let roadLineNewWidth = 1
      
      let roadLine = document.createElement("div")
      roadLine.classList.add("road-line")
      roadLineWrapper.appendChild(roadLine)
      
      roadLine.style.top = roadLineFirstTopPosition + "px";
      roadLine.style.height = roadLineHeight + "px"
      roadLine.style.width = roadLineWidth + "px"
      
      
      function roadLinePosition(){
        let intervalId2 = setInterval(()=> {
          
      // console.log(parseInt(roadLine.style.top), parseInt(roadLine.style.top) > 100)
      if(parseInt(roadLine.style.top) > 350){
        roadLine.remove()
      }
          if(!gameOver){
            if(roadLineNewTopPosition > 50){
              roadLineNewHeight = roadLineNewHeight + 2
              roadLineNewWidth = roadLineNewWidth + 1
              roadLine.style.top = roadLineNewTopPosition + "px";
              roadLine.style.height = roadLineNewHeight + "px";
              roadLine.style.width = roadLineNewWidth + "px";
            }
            roadLineNewTopPosition = roadLineNewTopPosition + roadLineNewHeight
            roadLineNewHeight = roadLineNewHeight + 0.8
            roadLineNewWidth = roadLineNewWidth + 0.4
            roadLine.style.top = roadLineNewTopPosition + "px";
            roadLine.style.height = roadLineNewHeight + "px";
            roadLine.style.width = roadLineNewWidth + "px";
            clearInterval(intervalId2)
            roadLinePosition()
          }
        },50)
      }
      roadLinePosition()
      
      clearInterval(intervalId1)
      createRoadLine()
    }, 200)
          
    }
  }
  createRoadLine()
  
  
}
createRoadLineAndPosition()









// function createOppositeCars(){
  
  function createOppositeCars(){
    let randomTime = Math.floor(1000 + Math.random() * 7000)
    // console.log(randomTime)
    
    
    let intervalId1 = setInterval(()=> {
      let carFirstTopPosition = 0;
      let carNewTopPosition = 0;
      let carHeight = 1
      let carNewHeight = 5
      let carWidth = 1
      let carNewWidth = 5
      let carLength = 1
      let carLeft = 0
      let carNewLeft = 0
      let oppositeCarsNewDegree = 0
      let oppositeCarSpeed = 1
      
      
      
      let oppositeCar = document.createElement("div")
      oppositeCar.classList.add("opposite-cars")
      oppositeCar.setAttribute('name', 'opposite-car');
      roadLineWrapper.appendChild(oppositeCar)
      
      let carFront = document.createElement("div")
      carFront.classList.add("car-front")
      
      let carLeftSide = document.createElement("div")
      carLeftSide.classList.add("car-left-side")
      
      let carRightSide = document.createElement("div")
      carRightSide.classList.add("car-right-side")
      
      let carBack = document.createElement("div")
      carBack.classList.add("car-back")
      
      oppositeCar.appendChild(carFront)
      oppositeCar.appendChild(carLeftSide)
      oppositeCar.appendChild(carRightSide)
      oppositeCar.appendChild(carBack)
      
      
      
      let carBumperGrill = document.createElement("div")
      carBumperGrill.classList.add("car-bumper-grill")
      
      let oppositeCarHood = document.createElement("div")
      oppositeCarHood.classList.add("opposite-car-hood")
      
      carFront.appendChild(carBumperGrill)
      carFront.appendChild(oppositeCarHood)
      
      
      
      let windowGlass = document.createElement("div")
      windowGlass.classList.add("window-glass")
      
      oppositeCarHood.appendChild(windowGlass)
      
      
      
      let carRoof = document.createElement("div")
      carRoof.classList.add("car-roof")
      
      let carRightSideDoor1Window1 = document.createElement("div")
      carRightSideDoor1Window1.classList.add("car-right-side-door-1-window-1")
      
      windowGlass.appendChild(carRightSideDoor1Window1)
      windowGlass.appendChild(carRoof)
      
      
      
      let rearWindow = document.createElement("div")
      rearWindow.classList.add("rear-window")
      
      let carRightSideDoor1Window2 = document.createElement("div")
      carRightSideDoor1Window2.classList.add("car-right-side-door-1-window-2")
      
      let carRightSideDoor1Line = document.createElement("div")
      carRightSideDoor1Line.classList.add("car-right-side-door-1-line")
      
      carRoof.appendChild(rearWindow)
      carRoof.appendChild(carRightSideDoor1Window2)
      carRightSideDoor1Window2.appendChild(carRightSideDoor1Line)
      
      
      
      
      
      
      
      let carLeftSideDoor1 = document.createElement("div")
      carLeftSideDoor1.classList.add("car-left-side-door-1")
      
      let carLeftSideDoor2 = document.createElement("div")
      carLeftSideDoor2.classList.add("car-left-side-door-2")
      
      carLeftSide.appendChild(carLeftSideDoor1)
      carLeftSide.appendChild(carLeftSideDoor2)
      
      
      
      
      let oppositeCarBottomFrontSpace = document.createElement("div")
      oppositeCarBottomFrontSpace.classList.add("opposite-car-bottom-front-space")
      
      let carRightSideDoor1 = document.createElement("div")
      carRightSideDoor1.classList.add("car-right-side-door-1")
      
      let carRightSideDoor2 = document.createElement("div")
      carRightSideDoor2.classList.add("car-right-side-door-2")
      
      let carRightSideWheel1_Axle = document.createElement("div")
      carRightSideWheel1_Axle.classList.add("car-right-side-wheel-1-axle")
      
      let carRightSideWheel2_Axle = document.createElement("div")
      carRightSideWheel2_Axle.classList.add("car-right-side-wheel-2-axle")
      
      let carRightSideWheel1 = document.createElement("div")
      carRightSideWheel1.classList.add("car-right-side-wheel-1")
      
      let carRightSideWheel2 = document.createElement("div")
      carRightSideWheel2.classList.add("car-right-side-wheel-2")
      
      let carRightSideWheelDisc1 = document.createElement("div")
      carRightSideWheelDisc1.classList.add("car-right-side-wheel-disc-1")
      
      let carRightSideWheelDisc2 = document.createElement("div")
      carRightSideWheelDisc2.classList.add("car-right-side-wheel-disc-2")
      
      carRightSide.appendChild(oppositeCarBottomFrontSpace)
      carRightSide.appendChild(carRightSideDoor1)
      carRightSide.appendChild(carRightSideDoor2)
      carRightSide.appendChild(carRightSideWheel1_Axle)
      carRightSide.appendChild(carRightSideWheel2_Axle)
      carRightSideWheel1_Axle.appendChild(carRightSideWheel1)
      carRightSideWheel2_Axle.appendChild(carRightSideWheel2)
      carRightSideWheel1.appendChild(carRightSideWheelDisc1)
      carRightSideWheel2.appendChild(carRightSideWheelDisc2)
      
      
      let oppositeCarBottomHoodSpace = document.createElement("div")
      oppositeCarBottomHoodSpace.classList.add("opposite-car-bottom-hood-space")
      
      oppositeCarBottomFrontSpace.appendChild(oppositeCarBottomHoodSpace)
      
      
      let oppositeCarBottomFrontRight = document.createElement("div")
      oppositeCarBottomFrontRight.classList.add("opposite-car-bottom-front-right")
      
      oppositeCarBottomHoodSpace.appendChild(oppositeCarBottomFrontRight)
      
      
      
      
      
      
      
      let carRightSideDoor1WindowBlock = document.createElement("div")
      carRightSideDoor1WindowBlock.classList.add("car-right-side-door-1-window-block")
      
      let carRightSideDoor2WindowBlock = document.createElement("div")
      carRightSideDoor2WindowBlock.classList.add("car-right-side-door-2-window-block")
      
      carRightSideDoor1.appendChild(carRightSideDoor1WindowBlock)
      carRightSideDoor2.appendChild(carRightSideDoor2WindowBlock)
      
      
      
      
      let carTrunk = document.createElement("div")
      carTrunk.classList.add("car-trunk")
      
      carBack.appendChild(carTrunk)
      
      
      let randomCarsColor = Math.floor(Math.random() * carColorsList.length)
      // console.log(randomCarsColor)
      // console.log(carColorsList[randomCarsColor])
      
      function randmCarsColorFunc(...elements){
        console.log(...elements)
        elements.map((element) => {
           element.style.background = carColorsList[randomCarsColor]
        })
      }
      randmCarsColorFunc(oppositeCar, carFront, carLeftSide, carRightSide, carBack, oppositeCarHood, carLeftSideDoor1, carLeftSideDoor2, carRightSideDoor1, carRightSideDoor2, carRightSideDoor1WindowBlock, carRightSideDoor2WindowBlock, carTrunk, carRoof)
        
      
      function createContoursFunc(...elements){
        console.log(...elements)
        elements.map((element) => {
           element.style.border = "1px solid rgb(28, 30, 43)"
        })
      }
      createContoursFunc(carFront, carLeftSide, carBack, oppositeCarHood, carLeftSideDoor1, carLeftSideDoor2, carTrunk, rearWindow, carRoof)
      
      
      
      
      
      function roadCarsPosition(){
        let intervalId2 = setInterval(()=> {
          
          if(!gameOver){
            if(carNewTopPosition > 150){
              carNewTopPosition = carNewTopPosition + carHeight + 30
              carNewHeight = carNewHeight + 30
              carNewLeft = carNewLeft - 20
              carNewWidth = carNewWidth + 15
            }
            else if(carNewTopPosition > 120){
              carNewTopPosition = carNewTopPosition + carHeight + 1
              carNewTopPosition = carNewTopPosition + oppositeCarSpeed + 1
              oppositeCar.style.top = carNewTopPosition + "px";
               carNewLeft = carNewLeft - 11
              carNewHeight = carNewHeight + 18
              carNewWidth = carNewWidth + 9
            }
            else if(carNewTopPosition > 30){
              carNewTopPosition = carNewTopPosition + carHeight
              oppositeCarSpeed = oppositeCarSpeed + 1
              carNewTopPosition = carNewTopPosition + oppositeCarSpeed + 1
              oppositeCar.style.top = carNewTopPosition + "px";
              carNewLeft = carNewLeft - 8
              carNewHeight = carNewHeight + 16
              carNewWidth = carNewWidth + 8
            }
            carNewTopPosition = carNewTopPosition + carHeight
            carNewHeight = carNewHeight + 1
            carNewLeft = carNewLeft - 0.9
            carNewWidth = carNewWidth + 0.5
            carLength = oppositeCar.style.height
            oppositeCar.style.top = carNewTopPosition + "px";
            oppositeCar.style.height = carNewHeight + "px";
            oppositeCar.style.width = carNewWidth + "px"
            oppositeCar.style.left = carNewLeft + "px";
            oppositeCar.style.transform = `rotateX(${oppositeCarsRotateX}deg) rotateY(${oppositeCarsRotateY}deg) rotateZ(${oppositeCarsRotateZ}deg)`
            // console.log(oppositeCar.style.transform, `rotateX(${oppositeCarsRotateX}deg) rotateZ(${oppositeCarsRotateZ}deg)`)
          }
          else if(gameOver){
            oppositeCar.style.transform = `rotateX(${oppositeCarsRotateX}deg) rotateY(${oppositeCarsRotateY}deg) rotateZ(${oppositeCarsRotateZ}deg)`
          }
          
          clearInterval(intervalId2)
          roadCarsPosition()
          
          
        }, 50)
      }
      roadCarsPosition()
      
      clearInterval(intervalId1)
      createOppositeCars()
    }, randomTime)
    
  }
  
  let timeoutId = setTimeout(()=> {
    createOppositeCars()
    clearTimeout(timeoutId)
  }, 400)










function turnSteeringWheel(e){
  // console.log(e)
  // console.log(turnDegree)
  
  if(!gameOver){

    function turnSteeringWheelLeft(){
      // console.log(roadVector.style.transform, "roadVector")
      // console.log(roadVector.style.left, "roadVector")
      // console.log(oppositeCarsRotateY, "oppositeCarsRotateY")
      // console.log(oppositeCarsRotateZ, "oppositeCarsRotateZ")


      if(e.keyCode == 37 && roadVectorRotateZ > 41){
           roadVectorLeft = roadVectorLeft + 10
           roadVector.style.left = `${roadVectorLeft}px`;
           mountainsVector.style.left = `${roadVectorLeft}px`;

           roadVectorRotateZ = roadVectorRotateZ - 1
           roadLineWrapperRotateZ = roadLineWrapperRotateZ - 1
           roadVector.style.transform = `rotateX(60deg) rotateZ(${roadVectorRotateZ}deg`
           roadLineWrapper.style.transform = `rotateX(0deg) rotateZ(${roadLineWrapperRotateZ}deg)`

           if(roadVectorRotateZ >= 41){
             // oppositeCarsRotateZ = oppositeCarsRotateZ - 2
             // oppositeCarsRotateX = oppositeCarsRotateX - 10
             oppositeCarsRotateY = oppositeCarsRotateY + 2
          }
      }

      if(e.keyCode == 37 && turnDegree > -55){

        let intervalId = setInterval(()=>{
          turnDegree = turnDegree - 4
          steeringWheel.style.transform = `rotateZ(${turnDegree}deg)`
          console.log(oppositeCar)
          clearInterval(intervalId)
          // turnSteeringWheelLeft()

        }, 5)

      }
    }
    turnSteeringWheelLeft()




    function turnSteeringWheelRight(){
      // console.log(roadVector.style.transform)
      // console.log(oppositeCarsRotateY, "oppositeCarsRotateY")
      // console.log(oppositeCarsRotateZ, "oppositeCarsRotateZ")

       if(e.keyCode == 39 && roadVectorRotateZ < 60){
           roadVectorLeft = roadVectorLeft - 10
           roadVector.style.left = `${roadVectorLeft}px`;
           mountainsVector.style.left = `${roadVectorLeft}px`;

           roadVectorRotateZ = roadVectorRotateZ + 1
           roadLineWrapperRotateZ = roadLineWrapperRotateZ + 1
           roadVector.style.transform = `rotateX(60deg) rotateZ(${roadVectorRotateZ}deg`
           roadLineWrapper.style.transform = `rotateX(0deg) rotateZ(${roadLineWrapperRotateZ}deg)`

           if(roadVectorRotateZ <= 60){
            differenceDegree = 45 - (roadVectorRotateZ)
            // oppositeCarsRotateZ = oppositeCarsRotateZ + 2
             // oppositeCarsRotateX = oppositeCarsRotateX + 10
             oppositeCarsRotateY = oppositeCarsRotateY - 2
          }
      }




      if(e.keyCode == 39 && turnDegree < 45){

        let intervalId = setInterval(()=>{
          turnDegree = turnDegree + 4
          steeringWheel.style.transform = `rotateZ(${turnDegree}deg)`
          clearInterval(intervalId)

        }, 5)

      }
    }
    turnSteeringWheelRight()
  
        
  }
}






function returnSteeringWheelNormPosition(e){
      
     if(turnDegree < 0){
     
        let setIntervalId = setInterval(()=> {
         if(turnDegree != 0){
              turnDegree = turnDegree + 2;
              steeringWheel.style.transform = `rotateZ(${turnDegree}deg)`
              clearInterval(setIntervalId)
              returnSteeringWheelNormPosition()
            }
        }, 20)
    }
    else if(turnDegree > 0){
      let setIntervalId = setInterval(()=> {
        
          if(turnDegree != 0){
            turnDegree = turnDegree - 2;
            steeringWheel.style.transform = `rotateZ(${turnDegree}deg)`
            clearInterval(setIntervalId)
            returnSteeringWheelNormPosition()
          }
      }, 20)
    }
  }









function smoke(){
  if(gameOver == true){

    let smokeBg = document.createElement("div")
    smokeBg.classList.add("smoke-bg")
    carHood.appendChild(smokeBg)

    for(let i = 0; i < 200; i ++){
      let randomSmokePositionX = 0
      let randomSmokeInitialPositionY;
      let smokeRandomWidth = 0
      let smokeRandomHeight = 0
      let opacity = 1
      
      let smokeSpan = document.createElement("span")
      smokeSpan.classList.add("smoke-span")
      smokeBg.appendChild(smokeSpan)
      
      randomSmokeInitialPositionY = 300 - Math.floor(Math.random() * 400)
      randomSmokePositionX = -50 + Math.floor(Math.random() * 350)
      smokeRandomWidth = 75 + Math.floor(Math.random() * 85)
      smokeRandomHeight = 75 + Math.floor(Math.random() * 95)
      
      smokeSpan.style.bottom = randomSmokeInitialPositionY + "px"
      smokeSpan.style.left = randomSmokePositionX + "px"
      smokeSpan.style.width = smokeRandomWidth + "px"
      smokeSpan.style.height = smokeRandomHeight + "px"
      
      
      function defineSmokePositionY(){
        let intervalId = setInterval(()=> {
          if(parseInt(smokeSpan.style.bottom) >= 400){
            randomSmokeInitialPositionY = 300 - Math.floor(Math.random() * 400)
            smokeSpan.style.bottom = randomSmokeInitialPositionY + "px"
            
            opacity = 1
            smokeSpan.style.opacity = opacity
          }

          randomSmokeInitialPositionY = randomSmokeInitialPositionY + 1
          smokeSpan.style.bottom = randomSmokeInitialPositionY + "px"
          
          opacity = opacity - 0.005
          smokeSpan.style.opacity = opacity
          
          clearInterval(intervalId)
          defineSmokePositionY()
        }, 1)
      }
      defineSmokePositionY()
      
    }
  }
}
smoke()






function increaseDistance(){
    let distanceInMeters = 0;
    let distanceInKMs;
    let showKMsAndMeters = false;
  
    distanceMeters
    distanceMetersText
    distanceKM
    distanceKMText
    
    distanceBtn.addEventListener("click", showKMsAndMetersFunc)
  
  
    function showKMsAndMetersFunc(){
      if(showKMsAndMeters == false){
        showKMsAndMeters = true
        distanceKM.classList.remove("hidden")
        distanceKMText.classList.remove("hidden")
        distanceMeters.classList.remove("hidden")
        distanceMetersText.classList.remove("hidden")

        distanceKM.innerText = parseInt(distanceInKMs) 
        distanceKMText.innerText = " KM And "
        distanceMeters.innerText = distanceInMeters.toString().slice(-3)
        distanceMetersText.innerText = "Meters"
        distanceBtn.innerText = "KM"
        
        distanceBtn.addEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
      }
      else if(showKMsAndMeters == true){
        showKMsAndMeters = false
        distanceKMText.innerText = " KM"
        
            if(distanceInMeters < 1000){
              distanceMeters.innerText = distanceInMeters
              distanceKMText.innerText = " KM"
              distanceKM.classList.add("hidden")
              distanceKMText.classList.add("hidden")
            }
            else{
              distanceKM.innerText = distanceInKMs.toFixed(1)
              distanceKM.classList.remove("hidden")
              distanceKMText.classList.remove("hidden")
              distanceMeters.classList.add("hidden")
              distanceMetersText.classList.add("hidden")
            }
        
        distanceBtn.innerText = "KM And Meters"
        
        distanceBtn.addEventListener("click", soundEffects("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"))
      }
    }
  
  
  
    function distanceSetInterval(){
      if(!gameOver){
        let intervalId = setInterval(()=> {
          distanceInMeters = distanceInMeters + 10
          distanceInKMs = distanceInMeters * 0.001
          
          if(showKMsAndMeters){
            distanceKM.classList.remove("hidden")
            distanceKMText.classList.remove("hidden")
            distanceMeters.classList.remove("hidden")
            distanceMetersText.classList.remove("hidden")
            
            distanceKM.innerText = parseInt(distanceInKMs) 
            distanceMeters.innerText = distanceInMeters.toString().slice(-3)
            console.log(distanceInKMs.toFixed(0), distanceInMeters )
          }
          else{
            if(distanceInMeters < 1000){
              distanceMeters.innerText = distanceInMeters
              distanceKM.classList.add("hidden")
              distanceKMText.classList.add("hidden")
            }
            else{
              distanceKM.innerText = distanceInKMs.toFixed(1)
              distanceKM.classList.remove("hidden")
              distanceKMText.classList.remove("hidden")
              distanceMeters.classList.add("hidden")
              distanceMetersText.classList.add("hidden")
            }
          }
          
          
          // console.log(distanceInMeters)
          clearInterval(intervalId)
          distanceSetInterval()
        }, 50)
      }
    }
    distanceSetInterval()

}
increaseDistance()

  
  

})

restart.addEventListener("click", ()=>{
  window.location.href = window.location.href
})






function morningToEvening_changeColor(morning, afternoon, evening, night){
  let morningRed = morning[0]
  let morningGreen = morning[1]
  let morningBlue = morning[2]
  let copyOfMorning = morning

  let afternoonRed = afternoon[0]
  let afternoonGreen = afternoon[1]
  let afternoonBlue = afternoon[2]
  let copyOfAfternoon = afternoon
  
  let eveningRed = evening[0]
  let eveningGreen = evening[1]
  let eveningBlue = evening[2]
  let copyOfEvening = evening
  
  let nightRed = night[0]
  let nightGreen = night[1]
  let nightBlue = night[2]
  let copyOfNight = night
  
  
  function increaseDecrease(){
           copyOfMorning = [morningRed, morningGreen, morningBlue]
           copyOfAfternoon = [afternoonRed, afternoonGreen, afternoonBlue]
           copyOfEvening = [eveningRed, eveningGreen, eveningBlue]
           copyOfNight = [nightRed, nightGreen, nightBlue]
    
    
    if(JSON.stringify(copyOfMorning) !== JSON.stringify(afternoon)){
          // console.log(copyOfMorning, "copyOfMorning")
                
      let intervalId = setInterval(()=> {
          if(morningRed < afternoon[0]){
            morningRed++
          }
          if(morningGreen < afternoon[1]){
            morningGreen ++
          }
          if(morningBlue < afternoon[2]){
            morningBlue ++
          }
          if(morningRed > afternoon[0]){
            morningRed --
          }
          if(morningGreen > afternoon[1]){
            morningGreen --
          }
          if(morningBlue > afternoon[2]){
            morningBlue --
          }
        
          sky.style.background = `rgb(${copyOfMorning})`        
          afternoonRed = afternoon[0]
          afternoonGreen = afternoon[1]
          afternoonBlue = afternoon[2]
        
        clearInterval(intervalId)
        increaseDecrease()
      }, 1000)
      
      
    }
    else if(JSON.stringify(copyOfAfternoon) !== JSON.stringify(evening)){
          // console.log(copyOfAfternoon, "copyOfAfternoon") 
          // copyOfcolor2 = [red2, green2, blue2]
      
      let intervalId = setInterval(()=> {
          if(afternoonRed < evening[0]){
            afternoonRed ++
          }
          if(afternoonGreen < evening[1]){
            afternoonGreen ++
          }
          if(afternoonBlue < evening[2]){
            afternoonBlue ++
          }
          if(afternoonRed > evening[0]){
            afternoonRed --
          }
          if(afternoonGreen > evening[1]){
            afternoonGreen --
          }
          if(afternoonBlue > evening[2]){
            afternoonBlue --
          }
        
          sky.style.background = `rgb(${copyOfAfternoon})`        
          eveningRed = evening[0]
          eveningGreen = evening[1]
          eveningBlue = evening[2]
        
        clearInterval(intervalId)
        increaseDecrease()
      }, 1000)
    }
    else if(JSON.stringify(copyOfEvening) !== JSON.stringify(night)){
           // console.log(copyOfEvening, "copyOfEvening") 
          // copyOfcolor3 = [red3, green3, blue3]
      
      let intervalId = setInterval(()=> {
          if(eveningRed < night[0]){
            eveningRed ++
          }
          if(eveningGreen < night[1]){
            eveningGreen ++
          }
          if(eveningBlue < night[2]){
            eveningBlue ++
          }
          if(eveningRed > night[0]){
            eveningRed --
          }
          if(eveningGreen > night[1]){
            eveningGreen --
          }
          if(eveningBlue > night[2]){
            eveningBlue --
          }
        
          sky.style.background = `rgb(${copyOfEvening})`
          
        clearInterval(intervalId)
        increaseDecrease()
      }, 1000)
    }
    else if(JSON.stringify(copyOfNight) !== JSON.stringify(morning)){
           // console.log(copyOfNight, "copyOfNight") 
          // copyOfcolor3 = [red3, green3, blue3]
      
      let intervalId = setInterval(()=> {
          if(nightRed < morning[0]){
            nightRed ++
          }
          if(nightGreen < morning[1]){
            nightGreen ++
          }
          if(nightBlue < morning[2]){
            nightBlue ++
          }
          if(nightRed > morning[0]){
            nightRed --
          }
          if(nightGreen > morning[1]){
            nightGreen --
          }
          if(nightBlue > morning[2]){
            nightBlue --
          }
        
          sky.style.background = `rgb(${copyOfNight})`
          
        clearInterval(intervalId)
        increaseDecrease()
      }, 1000)
    }
    else if(JSON.stringify(copyOfNight) === JSON.stringify(morning)){
        morningRed = morning[0]
        morningGreen = morning[1]
        morningBlue = morning[2]
        copyOfMorning = [morningRed, morningGreen, morningBlue]
        increaseDecrease()
    }

    
  }
  increaseDecrease()
  
}
morningToEvening_changeColor([27,52,77], [108, 140, 172], [26, 12, 54], [5, 10, 15])