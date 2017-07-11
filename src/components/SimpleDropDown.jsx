import React, { Component } from "react";
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

export default class SimpleDropDown extends Component {

  render() {
    return (
      <Dropdown>
          <DropdownTrigger><i className="i-dropdown-menu-option test"></i></DropdownTrigger>
          <DropdownContent>
              <ul>
                  <li>
                      <a href="/profile"><i className="i-attachment"></i>Attach to rental</a>
                  </li>
                  <li>
                      <a href="/favorites"><i className="i-download"></i>Download</a>
                  </li>
                  <li>
                      <a href="/logout"><i className="i-view-simple"></i>View</a>
                  </li>
                  <li>
                      <a href="/logout"><i className="i-edit"></i>Edit</a>
                  </li>
                  <li>
                      <a href="/logout"><i className="i-printer"></i>Print</a>
                  </li>
                  <li>
                      <a href="/logout"><i className="i-delete"></i>Delete</a>
                  </li>
              </ul>
          </DropdownContent>
      </Dropdown>
    )
  }
}
