import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
export const Label = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`
export const Input = styled.input`
  border: 1px solid #d7dfe9;
  padding: 8px;
  width: 300px;
  color: #171f46;
  margin-bottom: 5px;
  outline: none;
`

export const ContainerElement = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeadingElement = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 50px;
`
export const CustomButton = styled.button`
  background-color: #0b69ff;
  padding: 10px;
  color: white;
  border-width: 0px;
  width: 100px;
  height: 40px;
  border-radius: 5px;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 13px;
  margin-bottom: 10px;
  font-family: 'Roboto';
  margin-top: 1px;
`

export default styled
