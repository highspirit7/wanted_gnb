import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

// Default Breakpoints from styled-breakpoints
// {
//   xs: '0px',
//   sm: '576px',
//   md: '768px',
//   lg: '992px',
//   xl: '1200px',
// }

const StyledGnb = styled.div`
  position: fixed;
  padding-right: initial;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
`;

const NavWrapper = styled.div`
  position: relative;
  max-width: 1060px;
  height: 50px;

  ${up("xl")} {
    margin: 0 auto;
    height: 50px;
    width: 87.72%;
  }

  ${only("lg")} {
    margin: 0 auto;
    height: 50px;
    width: 90%;
  }

  ${only("md")} {
    margin: 0 auto;
    height: 50px;
    width: 90%;
  }

  ${down("sm")} {
    height: 57px;
    padding-top: 4px;
  }
`;

const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  /* flex-wrap: wrap; */
`;

function Gnb({ children }) {
  return (
    <StyledGnb>
      <NavWrapper>
        <StyledNav>{children}</StyledNav>
      </NavWrapper>
    </StyledGnb>
  );
}

export default Gnb;
