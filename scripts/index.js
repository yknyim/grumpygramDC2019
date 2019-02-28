console.log("is this thing on? hello?");

// When we click any.picture-frame
// A const is a "constant" variable which means
// that is cannot be reassigned.
const targetElements = document.querySelectorAll("[data-target]");

// We see an enlarged version of image that is inside that .picture-frame

function respondToClick() {
    console.log('hello');
    console.log('how are you?');
    console.log('i am fine because i am a hamster.');
}

function attachClickHandler(oneElement) {
    // This is how we handle one element.
    oneElement.addEventListener("click", respondToClick);
}

targetElements.forEach(attachClickHandler);