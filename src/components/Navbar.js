import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import sideStyle from './Navbar.module.css';

    const Navbar = () => {
        return (
            <div className={sideStyle.sidebox}>
              <CDBSidebar className={sideStyle.sidebar}>
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                  <NavLink to="/" className={sideStyle.sidebarTitle}>
                    PixStar Guide
                  </NavLink>
                </CDBSidebarHeader>
        
                <CDBSidebarContent className="sidebar-content">
                  <CDBSidebarMenu>
                    <NavLink exact to="#" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon='hashtag'>해시태그별</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="#" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon='book'>가격별</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="#" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon='star'>픽스타별</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="#" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="chart-line">기타</CDBSidebarMenuItem>
                    </NavLink>
                  </CDBSidebarMenu>
                </CDBSidebarContent>
        
                <CDBSidebarFooter className={sideStyle.sidebarFooter}>
                  <div className={sideStyle.sidebarFooterText}>
                    @주식회사 PixStar
                  </div>
                </CDBSidebarFooter>
              </CDBSidebar>
            </div>
          );
        };
    
        export default Navbar;