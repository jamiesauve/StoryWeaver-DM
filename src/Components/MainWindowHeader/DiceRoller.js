import React, { useState } from 'react'
import styled from 'styled-components'

import { useRecoilState } from 'recoil'

import generateRoll from '../../utils/generateRoll'
import { sanitizeNumeric } from '../../utils/sanitize'

import colors from '../../data/styles/colors'
import theme from '../../data/styles/theme'

import { rollsAtom } from '../../state/atoms/generalAtoms'
import axios from 'axios'

const ROLL_URL = `http://api.jamiesauve.com:4221`;

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

  const handleDiceRollerChange = async (e) => {
    let input = e.target.value.trimLeft()

    setDiceRollerInputValue(input)

    if (input.charAt(input.length - 1) === " ") {
      input = input.trimRight();

      for(let a = 0; a < numberOfRollsToMake; a++) {
        try {
          console.log({ input })
          if (input.endsWith("adv") || input.endsWith("dis")) {
            const command = input.substring(0, input.length - 3)
            const suffix = input.substring(input.length -3, input.length)

            input = `${command} ${suffix}`
            console.log('spliced', { input })
          }

          const { data: result } = await axios({
            method: `GET`,
            url: `${ROLL_URL}/roll/${input}`,
            headers: {
              'Content-Type': 'application/json',
              'x-client-app': `storyweaver-dm`,
            },
          })

          const roll = {
            bonus: result.bonus,
            command: result.command,
            index: rollCommandCount,
            individualResults: result.individualResults,
            individualResultsLabel: result.individualResultsLabel,
            total: result.total,
          }
    
          setRollsList(rollsList => [ 
            ...rollsList, 
            roll,
          ])
  
          setNumberRolled(roll.total)
          setLastInput(roll.command)
        } catch (err) {
          console.log(err)
        }
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