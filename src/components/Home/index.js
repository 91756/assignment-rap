import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import CardItem from '../CardItem'
import nxtlogo from '../../images/nxtlogo.png'
import Header from '../Header'
import Tabs from '../Tabs'
import TabItem from '../TabItem'
import Resources from '../Resources'
import {
  Container,
  TabsContainer,
  SearchContainer,
  SearchInput,
  Input,
  ResourcesContainer,
} from './styledComponents'

const tabsList = [
  {tabId: 'resources', text: 'Resources'},
  {tabId: 'request', text: 'Request'},
  {tabId: 'users', text: 'Users'},
]

class Home extends Component {
  state = {
    resourcesList: [],
    searchInput: '',
    apiStatus: false,
    activeTab: 'resources',
  }

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
    this.setState({resourcesList: resourcesData, apiStatus: true})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      console.log(event.target.value)
      this.getMatchedResources()
    }
  }

  getMatchedResources = () => {
    const {searchInput, resourcesList} = this.state
    console.log(searchInput)
    const updatedResources = resourcesList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({resourcesList: updatedResources})
  }

  changingActiveTab = id => {
    this.setState({activeTab: id})
  }

  getResources = id => {
    let value = ''
    switch (id) {
      case 'resources':
        value = ''
        break
      case 'request':
        value = 'request'
        break
      case 'users':
        value = 'user'
        break
      default:
        return null
    }
    const {resourcesList} = this.state
    if (value !== '') {
      const updatedResources = resourcesList.filter(
        eachResource => eachResource.tag === value,
      )

      console.log(updatedResources)
      console.log(id)
      return updatedResources
    }
    return resourcesList
  }

  renderResources() {
    const {activeTab} = this.state
    const filteredResources = this.getResources(activeTab)
    return (
      <div>
        <ResourcesContainer>
          {filteredResources.map(eachItem => (
            <CardItem key={eachItem.id} resourcesDetails={eachItem} />
          ))}
        </ResourcesContainer>
      </div>
    )
  }

  render() {
    const {activeTab, searchInput} = this.state
    return (
      <Container>
        <Header />
        <TabsContainer>
          {tabsList.map(eachTab => (
            <TabItem
              key={eachTab.tabId}
              tabDetails={eachTab}
              activeTab={activeTab}
              changingActiveTab={this.changingActiveTab}
            />
          ))}
        </TabsContainer>
        <SearchContainer>
          <SearchInput>
            <BiSearch />
            <Input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              onKeyDown={this.onEnterSearchInput}
            />
          </SearchInput>
        </SearchContainer>
        <div>{this.renderResources()}</div>
      </Container>
    )
  }
}

export default Home
