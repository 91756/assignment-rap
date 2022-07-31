import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
`
export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #171f46;
  list-style-type: none;
`
export const SearchContainer = styled.div`
  width: 65vw;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
export const SearchInput = styled.div`
  width: 500px;
  padding: 8px;
  border: 1px solid #d7dfe9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Input = styled.input`
  border: none;
  outline: none;
  width: 500px;
`
export const ResourcesContainer = styled.ul`
  width: 95vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export default styled
