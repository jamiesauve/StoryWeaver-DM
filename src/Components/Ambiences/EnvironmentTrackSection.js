import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ThemeBox from './ThemeBox'
import ToggleExpandedButton from '../UI/Structure/ToggleExpandedButton'

import terrainTypes from '../../data/terrainTypes'
import tracks from '../../data/environmentTracks'

import toCapitalCase from '../../utils/toCapitalCase'

const This = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Title = styled.div`
  margin-top: 20px;
  border-top: 1px solid #777;
  padding-top: 20px;
  color: #aaa;

  text-align: center;
`

const EnvironmentalTrackSection = (props) => {
  const [ expandedTheme, setExpandedTheme ] = useState('')
  const [ areAllCategoriesExpanded, setAreAllCategoriesExpanded ] = useState(true)

  useEffect(() => {
    setAreAllCategoriesExpanded(props.activeLocation)
  }, [props.activeLocation])

  const currentTerrainTypes = props.activeLocation
    ? [_.find(terrainTypes, {name: props.activeLocation})]
    : terrainTypes

  return (
    <This
      className="environmentalTrackSection"
    >
      <Title>
        Environments
      </Title>
     
      <ToggleExpandedButton 
        areAllCategoriesExpanded={areAllCategoriesExpanded}
        setAreAllCategoriesExpanded={setAreAllCategoriesExpanded}
      />

      {_.map(currentTerrainTypes, (terrainType) => {
        const filteredTracks = _.filter(tracks, trackObject => {
            if (_.isEmpty(trackObject.terrain)) return true;

            return _.includes(trackObject.terrain, terrainType.name)
          })

        const sortedTracks = _.sortBy(filteredTracks, track => track.title)

        return _.isEmpty(filteredTracks)
          ? null
          : (
            <ThemeBox
              isExpanded={areAllCategoriesExpanded ? true : expandedTheme.toLowerCase() === terrainType.name}
              key={terrainType.name}
              title={toCapitalCase(terrainType.name)}
              titleColor={terrainType.color}
              setExpandedTheme={currentTerrainTypes.length === 1
                ? setAreAllCategoriesExpanded
                : areAllCategoriesExpanded ? () => setExpandedTheme('') : setExpandedTheme}
              tracks={sortedTracks}
            />
          )

      })}
    </This>
  )
}

export default EnvironmentalTrackSection