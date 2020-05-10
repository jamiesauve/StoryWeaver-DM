import styled from 'styled-components'

const ScrollableContainer = styled.div`
display: flex;
flex-direction: ${props => props.flexDirection || `column`};

align-items: stretch;
flex-grow: 1;

overflow: scroll;
`

export default ScrollableContainer