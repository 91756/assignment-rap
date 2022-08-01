import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosArrowBack} from 'react-icons/io'
import {v4 as uuidv4} from 'uuid'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import logoImage from '../../images/logo.png'
import nxtLogo from '../../images/nxtlogo.png'
import iconUp from '../../images/Icon.png'
import addResourceImg from '../../images/image 9.png'
import avatarImg from '../../images/avatar img.png'
import './index.css'
import {
  Heading,
  HeaderContainer,
  ImageLogo,
  ImageIcon,
  FormContainer,
  Label,
  Input,
  InputContainer,
  TextArea,
  PhotoContainer,
  DivPhoto,
  ImageArrowIcon,
  Paragraph,
  CustomButton,
  AddResourceImg,
  UiContainer,
  IconAndUsers,
  ShowError,
} from './styleComponents'

class AddResource extends Component {
  state = {
    addResourcesList: [],
    inputName: '',
    inputLink: '',
    inputDescription: '',
    showInputNameError: false,
    showInputLinkError: false,
    showInputDescriptionError: false,
    imgFile: '',
  }

  onChangeInputName = event => {
    this.setState({inputName: event.target.value})

    if (event.target.value !== '') {
      this.setState({showInputNameError: false})
    } else {
      this.setState({showInputNameError: true})
    }
  }

  getErrorNotification = () => {
    toast.error('not added', {
      position: 'bottom-center',
      className: 'error-toast',
    })
  }

  getSuccessNotification = () => {
    toast.success('successfully added', {
      position: 'bottom-center',
      className: 'success-toast',
    })
  }

  onShowNameError = () => {
    const {inputName} = this.state
    if (inputName === '') {
      this.setState({showInputNameError: true})
    }
  }

  onChangeInputLink = event => {
    this.setState({inputLink: event.target.value})

    if (event.target.value !== '') {
      this.setState({showInputLinkError: false})
    } else {
      this.setState({showInputLinkError: true})
    }
  }

  onShowLinkError = () => {
    const {inputLink} = this.state
    if (inputLink === '') {
      this.setState({showInputLinkError: true})
    }
  }

  onChangeInputDescription = event => {
    this.setState({inputDescription: event.target.value})

    if (event.target.value !== '') {
      this.setState({showInputDescriptionError: false})
    } else {
      this.setState({showInputDescriptionError: true})
    }
  }

  onShowInputDescriptionError = () => {
    const {inputDescription} = this.state
    if (inputDescription === '') {
      this.setState({showInputDescriptionError: true})
    }
  }

  getFormSubmitted = async () => {
    const {inputName, inputLink, inputDescription, imageFile} = this.state
    const newResource = {
      id: uuidv4(),
      title: inputName,
      link: inputLink,
      description: inputDescription,
      iconUrl: imageFile,
    }

    const url =
      'https://media-content.ccbp.in/website/react-assignment/add_resource.json'
    const options = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(newResource),
    }
    const response = await fetch(url)
    console.log(response)
    if (response.ok === true) {
      if (inputDescription.length >= 10) {
        this.setState(prevState => ({
          addResourcesList: [...prevState.addResourcesList, newResource],
          inputName: '',
          inputLink: '',
          inputDescription: '',
        }))
        this.getSuccessNotification()
      } else {
        this.getErrorNotification()
      }
    } else {
      this.getErrorNotification()
    }
  }

  formSubmit = event => {
    event.preventDefault()
    const {inputName, inputLink, inputDescription} = this.state
    if (inputName === '') {
      this.setState({showInputNameError: true})
    }
    if (inputLink === '') {
      this.setState({showInputLinkError: true})
    }
    if (inputDescription === '') {
      this.setState({showInputDescriptionError: true})
    }
    if (inputName !== '' && inputLink !== '' && inputDescription !== '') {
      this.getFormSubmitted()
    }
  }

  logout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  getHomePage = () => {
    const {history} = this.props
    history.push('/')
  }

  handleChange = event => {
    this.setState({imageFile: URL.createObjectURL(event.target.files[0])})
  }

  render() {
    const {
      showInputNameError,
      inputName,
      showInputLinkError,
      inputLink,
      inputDescription,
      showInputDescriptionError,
      imageFile,
    } = this.state
    return (
      <div>
        <HeaderContainer>
          <ImageLogo src={nxtLogo} onClick={this.getHomePage} />
          <ImageIcon src={avatarImg} onClick={this.logout} />
        </HeaderContainer>
        <UiContainer>
          <div>
            <IconAndUsers>
              <IoIosArrowBack />
              users
            </IconAndUsers>
            <FormContainer onSubmit={this.formSubmit}>
              <Heading>Add a Resource</Heading>
              <div>
                <InputContainer>
                  <Label>NAME</Label>
                  <br />
                  <Input
                    type="text"
                    value={inputName}
                    onChange={this.onChangeInputName}
                    onBlur={this.onShowNameError}
                  />
                  {showInputNameError ? (
                    <ShowError>Name is Required*</ShowError>
                  ) : null}
                </InputContainer>
              </div>
              <div>
                <InputContainer>
                  <Label>LINK</Label>
                  <br />
                  <Input
                    type="text"
                    value={inputLink}
                    onChange={this.onChangeInputLink}
                    onBlur={this.onShowLinkError}
                  />
                  {showInputLinkError ? (
                    <ShowError>Link is Required*</ShowError>
                  ) : null}
                </InputContainer>
              </div>
              <div>
                <InputContainer>
                  <Label>DESCRIPTION</Label>
                  <br />
                  <TextArea
                    type="text"
                    placeholder="Ex.Building a new connectivity platform for the team"
                    value={inputDescription}
                    onChange={this.onChangeInputDescription}
                    onBlur={this.onShowInputDescriptionError}
                  />
                  {showInputDescriptionError ? (
                    <ShowError>Description is Required*</ShowError>
                  ) : null}
                </InputContainer>
              </div>
              <div>
                <PhotoContainer>
                  <DivPhoto>
                    <img src={imageFile} alt="img" />
                  </DivPhoto>
                  <ImageArrowIcon src={iconUp} alt="" />
                  <Paragraph>Change photo</Paragraph>
                  <input type="file" onChange={this.handleChange} />
                </PhotoContainer>
              </div>
              <CustomButton type="submit">CREATE</CustomButton>
            </FormContainer>
          </div>
          <AddResourceImg src={addResourceImg} />
          <div>
            <ToastContainer />
          </div>
          )
        </UiContainer>
      </div>
    )
  }
}
export default AddResource
