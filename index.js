const firePic = document.querySelector("#detail-image")
const fireName = document.querySelector("#name")
const fireDate = document.querySelector("#date")
const fireAcres = document.querySelector("#acres")
const homeCount = document.querySelector("#homes")



function displayFire(fire) {

    firePic.src = fire.image
    fireName.textContent = fire.name
    fireDate.textContent = fire.date
    fireAcres.textContent = fire.acres
    homeCount.textContent = fire.homesLost
}

function printPic(fire) {
    const pic = document.createElement("img")
    pic.src = fire.image

    pic.addEventListener("click", () => {

        displayFire(fire)
        currentFire = fire
        
        while (commentSection.firstChild) {
            commentSection.removeChild(commentSection.lastChild)
        }
    })

    pic.addEventListener("mouseover", () => displayFire(fire))

    pic.addEventListener("mouseout", () => displayFire(currentFire))
    
    picDisplay.append(pic)
}

const nameList = document.querySelector("#fireList")
const picDisplay = document.querySelector("#picDisplay")

let currentFire;

fetch("http://localhost:4000/fires")
    .then(res => res.json())
    .then(fires => {

        currentFire = fires[0];

        displayFire(currentFire)

        fires.forEach(fire => {
            printPic(fire)
        });
    })
const commentSection = document.querySelector("#commentSection")
const form = document.querySelector("#commentForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const comment = document.createElement("p")
    comment.textContent = e.target.comment.value
    commentSection.append(comment)
    e.target.comment.value = ""
})
