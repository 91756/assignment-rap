import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import * as Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'
import CardItem from '../CardItem'
import nxtlogo from '../../images/nxtlogo.png'
import Header from '../Header'
import TabItem from '../TabItem'
import {
  Container,
  TabsContainer,
  SearchContainer,
  SearchInput,
  Input,
  ResourcesContainer,
  LoadingVewContainer,
} from './styledComponents'

const tabsList = [
  {tabId: 'resources', text: 'Resources'},
  {tabId: 'request', text: 'Request'},
  {tabId: 'users', text: 'Users'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    resourcesList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    activeTab: 'resources',
  }

  componentDidMount() {
    this.getResourcesApi()
  }

  getResourcesApi = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

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
    if (response.ok === true) {
      this.setState({
        resourcesList: resourcesData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
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

  renderLoadingView = () => (
    <LoadingVewContainer>
      <Loader.TailSpin color="#07641f" height={50} width={50} />
    </LoadingVewContainer>
  )

  renderResources = () => {
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

  renderDisplayView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderResources()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
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
        <div>{this.renderDisplayView()}</div>
      </Container>
    )
  }
}

export default Home
