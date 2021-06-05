import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { useRecoilValue } from 'recoil'

import Section from '../Components/UI/Structure/Section'

import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'

import { rollsAtom } from '../state/atoms/generalAtoms';

import theme from '../data/styles/theme'
import shade from '../utils/shade'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const RollsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const RollItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${props => props.hasShadedBackground
    ? shade(theme.lightBackground, -30)
    : theme.lightBackground
  };
  color: ${theme.darkGreyText};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;
`

const RollCommand = styled.div`
  color: ${theme.darkText};
  font-weight: bold;
`

const Total = styled.div`
  display: flex;
  flex-direction: row;

  & > strong {
    margin-left: 10px;
    color: ${theme.darkText};
    font-weight: bold;
  }
`

const IndividualResultsContainer = styled.div`
  width: 50%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 20px);
  grid-gap: 5px;

  align-items: center;
  justify-items: center;
`

// TODO: add some visual thing so that showing crits isn't relying only on color
const IndividualResult = styled.div`
  margin: 0 5px;
  border: 1px solid transparent;
  font-weight: bold;

  ${props => props.isCriticalSuccess
    ? `
      color: ${theme.criticalSuccess};
    ` 
    : ``
  }
  ${props => props.isCriticalFailure
    ? `
      color: ${theme.criticalFailure};
    ` 
    : ``
  }
`

const Rolls = (props) => {
  const rolls = useRecoilValue(rollsAtom)

  return (
    <This
    className="rolls"
    >
      <Section
        className="section"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          <RollsContainer>
            {
              _.map(rolls, (roll, index) => {
                const numbersRolled = roll.resultsOfRolls.map(roll => (
                  <IndividualResult
                    isCriticalSuccess={roll.isCriticalSuccess}
                    isCriticalFailure={roll.isCriticalFailure}
                  >
                    {roll.diceRoll}
                  </IndividualResult>
                ))

                return (
                  <RollItem
                    key={index}
                    hasShadedBackground={Boolean(roll.index % 2 === 1)}
                  >
                    <RollCommand>
                      {roll.command}:
                    </RollCommand> 

                    <IndividualResultsContainer>
                      {numbersRolled}
                    </IndividualResultsContainer>

                    {roll.bonus ? `+ ${roll.bonus} ` : ` `}
                    
                    <Total>
                      {`=`}

                      <strong>{roll.total}</strong>
                    </Total>
                  </RollItem>
                )
              })
            }
          </RollsContainer>
          
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Rolls