import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import SideStyle from "./Sidebar.module.css"



function Sidebar() {

  const [isOpen, setIsOpne] = useState(false);
  const [menuStates, setMenuStates] = useState([false,false,false]);

  const menus = [
    { name: "Main", path: "/" },
    { name: "해시태그별", path: "#", index: 0 },
    { name: "가격별", path: "#", index: 1 },
    { name: "픽스타별", path: "#", index: 2}
  ];

  const toggleSidebar = () => {
    setIsOpne(!isOpen);
  };

  const toggleMenu = (index) => {
    const newMenuStates = [...menuStates];
    newMenuStates[index] = !newMenuStates[index];
    setMenuStates(newMenuStates);
  };

  return (
    <div className={isOpen ? `${SideStyle.sideBox} ${SideStyle.open}` : SideStyle.sideBox}>
    <div className={SideStyle.sideName}>
      <button onClick={toggleSidebar}>Toggle</button> {/* 전체 토글 버튼 */}
      {menus.map((menu, index) => {
        return (
          <div key={index}>
            {menu.name === "Main" ? ( // Main 메뉴는 토글하지 않음
              <NavLink
                exact
                style={{color: "white", textDecoration: "none"}}
                to={menu.path}
              >
                <SidebarItem menu={menu} />
              </NavLink>
            ) : (
              <div>
                <button onClick={() => toggleMenu(menu.index)}>{menu.name}</button> {/* 각 메뉴의 토글 버튼 */}
                {menuStates[menu.index] && ( // 토글 상태에 따라 메뉴 항목 렌더링
                  <NavLink
                    exact
                    style={{color: "white", textDecoration: "none"}}
                    to={menu.path}
                  >
                    <SidebarItem menu={menu} />
                  </NavLink>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
  );
}

export default Sidebar;