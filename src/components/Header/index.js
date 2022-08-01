import {Link, withRouter} from 'react-router-dom'
import nxtlogo from '../../images/nxtlogo.png'
import avatarImg from '../../images/avatar img.png'
import {
  NavHeader,
  NxtLogo,
  RightSideHeader,
  CustomButton,
  AvatarLogo,
} from './styleComponents'

const Header = props => {
  const logout = () => {
    const {history} = props
    history.replace('/login')
  }
  return (
    <NavHeader className="container">
      <NxtLogo src={nxtlogo} alt="nxtlogo" />
      <RightSideHeader>
        <Link to="add-resources">
          <CustomButton type="button">+ Add</CustomButton>
        </Link>
        <AvatarLogo src={avatarImg} alt="avatar" onClick={logout} />
      </RightSideHeader>
    </NavHeader>
  )
}

export default withRouter(Header)
