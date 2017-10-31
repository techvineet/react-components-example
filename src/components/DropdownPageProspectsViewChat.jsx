import React, { Component } from "react";
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

export default class DropdownPageProspectsViewChat extends Component {

  render() {
    return (
      <Dropdown>
          <DropdownTrigger><i className="i-dropdown-menu-option test"></i></DropdownTrigger>
          <DropdownContent>
              <div className="wrap-content">
                <ul>
                    <li>
                        <a href="/profile"><i className="i-message"></i>Chat</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-printer"></i>Print</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-archive"></i>Archive</a>
                    </li>
                </ul>
              </div>
          </DropdownContent>
      </Dropdown>
    )
  }
}
