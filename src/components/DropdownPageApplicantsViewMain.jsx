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
                        <a href="/profile"><i className="i-file-information"></i>Review applications</a>
                    </li>
                    <li>
                        <a href="/profile"><i className="i-file-text-data"></i>Send applications</a>
                    </li>
                    <li>
                        <a href="/profile"><i className="i-s-facebook"></i>Facebook profile</a>
                    </li>
                    <li>
                        <a href="/profile"><i className="i-call"></i>Call</a>
                    </li>
                    <li>
                        <a href="/profile"><i className="i-email"></i>Email</a>
                    </li>
                    <li>
                        <a href="/profile"><i className="i-message"></i>Chat</a>
                    </li>
                    <li>
                        <a href="/profile"><i className="i-archive"></i>Archive</a>
                    </li>
                </ul>
              </div>
          </DropdownContent>
      </Dropdown>
    )
  }
}
