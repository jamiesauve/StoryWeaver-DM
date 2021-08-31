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

const ResultsContainer = styled.div`
  width: 50%;

  display: grid;
  grid-template-columns: repeat(auto-fill, ${props => props.containsDoubledResults ? `45px` : `20px`});
  grid-gap: 5px;

  align-items: center;
  justify-items: center;
`

const Result = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 5px;
  border: 1px solid transparent;
`

// TODO: add some visual thing so that showing crits isn't relying only on color
const IndividualResult = styled.div`
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
                const isDisOrAdv = (_.get(roll.individualResults, '[0].allDiceResults.length', 0) === 2);
                
                const numbersRolled = isDisOrAdv 
                  ? roll.individualResultsLabel.map((rollLabels, index) => {
                    return (
                      <Result>
                        (
                        <IndividualResult
                          className={`result-${index}`}
                          key={index}
                          isCriticalSuccess={rollLabels[0].includes("nat 20")}
                          isCriticalFailure={rollLabels[0].includes("nat 1")}
                        >
                          {roll.individualResults[index].allDiceResults[0]}
                        </IndividualResult>

                        <span>, </span>

                        <IndividualResult
                          className={`result-${index}`}
                          key={index}
                          isCriticalSuccess={rollLabels[1].includes("nat 20")}
                          isCriticalFailure={rollLabels[1].includes("nat 1")}
                        >
                          {roll.individualResults[index].allDiceResults[1]}
                        </IndividualResult>
                        )
                      </Result>
                    )
                  })
                  : roll.individualResultsLabel.map((rollLabels, index) => (
                    <Result>
                      <IndividualResult
                        className={`result-${index}`}
                        key={index}
                        isCriticalSuccess={rollLabels[0].includes("nat 20")}
                        isCriticalFailure={rollLabels[0].includes("nat 1")}
                      >
                        {roll.individualResults[index].total}
                      </IndividualResult>
                    </Result>
                  ))

                return (
                  <RollItem
                    key={index}
                    hasShadedBackground={Boolean(roll.index % 2 === 1)}
                  >
                    <RollCommand>
                      {roll.command}:
                    </RollCommand> 

                    <ResultsContainer
                      containsDoubledResults={isDisOrAdv}
                    >
                      {numbersRolled}
                    </ResultsContainer>

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