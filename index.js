/* */
const config = {
   _LENGTH: 30
}

/* Helper functions */
function getElement(name) {
   return document.querySelector(`#${name}`);
}
function randInt(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}


window.onload = () => {
   getElement("generate-name").addEventListener("click", () => displayInput());
   getElement("generate-random").addEventListener("click", () => generateKey(getRandomName()));
   getElement("key-input").addEventListener("click", () => generateKey(getElement("key-text-field").value));
}

function displayInput() {
   const container = getElement("enter-key");
   const isHidden = container.classList.contains("hidden");
   if (isHidden) {
      container.classList.remove("hidden");
   } else {
      container.classList.add("hidden");
   }
}

function getRandomName() {
   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   const nameLength = randInt(0, config._LENGTH);
   let result = "";
   for (let i = 0; i < nameLength; i++) {
      result += characters.split("")[randInt(0, characters.length)];
   }

   console.log(`%c ${result}`, "color: red");
   return result;
}

function generateKey(name) {
   // GET THE KEY
   let key = 900914; // DBF32
   name.split("").forEach((value) => {
      key += 100000; // 186A0
      key += value.charCodeAt(0);
   });
   key += 31337; // 7A69

   // DISPLAY IT
   getElement("name").innerHTML = name;
   getElement("key").innerHTML = key;
}