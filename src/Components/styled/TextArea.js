import styled from 'styled-components'

const TextArea = styled.textarea`
width: 100%;
height: ${props => props.height || `100%`};

font-size: 16px;

resize: none;
`

export default TextArea