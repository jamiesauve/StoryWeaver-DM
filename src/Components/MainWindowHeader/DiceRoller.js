import React, { useState } from 'react'
import styled from 'styled-components'

import generateRoll from '../../utils/generateRoll'
import { sanitizeNumeric } from '../../utils/sanitize'

import colors from '../../data/styles/colors'

const This = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const QuickRollTitle = styled.div`
  font-weight: bold;
  padding-right: 10px;
`

const Input = styled.input`
  width: 90px;
  padding: 10px;
  
  border-radius: 5px;
  border-bottom: 1px ${colors.winterWhite} solid; // needed to make the input match app styles

  text-align: center;
`

const LastInputSpan = styled.span`
  color: #777;
`

const NumberDisplay = styled.div`
  width: 90px;


  padding: 8px 10px;
  margin-left: 5px;

  text-align: center;

  border-radius: 5px;

  background-color: ${colors.winterWhite};
  color: ${colors.darkBackground};
`

const DiceRoller = () => {
  const [numberRolled, setNumberRolled] = useState(0)
  const [diceRollerInputValue, setDiceRollerInputValue] = useState('')
  const [lastInput, setLastInput] = useState('')

  const handleDiceRollerChange = (e) => {  
    const input = sanitizeNumeric(e.target.value)

    setDiceRollerInputValue(input)

    const numberOfSpaces = input.split(" ").length

    if (numberOfSpaces === 3) {
      const total = generateRoll(input.trim())
  
      setNumberRolled(total)
      setDiceRollerInputValue('')
      setLastInput(input.replace(" ", "d"))
    }
  }

  return (
    <This>
      <QuickRollTitle>
        Quick Roll 
      </QuickRollTitle>
      
      <Input
        type="text"
        onChange={handleDiceRollerChange}
        value={diceRollerInputValue}
      />

      <NumberDisplay>
        { lastInput
          && <LastInputSpan>
            {`${lastInput}: `}
          </LastInputSpan>
        }
        {numberRolled}
      </NumberDisplay>
    </This>
  )
}

export default DiceRoller