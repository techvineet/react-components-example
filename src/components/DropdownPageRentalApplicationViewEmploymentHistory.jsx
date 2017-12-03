import React, { Component } from "react";
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

export default class DropdownPageRentalApplicationViewEmploymentHistory extends Component {

  render() {
    return (
      <Dropdown>
          <DropdownTrigger><i className="i-dropdown-menu-option test"></i></DropdownTrigger>
          <DropdownContent>
              <div className="wrap-content">
                <ul>
                    <li>
                        <a href="/profile"><i className=" i-profile-round"></i>Verify employment</a>
                    </li>
                </ul>
              </div>
          </DropdownContent>
      </Dropdown>
    )
  }
}
