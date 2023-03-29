// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDtails, changeActiveTabId, isActive} = props
  const {tabId, displayText} = tabDtails
  const onClickTap = () => {
    changeActiveTabId(tabId)
  }
  const activetabButton = isActive ? 'active-tab' : ''
  return (
    <li className="tab-item-container">
      <button type="button" className={activetabButton} onClick={onClickTap}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
