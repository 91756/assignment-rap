import {Component} from 'react'
import {
  ContainerElement,
  FormContainer,
  InputContainer,
  Label,
  Input,
  HeadingElement,
  CustomButton,
  ErrorMsg,
} from './styleComponents'

class LoginForm extends Component {
  state = {
    mobileNumber: '',
    password: '',
    showMobileNoError: false,
    showPasswordError: false,
    showFailureError: false,
  }

  onChangeMobileNumber = event => {
    this.setState({mobileNumber: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeMobileNoError = () => {
    const {mobileNumber} = this.state
    if (mobileNumber === '') {
      this.setState({showMobileNoError: true})
    }
  }

  onChangePasswordError = () => {
    const {password} = this.state
    if (password === '') {
      this.setState({showPasswordError: true})
    }
  }

  successLogin = () => {
    const {history} = this.props
    history.push('/')
  }

  formSubmitted = event => {
    event.preventDefault()
    const {mobileNumber, password} = this.state
    console.log(mobileNumber)
    console.log(password.length)
    if (
      mobileNumber.length === 10 &&
      typeof parseInt(mobileNumber) === 'number' &&
      password.length > 4
    ) {
      this.setState({showFailureError: false})
      this.successLogin()
    } else {
      this.setState({showFailureError: true})
    }
  }

  render() {
    const {
      mobileNumber,
      password,
      showMobileNoError,
      showPasswordError,
      showFailureError,
    } = this.state
    return (
      <ContainerElement>
        <HeadingElement>Login Form</HeadingElement>
        <FormContainer onSubmit={this.formSubmitted}>
          <InputContainer>
            <Label>Enter Mobile Number</Label>
            <Input
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              onChange={this.onChangeMobileNumber}
              onBlur={this.onChangeMobileNoError}
            />
            {showMobileNoError ? (
              <ErrorMsg>mobile no is Required*</ErrorMsg>
            ) : null}
          </InputContainer>
          <br />
          <InputContainer>
            <Label>Enter Password</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={this.onChangePassword}
              onBlur={this.onChangePasswordError}
            />
            {showPasswordError ? (
              <ErrorMsg>password is Required*</ErrorMsg>
            ) : null}
            {showFailureError ? (
              <ErrorMsg>mobile number and password are not valid</ErrorMsg>
            ) : null}
          </InputContainer>
          <br />

          <CustomButton type="submit" name="submit">
            Submit
          </CustomButton>
        </FormContainer>
      </ContainerElement>
    )
  }
}

export default LoginForm
