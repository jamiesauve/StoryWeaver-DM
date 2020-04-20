import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || `flex-start`};
  align-items: center;

  padding: ${props => props.padding || `0`};
`

export default Row