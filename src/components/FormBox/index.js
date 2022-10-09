import {Component} from 'react'
import {BsUpload} from 'react-icons/bs'
import './index.css'

class FormBox extends Component {
  state = {
    file: '',
    imagePreviewUrl: '',
  }

  pressButton = e => {
    e.preventDefault()
    const {file} = this.state
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', {file})
  }

  getPhoto = e => {
    e.preventDefault()

    const reader = new FileReader()
    const file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    const {imagePreviewUrl} = this.state
    console.log(imagePreviewUrl)
    let imagePreview = null
    if (imagePreviewUrl) {
      imagePreview = <img src={imagePreviewUrl} alt="not found" />
    } else {
      imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      )
    }
    return (
      <div>
        <form action="." encType="multipart/form-data">
          <label htmlFor="file-upload">
            <BsUpload />
          </label>
          <input type="file" id="file-upload" onChange={this.getPhoto} />
          <br />
          <button type="button" onClick={this.pressButton}>
            Get it
          </button>
        </form>
        <div className="imgPreview">{imagePreview}</div>
      </div>
    )
  }
}

export default FormBox
