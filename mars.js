//starting exposition
alert('Starting your Mars Adventure!')
alert('Booting up...')
alert('all systems are GO')

//ask the user for their name
let username = prompt("Welcome, explorer! What is your name?")
//reformat the username
let usernameFirstLett = username[0] //console.log(usernameFirstLett)
usernameFirstLett = usernameFirstLett.toUpperCase() //console.log(usernameFirstLett)
let usernameOtherLett = username.slice(1) //console.log(usernameOtherLett)
username = usernameFirstLett + usernameOtherLett //console.log(`Name reformatting complete. ${username}`)

alert(`Hi ${username}, Welcome to the Mars Adventure Game.`)

//more exposition
alert(`NASA ran out of monkeys to send to space, so now they are accepting human test subjects!`)
alert(`You must have incredible luck. NASA randomly selected a single citizen out of US population, and your SSN showed up first!`)

//Gauging their willingness to participate
let answer = undefined
while (answer !== 'Y') {
    answer = prompt(`Do you accept this once-in-a-lifetime opportunity? (Type "Y" or "N")`)
    answer = answer.toUpperCase()
    if (answer === "N") {
        alert(`Sorry, there must have been an error, we didn't get your answer. We'll ask you one more time.`)
    } else if (answer === "Y") {
        alert(`That's great to hear! We only want the most enthusiastic of candidates. Welcome to the program!`)
    } else {
        alert(`input not recognized.`)
    }
}

//Suitcases
alert("It's a long trip, so you'll probably need a change of clothes.")
let numSuitcases = 10
while (numSuitcases > 2) {
    numSuitcases = prompt("How many suitcases are you planning to bring?")
    numSuitcases = Number(numSuitcases)
    if (numSuitcases > 2) { alert("You must be fun to travel with... Look, the spaceship can't carry that many. You'll have to pack lighter.") }
    else { alert("Great! Getting through security will be a breeze.") }
}

//Companion Animal
alert("Previous test subjects showed signs of physcological decay due to social isolation. For this reason NASA has recommended you to bring a companion animal.")
let companionType = prompt(`What kind of animal would you like to bring?`)
let companionName = prompt(`And what is this creatures name?`)
//re-format the type and name, first make it all lower case, then capitalize the first letter
companionType = companionType.toLowerCase()
let compNameFirstLett = companionName[0]
compNameFirstLett = compNameFirstLett.toUpperCase()
let compNameOtherLett = companionName.slice(1)
companionName = compNameFirstLett + compNameOtherLett
alert(`So you want to bring a ${companionType} named ${companionName}? How original.`)
if (companionType.includes('dog') || companionType === "cat") { alert(`Awesome. We'll send an intern to the local shelter. I'm sure they'll pick a good one.`) }
else { alert(`Well...dogs and cats are typically the more popular choice... We don't actually have any ${companionType} food on hand... we'll send an intern to buy some before the launch.`) }

//Spaceship Decor
alert(`Research has also shown that having a pleasent environment can boost your mood. So NASA is making us add some decor to your ship.`)
let decor = undefined
let stylePref = prompt(`Which of these options do you find most appealing? The launch is coming up so you only have once chance to decide...
        A   Chrome everything (for peak Sci-fi aesthetic)
        B   SpaceX style white interior with a big window
        C   80's style with an abundance of buttons, switches and lights`)
stylePref = stylePref.toUpperCase()
console.log(stylePref)

if (stylePref === "A") { decor = "Chrome-everything" }
else if (stylePref === "B") { decor = "SpaceX Minimalist" }
else if (stylePref === "C") { decor = "80's Space Age" }
else {
    decor = "no"
    alert("That wasn't one of the options...")
}
console.log(decor)


//combining it all
alert(`Well ${username}, I must say you have some very specific preferences. It looks like we have you down for launch to Mars with ${companionName} the ${companionType}, ${numSuitcases} count of luggage, and a space ship decorated with ${decor} decor. The Martians will be lucky to meet someone as uniqe as you!`)

//countdown
let countdown = prompt("How many seconds would you like your countdown to last?")
Number(countdown)
alert("Countodwn Started:")

while (countdown > 0) {
    alert(countdown + "...")
    countdown -= 1
}

alert("-------LIFTOFF!--------")
