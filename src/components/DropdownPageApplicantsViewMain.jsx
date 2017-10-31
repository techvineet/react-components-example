import React, { Component } from "react";
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

export default class DropdownPageProspectsViewViewings extends Component {

  render() {
    return (
      <Dropdown>
          <DropdownTrigger><i className="i-dropdown-menu-option test"></i></DropdownTrigger>
          <DropdownContent>
              <div className="wrap-content">
                <ul>
                    <li>
                        <a href="/profile">Review applications</a>
                    </li>
                    <li>
                        <a href="/profile">Send applications</a>
                    </li>
                    <li>
                        <a href="/profile">Facebook profile</a>
                    </li>
                    <li>
                        <a href="/profile">Call</a>
                    </li>
                    <li>
                        <a href="/profile">Email</a>
                    </li>
                    <li>
                        <a href="/profile">Chat</a>
                    </li>
                    <li>
                        <a href="/profile">Archive</a>
                    </li>
                </ul>
              </div>
          </DropdownContent>
      </Dropdown>
    )
  }
}
