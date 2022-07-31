import styled from 'styled-components'

export const Heading = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 32px;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
`
export const ImageLogo = styled.img`
  width: 110px;
  height: 45px;
`
export const ImageIcon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`
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
  font-size: 12px;
  font-weight: 600;
`
export const Input = styled.input`
  border: 1px solid #d7dfe9;
  padding: 8px;
  width: 300px;
  color: #0b69ff;
  margin-bottom: 5px;
  outline: none;
`
export const TextArea = styled.textarea`
  border: 1px solid #d7dfe9;
  padding: 8px;
  width: 300px;
  height: 60px;
  font-family:"Roboto"
  margin-bottom: 15px;
  outline: none;
`
export const PhotoContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`
export const DivPhoto = styled.div`
  width: 50px;
  height: 40px;
  text-align: center;
  padding-top: 15px;
  border: 2px solid #d7dfe9;
`
export const ImageArrowIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 8px;
`
export const Paragraph = styled.p`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Roboto';
`
export const CustomButton = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #0b69ff;
  color: #ffffff;
  border-radius: 8px;
  border-width: 0px;
  margin-top: 50px;
`
export const AddResourceImg = styled.img`
  width: 50vw;
  height: 100vh;
`
export const UiContainer = styled.div`
  display: flex;
  border: 1px solid #d7dfe9;
`
export const IconAndUsers = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  color: #7e858e;
  padding-top: 10px;
`
export const ShowError = styled.p`
  color: red;
  margin-top: 1px;
`
export default styled
