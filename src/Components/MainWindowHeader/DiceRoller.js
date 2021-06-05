import React, { useState } from 'react'
import styled from 'styled-components'

import { useRecoilState } from 'recoil'

import generateRoll from '../../utils/generateRoll'
import { sanitizeNumeric } from '../../utils/sanitize'

import colors from '../../data/styles/colors'
import theme from '../../data/styles/theme'

import { rollsAtom } from '../../state/atoms/generalAtoms'

const This = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`

const RollLabel = styled.div`
  font-weight: bold;
  ${props => props.width
    ? `width ${props.width}px`
    : ``
  }
`

const Input = styled.input`
  width: ${props => `${props.width}px` || `90px`};
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

  background-color: ${theme.lightDarkBackground};
  color: ${theme.lightGreyText};
`

const DiceRoller = () => {
  const [, setRollsList] = useRecoilState(rollsAtom)

  const [rollCommandCount, setRollCommandCount] = useState(0)

  const [numberOfRollsToMake, setNumberOfRollsToMake] = useState(1)

  const [numberRolled, setNumberRolled] = useState(0)
  const [diceRollerInputValue, setDiceRollerInputValue] = useState('')
  const [lastInput, setLastInput] = useState('')

  const handleNumberOfRollsToMake = (e) => {
    const input = sanitizeNumeric(e.target.value).trimLeft()

    const inputAsNumber = input ? parseInt(input) : 0

    setNumberOfRollsToMake(inputAsNumber)
  } 

  const handleDiceRollerChange = (e) => {
    const input = sanitizeNumeric(e.target.value).trimLeft()

    setDiceRollerInputValue(input)

    const numberOfSpaces = input.split(" ").length

    if (numberOfSpaces === 4) {
      for(let a = 0; a < numberOfRollsToMake; a++) {
        const roll = generateRoll(input.trim())
        roll.index = rollCommandCount
  
        setRollsList(rollsList => [ 
          ...rollsList, 
          roll,
        ])

        setNumberRolled(roll.total)
        setLastInput(roll.command)
      }
      
      setDiceRollerInputValue('')
      setRollCommandCount(count => count + 1)
    }
  }

  return (
    <This>
      <RollLabel>
        Roll 
      </RollLabel>
      
      <Input
        type="text"
        onChange={handleNumberOfRollsToMake}
        value={numberOfRollsToMake}
        width={30}
      />

      <RollLabel
        width={45}
      >
        {numberOfRollsToMake === 1
         ? 'time: '
         : 'times:'
        }
      </RollLabel>

      <Input
        type="text"
        onChange={handleDiceRollerChange}
        value={diceRollerInputValue}
      />

      <RollLabel
        width={75}
      >
        Last Roll: 
      </RollLabel>

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