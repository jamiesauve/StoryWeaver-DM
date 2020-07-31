import React from 'react'
import styled from 'styled-components'

import colors from '../../../data/styles/colors'

import { useRecoilState } from 'recoil'
import { currentWikiLinkAtom } from '../../../state/atoms/generalAtoms'

const This = styled.span`
  color: ${colors.freshwaterBlue};

  &:hover {
    cursor: pointer;
    color: ${colors.oceanBlue};
  }
`

const WikiLink = props => {
  const {
    destinationAspect,
    label,
    linkTarget,
  } = props

  const [currentWikiLink, setCurrentWikiLink] = useRecoilState(currentWikiLinkAtom)

  const handleClick = () => {
    setCurrentWikiLink({
      destinationAspect,
      linkTarget,
    })
  }

  return (
    <This
      onClick={handleClick}
    >
      {label}
    </This>
  )
}

WikiLink.defaultProps = {
  destinationAspect: 'wiki',
};

export default WikiLink