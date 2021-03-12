import styled from 'styled-components'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  
  width: ${props => props.width || `25vw`};
`

export default Frame;