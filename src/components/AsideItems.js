import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";
import { GrSearch } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const StyledAside = styled.aside`
  height: 100%;
  padding: 10px 0;

  & > ul {
    height: 100%;
    margin: 0;

    li {
      position: relative;
      display: inline-block;
      height: 100%;
      vertical-align: middle;

      a {
        display: inline-block;
        vertical-align: bottom;
        line-height: 32px;
      }

      & > * {
        height: 100%;
        padding: 0 10px;
        font-size: 14px;
        color: #333;
        font-weight: 600;
        line-height: 1;
      }
      .notiButton {
        position: relative;
        margin-right: 10px;
        margin-top: 2px;
      }
    }

    .leftDivision {
      display: inline-flex;
    }

    .leftDivision::before {
      display: block;
      content: "";
      width: 1px;
      height: 10px;
      background-color: #e1e2e3;
      margin: auto 10px;
    }

    .dashboardButton {
      font-size: 13px;
      color: #666;
      line-height: 30px;
      height: 30px;
      border: 1px solid #e1e2e3;
      border-radius: 15px;
      padding: 0 10px;
      margin: 0 0 0 15px;
      font-weight: 400;
    }

    .searchButton {
      position: relative;
      margin-top: 2px;
    }

    .menuButton {
      margin-right: 10px;
      padding-left: 10px;

      ${up("md")} {
        display: none !important;
      }
    }

    .profileBox {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      margin-right: 5px;

      .profileButton {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        vertical-align: top;
        padding: 0;
        margin-right: 11px;

        .avatarBorder {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          border-radius: 50%;
          border: 1px solid #e1e3e3;
          justify-content: center;
          overflow: hidden;

          & > div {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-position: 50%;
            background-repeat: no-repeat;
          }

          .avatarImage {
            background-image: url("https://i.pravatar.cc/80");
          }
        }
      }
    }

    .smMoreVisible {
      ${down("sm")} {
        display: none;
      }
    }
  }
`;

function AsideItems() {
  return (
    <StyledAside>
      <ul>
        <li>
          <button className="searchButton">
            <GrSearch size="18" />
          </button>
        </li>
        <li>
          <button className="notiButton">
            <IoNotificationsOutline size={18} />
          </button>
        </li>
        <li className="profileBox smMoreVisible">
          <button className="profileButton">
            <div className="avatarBorder">
              <div className="avatarImage"></div>
            </div>
          </button>
        </li>
        <li className="smMoreVisible leftDivision">
          <a href="/dashboard" className="dashboardButton">
            기업 서비스
          </a>
        </li>
        <li>
          <button className="menuButton">
            <FiMenu size={18} />
          </button>
        </li>
      </ul>
      {/* 모바일 드로어 컴포넌트 들어갈 위치 */}
    </StyledAside>
  );
}

export default AsideItems;
