import styled from "styled-components";
import wantedLogo from "../wanted-logo.png";
import { up, down, between, only } from "styled-breakpoints";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${down("sm")} {
    display: none;
    width: 100%;
    padding: 15px 20px 0;
  }
`;

const LogoLink = styled.a`
  display: block;

  img {
    width: 100px;
    height: auto;
  }
`;

function Logo() {
  return (
    <LogoWrapper>
      <LogoLink href="/">
        <img src={wantedLogo} alt="wanted_logo" />
      </LogoLink>
    </LogoWrapper>
  );
}

export default Logo;
