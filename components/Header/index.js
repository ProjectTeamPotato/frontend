import { HeaderWrapper, StyledLink } from './styled';

const Header = () => {
    return (
        <HeaderWrapper>
            <StyledLink href="/login">
                로그인
            </StyledLink>
            <StyledLink href="/signUp">
                회원가입
            </StyledLink>
            <StyledLink href="/wishList">
                장바구니
            </StyledLink>
            <StyledLink href="/myPage">
                마이페이지
            </StyledLink>
        </HeaderWrapper>
    )
}

export default Header;
