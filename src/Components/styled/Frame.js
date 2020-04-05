import styled from 'styled-components'

const Frame = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  max-height: ${props => props.maxHeight || `100%`};
  width: ${props => props.width || `25vw`};
`

export default Frame;