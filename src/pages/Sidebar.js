import React, { Component } from "react";
import {
  Sidebar,
  InputItem,
  DropdownItem,
  Icon,
  Item,
  Logo,
  LogoText,
} from "react-sidebar-ui";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import "react-sidebar-ui/dist/index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

var user = JSON.parse(localStorage.getItem("localstoragedata"));
var image = user.User.profilephoto;
console.log(image);

class Xidebar extends Component {
  render() {
    return (
      <div>
        <Sidebar bgColor='aqua' isCollapsed={false}>
          <Logo image={image} imageName='react logo' />
          <LogoText>Welcome {user.User.username} </LogoText>
          {/* <DropdownItem values={["First", "Second", "Third"]} bgColor={"aqua"}>
          Menu
        </DropdownItem> */}
          <NavLink to='/dashboard/album'>
            <Item bgColor='aqua'>
              <Icon>
                <FontAwesomeIcon icon={faHome} color='orange' />{" "}
              </Icon>
              Home
            </Item>
          </NavLink>
          <Item bgColor='aqua'>
            <Icon>
              <i className='fas fa-info' />
            </Icon>
            About
          </Item>
          <Item bgColor='aqua'>
            <Icon>
              <i className='fas fa-sitemap' />
            </Icon>
            My Website
          </Item>
          <Item bgColor='aqua'>
            <Icon>
              <i className='far fa-address-book' />
            </Icon>
            Contacts
          </Item>
          <Item bgColor='aqua'>
            <Icon>
              <i className='fas fa-rss-square' />
            </Icon>
            Blog
          </Item>
          <InputItem type='text' placeholder={"Search..."} />
        </Sidebar>
      </div>
    );
  }
}
export default Xidebar;
