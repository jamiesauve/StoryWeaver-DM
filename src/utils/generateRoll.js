const generateRoll = (input) => {
  const [numberOfDice, sidesOfDice] = input.split(' ')

  let total = 0;

  for (let a = 0; a < numberOfDice; a++) {

    const diceRoll = Math.floor(Math.random() * sidesOfDice) + 1
    total += diceRoll
  }

  return total
}

export default generateRoll