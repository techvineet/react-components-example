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
                        <a href="/profile"><i className="i-complete"></i>Aprove</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-deny"></i>Deny</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-call"></i>Call</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-email"></i>Email</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-message"></i>Chat</a>
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
