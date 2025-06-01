function generateCowName() {
  const names = ["Moozilla", "Bhuri Bhai", "Lal Badshah", "Moti", "Kalu"];
  const name = names[Math.floor(Math.random() * names.length)];
  document.getElementById("cow-name-result").innerText = `Your cow name is: ${name}`;
}
