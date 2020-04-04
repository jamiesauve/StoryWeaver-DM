import styled from 'styled-components'

const Pane = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;

  overflow: scroll;
  
  margin: 5px; 
  padding: 10px;

  border: solid 1px #777;
  border-radius: 5px;
  
  background-color: #222;

`

export default Pane;