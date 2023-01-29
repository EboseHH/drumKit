function handClicked() {
    // Get the text from inside the button and then check which button has been clicked. Based on the text play a
    // sound corresponding to the following:
    //   w - tom1
    //   a - tom2
    //   s - tom3
    //   d - tom4
    //   j - snare
    //   k - crash
    //   l - kick

    const button = this
    const text = button.innerHTML
    let audio;
    switch (text) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3')
            break;
        case "a":
            new Audio('sounds/tom-2.mp3')

        case "s":
            audio = new Audio('sounds/tom-3.mp3')
            break;
        case "d":
            new Audio('sounds/tom-4.mp3')
        case "j":
            audio = new Audio('sounds/snare.mp3')
            break;
        case "k":
           audio = new Audio('sounds/crash.mp3')
            break
        case "l":
            audio = new Audio('sounds/kick-bass.mp3')
            break;
        default:
            break;
    }
    audio.play()

}
// The commented code below selects the first button only and adds an event listener to it.
// document.querySelector("button").addEventListener("click", handClicked)

// The code below selects all the buttons and adds an event listener to it.
// since querySelectorAll returns a list of elements, we use for each to 
// iterate through the list and add an event listener to each element.
// For each is an erray method runs a function for each element in the array
function attachClick (button) {
    button.addEventListener("click", handClicked);
}  

document.querySelectorAll("button").forEach(attachClick)

    
