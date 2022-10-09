import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import {TiAttachmentOutline} from 'react-icons/ti'
import {FaBug} from 'react-icons/fa'
import './index.css'

class AddItem extends Component {
  state = {
    itemName: '',
    description: '',
    inputFile: '',
    file: '',
    imagePreviewUrl: '',
    user: '',
    status: 'To do',
    epic: 'None',
    itemType: 'Story',
    priority: 'None',
    startDate: '',
    endDate: '',
    duration: '',
    estimationPoints: '',
    taskList: [],
  }

  formSubmit = event => {
    event.preventDefault()
    const {
      itemName,
      description,
      imagePreviewUrl,
      user,
      status,
      epic,
      itemType,
      priority,
      startDate,
      endDate,
      duration,
      estimationPoints,
    } = this.state
    const newTask = {
      itemName,
      description,
      imagePreviewUrl,
      user,
      status,
      epic,
      itemType,
      priority,
      startDate,
      endDate,
      duration,
      estimationPoints,
    }
    console.log(newTask)
    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      itemName: '',
      description: '',
      imagePreviewUrl: '',
      user: '',
      status: '',
      epic: '',
      itemType: '',
      priority: '',
      startDate: '',
      endDate: '',
      duration: '',
      estimationPoints: '',
    }))
  }

  onChangePriority = event => {
    this.setState({priority: event.target.value})
  }

  onChangeStartDate = event => {
    this.setState({startDate: event.target.value})
  }

  onChangeDuration = event => {
    this.setState({duration: event.target.value})
  }

  onChangeEndDate = event => {
    this.setState({endDate: event.target.value})
  }

  onChangeEstimationPoints = event => {
    this.setState({estimationPoints: event.target.value})
  }

  onChangeEpic = event => {
    this.setState({epic: event.target.value})
  }

  onChangeItemType = event => {
    this.setState({itemType: event.target.value})
  }

  onChangeStatus = event => {
    this.setState({status: event.target.value})
  }

  onChangeItemName = event => {
    this.setState({itemName: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  onChangeUser = event => {
    this.setState({user: event.target.value})
  }

  onChangeFile = event => {
    // console.log(event.target.value)
    this.setState({inputFile: event.target.files[0].name})
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
    const {
      itemName,
      description,
      inputFile,
      imagePreviewUrl,
      user,
      status,
      epic,
      itemType,
      priority,
      startDate,
      endDate,
      duration,
      estimationPoints,
      taskList,
    } = this.state
    console.log(taskList)
    // console.log(imagePreviewUrl)
    return (
      <div className="app-container">
        <img src={imagePreviewUrl} width={100} height={100} alt="not found" />
        <form className="form-container" onSubmit={this.formSubmit}>
          <div className="tab-cart">
            <div className="item-container">
              <button type="button" className="btn">
                Add New Item |
              </button>
              <button type="button" className="btn">
                Move Existing Item
              </button>
            </div>
            <GrFormClose size={30} />
          </div>
          <hr color="#F5F5F5" />
          <label htmlFor="item name" className="input-name">
            Item Name
          </label>
          <input
            type="text"
            id="item name"
            className="input-type"
            onChange={this.onChangeItemName}
            value={itemName}
          />
          <hr color="#F5F5F5" />
          <label htmlFor="file upload" className="input-name">
            Attachments
          </label>
          <input
            type="file"
            id="file upload"
            className="file-upload"
            value={inputFile}
            onChange={this.getPhoto}
          />
          <TiAttachmentOutline />
          <hr color="#F5F5F5" />
          <div className="desc">
            <label htmlFor="item description" className="input-name">
              Description
            </label>
            <textarea
              rows="3"
              cols="80"
              type="text"
              id="item description"
              className="input-desc"
              onChange={this.onChangeDescription}
              value={description}
            />
          </div>
          <hr color="#F5F5F5" />
          <h1 className="default-heading">Default Section</h1>
          <hr color="blue" />
          <div className="users-cart">
            <label htmlFor="users" className="input-name">
              Assign Users
            </label>
            <input
              type="text"
              id="users"
              className="input-type"
              onChange={this.onChangeUser}
              value={user}
            />
          </div>
          <hr color="#F5F5F5" />
          <label htmlFor="status" className="input-name">
            Status
          </label>
          <select
            className="status-option"
            id="status"
            onChange={this.onChangeStatus}
            value={status}
          >
            <option className="option" value="To do" selected>
              To do
            </option>
            <option className="option" value="planning">
              planning
            </option>
            <option className="option" value="QA Raised Bugs">
              QA Raised Bugs
            </option>
            <option className="option" value="Re open">
              Re open
            </option>
            <option className="option" value="Ready to Test">
              Ready to Test
            </option>
          </select>
          <hr color="#F5F5F5" />
          <label htmlFor="epic" className="input-name">
            Epic
          </label>
          <select
            className="status-option"
            id="epic"
            onChange={this.onChangeEpic}
            value={epic}
          >
            <option className="option">None</option>
            <option className="option">Vendor Onboarding (Market Place)</option>
            <option className="option">Platform Release</option>
            <option className="option">Marketing</option>
          </select>
          <hr color="#F5F5F5" />
          <label htmlFor="item type" className="input-name">
            Item Type
          </label>
          <select
            className="status-option"
            id="item type"
            onChange={this.onChangeItemType}
            value={itemType}
          >
            <option className="option">Story</option>
            <option className="option">Task</option>
            <option className="option">Bug</option>
          </select>
          <hr color="#F5F5F5" />
          <div>
            <label htmlFor="priority" className="input-name">
              Priority
            </label>
            <select
              id="priority"
              className="status-option"
              onChange={this.onChangePriority}
              value={priority}
            >
              <option className="option">None</option>
            </select>
          </div>
          <label htmlFor="date" className="input-name">
            Start Date
          </label>
          <input
            type="date"
            id="date"
            className="input-type"
            onChange={this.onChangeStartDate}
            value={startDate}
          />
          <br />
          <label htmlFor="date" className="input-name">
            End Date
          </label>
          <input
            type="date"
            id="date"
            className="input-type"
            onChange={this.onChangeEndDate}
            value={endDate}
          />
          <br />
          <label htmlFor="duration" className="input-name">
            Duration
          </label>
          <input
            type="time"
            id="duration"
            className="input-type"
            onChange={this.onChangeDuration}
            value={duration}
          />
          <br />
          <label htmlFor="points" className="input-name">
            Estimation Points
          </label>
          <input
            type="number"
            id="points"
            className="input-type"
            onChange={this.onChangeEstimationPoints}
            value={estimationPoints}
          />
          <hr color="#F5F5F5" />
          <button type="button" className="release-button">
            Release
          </button>
          <hr color="#F5F5F5" />
          <div>
            <button type="submit" className="create button">
              Create
            </button>
            <button type="button" className="button">
              Add More
            </button>
            <button type="button" className="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddItem
