import {Component} from 'react'
import CardItem from '../CardItem'
import './index.css'

const tabsList = [
  {tabId: 'resources', text: 'Resources'},
  {tabId: 'request', text: 'Request'},
  {tabId: 'users', text: 'Users'},
]
class Resources extends Component {
  state = {resourcesAPi: [], apiStatus: false, activeTab: 'resources'}

  componentDidMount() {
    this.getResourcesApi()
  }

  getResourcesApi = async () => {
    const api =
      'https://media-content.ccbp.in/website/react-assignment/resources.json'
    const response = await fetch(api)
    const jsonData = await response.json()
    const resourcesData = jsonData.map(eachItem => ({
      category: eachItem.category,
      description: eachItem.description,
      iconUrl: eachItem.icon_url,
      id: eachItem.id,
      link: eachItem.link,
      tag: eachItem.tag,
      title: eachItem.title,
    }))
    console.log(resourcesData)
    this.setState({resourcesAPi: resourcesData, apiStatus: true})
  }

  render() {
    const {resourcesAPi} = this.state
    return (
      <div>
        <ul className="resources-container">
          {resourcesAPi.map(eachItem => (
            <CardItem key={eachItem.id} resourcesDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Resources
