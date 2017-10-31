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
                        <a href="/profile"><i className="i-confirm"></i>Confirm</a>
                    </li>
                    <li>
                        <a href="/favorites"><i className="i-reschedule"></i>Reschedule</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-deny"></i>Deny</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-assign-team-member"></i>Assign Team Member</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-directions"></i>Directions</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-complete"></i>Complete</a>
                    </li>
                    <li>
                        <a href="/logout"><i className="i-view-simple"></i>View</a>
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
