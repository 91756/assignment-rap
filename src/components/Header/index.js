import {Link} from 'react-router-dom'
import nxtlogo from '../../images/nxtlogo.png'
import avatarImg from '../../images/avatar img.png'
import {
  NavHeader,
  NxtLogo,
  RightSideHeader,
  CustomButton,
  AvatarLogo,
} from './styleComponents'

const Header = () => (
  <NavHeader className="container">
    <NxtLogo src={nxtlogo} alt="nxtlogo" />
    <RightSideHeader>
      <Link to="add-resources">
        <CustomButton type="button">+ Add</CustomButton>
      </Link>
      <AvatarLogo src={avatarImg} alt="avatar" />
    </RightSideHeader>
  </NavHeader>
)

export default Header
