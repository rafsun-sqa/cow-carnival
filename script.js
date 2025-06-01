function generateCowName() {
  const names = ["Moozilla", "Bhuri Bhai", "Lal Badshah", "Moti", "Kalu","Habba King,"Shamsher king","Golu","Bholu","Mastani","Rani","Chutki","Babu","Chintu","Pinky","Ladoo","Golu Bhai"];
  const name = names[Math.floor(Math.random() * names.length)];
  document.getElementById("cow-name-result").innerText = `Your cow name is: ${name}`;
}
