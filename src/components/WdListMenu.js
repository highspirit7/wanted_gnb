import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";
import { RiArrowRightSLine } from "react-icons/ri";

const ListMenuWrapper = styled.div.attrs(
  (props) => props.isMenuShown && { className: "show" },
)`
  &.show {
    display: block;
    opacity: 1;
    height: auto;

    ${down("sm")} {
      display: none !important;
    }
  }

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.4);
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: 0.5s;

  .overlay {
    position: relative;
    height: auto;
    max-height: 625px;
    background-color: #fff;
    transition: 0.5s;

    .container {
      margin: 0 auto;
      max-width: 1060px;
      padding: 0;

      ${up("xl")} {
        width: 87.72%;
      }
      ${up("md")} {
        width: 90%;
      }
      ${up("sm")} {
        width: 90%;
      }

      .row {
        margin: 0;
        margin-right: -20px;
      }

      .row::before {
        clear: both;
        content: " ";
        display: table;
      }
    }

    .container::before {
      content: " ";
      display: table;
    }

    &.explore-content {
      height: 200px;
    }
  }
`;

const MenuItem = styled.div`
  float: left;
  width: 20%;
  /* height: 270px; */
  padding: 40px 20px 0 0;
  text-align: left;

  & > a {
    display: block;
  }

  h2 {
    position: relative;
    font-size: 17px;
    color: #333;
    line-height: 20px;
    vertical-align: top;
    padding-right: 20px;
    padding-bottom: 15px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const menuItemList = [
  { path: "/wdlist/508", name: "금융" },
  { path: "/wdlist/522", name: "제조・생산" },
  {
    path: "/wdlist/532",
    name: "물류・무역",
  },
  {
    path: "/wdlist/515",
    name: "의료・제약・바이오",
  },
  { path: "/wdlist/10101", name: "교육" },
  { path: "/wdlist/521", name: "법률・법집행기관" },
  { path: "/wdlist/10057", name: "식・음료" },
  { path: "/wdlist/509", name: "건설・시설" },
  { path: "/wdlist/514", name: "공공・복지" },
];

function WdListMenu({ handleMouseHover, isMenuShown }) {
  return (
    <ListMenuWrapper isMenuShown={isMenuShown}>
      <div
        className="overlay explore-content"
        onMouseLeave={(event) => handleMouseHover(false)}
      >
        <div className="container">
          <div className="row">
            {menuItemList.map((menu) => (
              <MenuItem key={menu.path + menu.name}>
                <a href={menu.path}>
                  <h2>
                    <span>{menu.name}</span>
                    <RiArrowRightSLine size={20} />
                  </h2>
                </a>
              </MenuItem>
            ))}
          </div>
        </div>
      </div>
    </ListMenuWrapper>
  );
}

export default WdListMenu;
