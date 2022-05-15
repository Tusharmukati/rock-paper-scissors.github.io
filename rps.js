const icns = Array.from(document.querySelectorAll(".icn"));
let uoutput = Array.from(document.getElementsByClassName("u1"));
let coutput = Array.from(document.getElementsByClassName("c1"));
let result = Array.from(document.getElementsByClassName("h4"));
const soundTrack1 = new Audio("Hanachirusato_(getmp3.pro).mp3");
const clickSound1 = new Audio("Samsung Touch.mp3")
soundTrack1.play()
var uchoose = "";
const mechanics = [
  { name: "ROCK", beats: "SCISSOR" },
  { name: "PAPER", beats: "ROCK" },
  { name: "SCISSOR", beats: "PAPER" },
];
icns.forEach((e) => {
  e.addEventListener("click", () => {
      clickSound1.play()
      uchoose = e.innerHTML;
      coutput[0].innerHTML = "Computer is selecting...";
      uoutput[0].innerHTML = uchoose;
      coutput[0].style.fontSize="1.8vmin"
      
      result[0].innerHTML="Just wait a moment"
    setTimeout(()=>{var cchoose = icns[Math.floor(Math.random() * 3) + 0].innerHTML;
        coutput[0].innerHTML = cchoose;
        coutput[0].style.fontSize="2.1vmin"
        if (uchoose == cchoose) {
          console.log("Game tie");
          result[0].innerHTML = "Game tie";
        } else if (uchoose == mechanics[0].name) {
          if (cchoose == mechanics[2].name) {
            result[0].innerHTML = "U Won";
          } else if (cchoose == mechanics[1].name) {
            result[0].innerHTML = "U Lose";
          }
        } else if (uchoose == mechanics[1].name) {
          if (cchoose == mechanics[0].name) {
            result[0].innerHTML = "U Won";
          } else if (cchoose == mechanics[2].name) {
            console.log("U Lose");
            result[0].innerHTML = "U Lose";
          }
        } else if (uchoose == mechanics[2].name) {
          if (cchoose == mechanics[1].name) {
            result[0].innerHTML = "U Won";
          } else if (cchoose == mechanics[0].name) {
            result[0].innerHTML = "U Lose";
          }
        
        }
        setTimeout(() => {
            uoutput[0].innerHTML="";  
            coutput[0].innerHTML="";  
            result[0].innerHTML="";  

          }, 2000);},500);
  });
});

