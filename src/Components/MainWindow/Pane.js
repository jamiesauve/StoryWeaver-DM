import styled from 'styled-components'

import colors from '../../data/styles/colors'

const Pane = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  
  margin: 5px; 
  padding: 10px;

  height: ${props => props.height || `auto`};

  border: solid 1px ${props => props.borderColor || colors.darkGrey};
  ${ props => !props.isBorderTopVisible && `border-top: none;`}

  border-radius: 5px;
  
  background-color: ${colors.darkBackground};

`

export default Pane;