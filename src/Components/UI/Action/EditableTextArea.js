import styled from 'styled-components'

import theme from '../../../data/styles/theme'

const EditableTextarea = styled.textarea`
  flex-grow: 1;

  padding: 5px;
  resize: vertical;

  border: solid 1px rgba(255, 255, 255, 0.1);
  
  background: rgba(255, 255, 255, 0.1);
  font-size: ${theme.mediumTextSize};
  color: ${theme.lightGreyText};
`

export default EditableTextarea