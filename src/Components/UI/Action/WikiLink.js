import React from 'react'
import styled from 'styled-components'

import theme from '../../../data/styles/theme'

import { useRecoilState } from 'recoil'
import { currentWikiLinkAtom } from '../../../state/atoms/generalAtoms'

const This = styled.span`
  color: ${theme.linkColor};

  &:hover {
    cursor: pointer;
    color: ${theme.linkColorOnHover};
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