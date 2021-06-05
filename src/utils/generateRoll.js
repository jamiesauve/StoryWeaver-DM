const generateRoll = (input) => {
  const command = input.split(' ')

  const numberOfDice = parseInt(command[0])
  const sidesOfDice = parseInt(command[1])
  const rollBonus = command[2] ? parseInt(command[2]) : null

  const resultsOfRolls = []

  let total = 0;

  for (let a = 0; a < numberOfDice; a++) {

    const diceRoll = Math.floor(Math.random() * sidesOfDice) + 1

    resultsOfRolls.push({
      diceRoll,
      isCriticalSuccess: Boolean(diceRoll === sidesOfDice),
      isCriticalFailure: Boolean(diceRoll === 1),
    })

    total += diceRoll
  }

  return {
    command: `${numberOfDice}d${sidesOfDice}${rollBonus ? ` + ${rollBonus}` : ``}`,
    resultsOfRolls,
    bonus: rollBonus,
    total: total + rollBonus
  } 
}

export default generateRoll