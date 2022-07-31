import {TabItemContainer} from './stylesComponents'

const TabItem = props => {
  const {tabDetails, activeTab, changingActiveTab} = props
  const {tabId, text} = tabDetails
  const changeActiveTab = () => {
    changingActiveTab(tabId)
  }

  return (
    <TabItemContainer
      color={tabId === activeTab ? '#ffffff' : '#171f46'}
      bgColor={tabId === activeTab ? '#0b69ff' : 'rgba(215, 223, 233, 0.24)'}
      onClick={changeActiveTab}
    >
      {text}
    </TabItemContainer>
  )
}
export default TabItem
