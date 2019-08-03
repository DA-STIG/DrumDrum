
// s= document.querySelectorAll("button.drum");
// .addEventListener("click",handleClick);


// Detecting button pressed
  for (var i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    // addEventListener("click",handleClick)[i]

      document.querySelectorAll("button.drum")[i].addEventListener("click",function(){
          //storing the button innerHTML letter into a var
          var buttonLetter = this.innerHTML;
          makeSound(buttonLetter);
          buttonAnimation(buttonLetter);
        });
    }

// Detecting Keyboard Pressed
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
  switch (key) {
    case "w":
       // creating a var that stores the sound obj+[location of the audio]
        // ceates an Html el..a lot of methos with the obj including play.
    var tom1= new Audio('sounds/tom-1.mp3');
        tom1.play();

    break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
        snare.play();
    break;

    case "k":
    var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
    break;

    case "l":
    var crash = new Audio('sounds/crash.mp3');
        crash.play();
    break;

    default: console.log(buttonLetter);
  }}


function buttonAnimation(currentkey){
  // we need to make .+ key [we only getting the key letter]
  // and for the class el of each button ex < button class="w drum">
  // we nee .w so .+key
  //now using the class .w we get the button
  // we add the class .pressed that styles the button using .classList and add

      var activeButton = document.querySelector("." + currentkey);
       // we add css style for the button pressed - "".press" class

      activeButton.classList.add("pressed");

      setInterval(function(){
        activeButton.classList.remove("pressed");
      },40);
}


