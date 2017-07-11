import React, { Component } from "react";
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

export default class SimpleDropDown extends Component {

  render() {
    return (
      <Dropdown>
          <DropdownTrigger>Profile</DropdownTrigger>
          <DropdownContent>
              <img src="avatar.jpg" alt="user" /> Username
              <ul>
                  <li>
                      <a href="/profile">Profile</a>
                  </li>
                  <li>
                      <a href="/favorites">Favorites</a>
                  </li>
                  <li>
                      <a href="/logout">Log Out</a>
                  </li>
              </ul>
          </DropdownContent>
      </Dropdown>
    )
  }
}
