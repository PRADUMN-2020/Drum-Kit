var numberOfDrumButtons=document.querySelectorAll(".drum").length;


for(var i=0;i<numberOfDrumButtons;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function ()
{
  var buttonInnerHtml=this.innerHTML;
  keyResponse(buttonInnerHtml);
  addAnimation(buttonInnerHtml);
}
);

}

document.addEventListener("keydown",function(event){
  var pressedKey=event.key;
  keyResponse(pressedKey);
  addAnimation(pressedKey);
})

function keyResponse(key)
{
  switch(key)
  {
    case "a":
      var tom1=new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "s":
      var tom2=new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "d":
      var tom3=new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "f":
      var tom4=new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare=new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash=new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick=new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      alert("Invalid key pressed.");
  }
}

function addAnimation(key)
{
  var buttonPressed=document.querySelector("."+key);
  buttonPressed.classList.add("pressed");
  setTimeout(function(){buttonPressed.classList.remove("pressed");},100);
}
