import {Component} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import nxtlogo from '../../images/nxtlogo.png'
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
    inputName: '',
    inputLink: '',
    inputDescription: '',
    showInputNameError: false,
    showInputLinkError: false,
    showInputDescriptionError: false,
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
    toast.error('error', {
      position: 'bottom-center',
      className: 'error-toast',
    })
  }

  getSuccessNotification = () => {
    toast.success('success', {
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
    const {inputName, inputLink, inputDescription} = this.state
    const resourcesDetails = {
      title: inputName,
      link: inputLink,
      description: inputDescription,
    }
    console.log(resourcesDetails)
    const url =
      'https://media-content.ccbp.in/website/react-assignment/add_resource.json'
    const options = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(resourcesDetails),
    }
    const response = await fetch(url)
    console.log(response)
    if (response.ok === true) {
      this.getSuccessNotification()
    } else {
      this.getErrorNotification()
    }
  }

  formSubmit = event => {
    event.preventDefault()
    const {inputName, inputLink, inputDescription} = this.state
    if (inputName === '') {
      this.setState({showInputNameError: true})
    } else if (inputLink === '') {
      this.setState({showInputLinkError: true})
    } else if (inputDescription === '') {
      this.setState({showInputDescriptionError: true})
    } else if (
      inputName !== '' &&
      inputLink !== '' &&
      inputDescription !== ''
    ) {
      this.getFormSubmitted()
    }
  }

  render() {
    const {
      showInputNameError,
      inputName,
      showInputLinkError,
      inputLink,
      inputDescription,
      showInputDescriptionError,
    } = this.state
    return (
      <div>
        <HeaderContainer>
          <ImageLogo src={nxtlogo} />
          <ImageIcon src={avatarImg} />
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
                  <DivPhoto>Img</DivPhoto>
                  <ImageArrowIcon src={iconUp} alt="" />
                  <Paragraph>Change photo</Paragraph>
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
