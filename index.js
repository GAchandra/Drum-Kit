// Get all of the drum button
const drumBtns = document.querySelectorAll(".drum")
// Create an array for containing drum Names
const drumNames = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"]
// Add drum images to the buttons
const addImage = drumIndex => {
  drumBtns[drumIndex].style.backgroundImage = "url('./images/" + drumNames[drumIndex] + ".png')"
}

// Add drum sound
const addSound = id => {
  const drumAudio = new Audio('./sounds/' + drumNames[id] + ".mp3");
  drumAudio.play();
}

// Change the drum text color
const changeTextColor = element => {
  element.style.color = "white";
  setTimeout(() => {
    element.style.color = "#DA0463";
  }, 150);
}

const buttonAnimation = element => {
  element.classList.add("pressed");
  setTimeout(() => element.classList.remove("pressed"), 100);
}

const drumPrassed = (element, id) => {
  // Play the sound
  addSound(id);
  // Change text Color
  changeTextColor(element);
  // Button buttonAnimation
  buttonAnimation(element);
}

// Add event handler
const handleClick = (event, id) => {
  const element = event.target;
  drumPrassed(element, id)
}

// Create a array containing keys
const keys = ["w", "a", "s", "d", "j", "k", "l"]

const handleKeyPress = (event) => {
  keyIndex = keys.findIndex(key => key == event.key);

  //check if the key Index is not -1
  if (keyIndex !== -1) {
    const element = drumBtns[keyIndex];
    drumPrassed(element, keyIndex);
  }
}

//loop over each drum buttons
drumBtns.forEach((drumBtn, index) => {
  //Add Image
  addImage(index)
  // Add event listener to the drum
  drumBtn.addEventListener("click", event => handleClick(event, index));
});

window.addEventListener("keypress", handleKeyPress);
