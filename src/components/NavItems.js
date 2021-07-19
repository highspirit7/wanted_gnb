import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

const StyledUl = styled.ul`
  text-align: center;
  margin: 0;

  ${only("md")} {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
  }

  li {
    display: inline-block;

    a {
      position: relative;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      display: inline-block;
      vertical-align: middle;
      padding: 15px;

      ${only("md")} {
        padding-right: 0 !important;
        padding-left: 0 !important;
        font-size: 13px;
      }

      ${down("sm")} {
        padding: 14px 13px 19px;
      }

      &::after {
        height: 100%;
        content: "";
      }
    }
  }

  .selectedNav {
    box-shadow: inset 0 -2px #258bf7;
  }

  .xsOnly {
    ${only("lg")} {
      display: none;
    }

    ${only("md")} {
      display: none;
    }

    ${up("xl")} {
      display: none;
    }
  }

  .xsHomeButton {
    a {
      padding: 14px 13px 19px 20px;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .smMoreVisible {
    ${down("sm")} {
      display: none;
    }
  }
`;

const navItemList = [
  { path: "/wdlist", name: "탐색" },
  { path: "/events", name: "커리어 성장" },
  {
    path: "/salary",
    name: "직군별 연봉",
  },
  {
    path: "/cv",
    name: "이력서",
  },
  { path: "/matchup/intro?from_gnb=true", name: "매치업" },
  { path: "https://www.wanted.co.kr/gigs/experts", name: "프리랜서" },
  { path: "/aiscore/resume", name: "Ai 합격예측" },
];

function NavItems() {
  console.log(window.location.pathname);

  const urlPathname = window.location.pathname.substring(1);

  return (
    <StyledUl>
      <li className={`xsHomeButton xsOnly ${!urlPathname && "selectedNav"}`}>
        <a href="/">홈</a>
      </li>
      {navItemList.map((item, index) =>
        index > 1 ? (
          <li
            className={`smMoreVisible ${
              urlPathname && item.path.includes(urlPathname) && "selectedNav"
            }`}
            key={item.path + item.name}
          >
            <a href={item.path}>{item.name}</a>
          </li>
        ) : (
          <li
            className={`${
              urlPathname && item.path.includes(urlPathname) && "selectedNav"
            }`}
            key={item.path + item.name}
          >
            <a href={item.path}>{item.name}</a>
          </li>
        ),
      )}
    </StyledUl>
  );
}

export default NavItems;
