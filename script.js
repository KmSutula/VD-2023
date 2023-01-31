const container = document.getElementById("container");

const listOfThings = [
  "you love to surprise me and you're so good at it",
  "you're an extremely generous person to the people you love",
  "you are always willing to hear me out and communicate",
  "you're the type of person animals love #bestdogcatdadever",
  "you can turn my mood around with a hug and a joke",
  "you have unique and fascinating taste in music #sharksong",
  "you believe in me and give me encouragement when i need it most",
  "you love to be outside and go new places",
  "you have excellent new beer radar and always let me have a sip",
  "you are the best sous chef and i always appreciate your help",
  "you are a sweet sensitive baby and give the best compliments",
  "you're so much funnier than me and i love you for that",
  "you listen well and remember all the ridiculous stuff i mention",
  "your unique hobbies and the time you commit to them!",
];

let dayOfFeb = new Date().getDate(Date.now());
console.log(dayOfFeb);
if (dayOfFeb > 14) {
  dayOfFeb = 14;
}

function createHearts() {
  for (let i = 0; i < dayOfFeb; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    // heart.onclick = (e) => showSentence(e);
    if (i + 1 === dayOfFeb) {
      heart.innerHTML = `<img src="./Valentines-candy-hearts-05.svg"/><p id="number">${
        i + 1
      }</p><p class="thing-i-love">
    ${
      listOfThings[i]
    }</p><div class=" reveal-div">? <br>(click to reveal)</div>`;
    } else {
      heart.classList.add("flip");
      heart.innerHTML = `<img src="./Valentines-candy-hearts-05.svg"/>
      <p id="number">${i + 1}</p><p class="thing-i-love">
    ${listOfThings[i]}</p><div class=" reveal-div">? <br>(click to reveal)</div>
      
    `;
    }
    heart.addEventListener("click", () => {
      heart.classList.add("flip");
    });

    container.insertBefore(heart, container.firstChild);
  }
}

// function showSentence(e) {
//   const questionMark = e.target;
//   if (questionMark.classList.contains("show")) {
//     questionMark.classList.replace("show", "hide");
//   }
// }

createHearts();
