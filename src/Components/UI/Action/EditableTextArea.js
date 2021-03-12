import styled from 'styled-components'

import colors from '../../../data/styles/colors'
import sizes from '../../../data/styles/sizes'

const EditableTextarea = styled.textarea`
  flex-grow: 1;

  padding: 5px;
  resize: vertical;

  border: solid 1px rgba(255, 255, 255, 0.1);
  
  background: rgba(255, 255, 255, 0.1);
  font-size: ${sizes.medium};
  color: ${colors.lightGrey};
`

export default EditableTextarea