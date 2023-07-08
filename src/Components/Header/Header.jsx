import Favorites from "./Favorites/Favorites";
import { HeaderBlock, HeaderWrap } from "./Header.styled";

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderWrap>
        <Favorites />
      </HeaderWrap>
    </HeaderBlock>
  );
};

export default Header;
