import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavContainer=styled.div``
const InnerNav = styled.div`display:flex; justify-content:space-between; align-items:center;`
const Left = styled.div`display:flex; gap:1em; align-items:center;`
const SearchContainer = styled.div`border:2px solid black; border-radius:5px; width:fit-content; height:fit-content; display:flex; align-items:center; padding:1 0.5em;`
const SearchInput = styled.input`padding:.5em 2em; border:none; outline:none;`
const Right = styled.div``
const NavUl = styled.ul`display:flex; list-style-type:none; gap:.5em; `
const NavList = styled.li`cursor:pointer;`
const Logo = styled.h1``
const Container = styled.div` width:80%; margin: 0 auto;`

const Nav = () => {
    return (<>
        <NavContainer>
            <Container>
                <InnerNav>
                    <Left>
                        <Logo>MAGOSO ENT.</Logo>
                        <SearchContainer>
                            <SearchIcon />
                            <SearchInput type="text" placeholder="search" />
                        </SearchContainer>
                    </Left>
                    <Right>
                        <NavUl>
                            <NavList>Shop</NavList>
                            <NavList>About</NavList>
                            <NavList>Login/Register</NavList>
                            <NavList><Badge badgeContent={1} color="primary">
                                <ShoppingCartIcon />                            </Badge>
                            </NavList>
                        </NavUl>
                    </Right>
                </InnerNav>
            </Container>
        </NavContainer>
    </>
    )
}

export default Nav


