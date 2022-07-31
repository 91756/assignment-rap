import styled from 'styled-components'

export const TabItemContainer = styled.li`
  border: 1px solid #d7dfe9;
  padding: 10px;
  width: 170px;
  text-align: center;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
`

export default styled
