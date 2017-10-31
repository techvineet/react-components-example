import React, { Component } from "react";
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

export default class FilterDropDown extends Component {

  render() {
    return (
      <Dropdown>
          <DropdownTrigger><i className="i-filter"></i></DropdownTrigger>
          <DropdownContent>
            <div className="wrap-content">

              <h4 className="filter-name">Filter goes here</h4>
              <div id="m-select-1" className="m-select mb-20">
                <a href="#" className="m-select-btn"><span  id="m-select-1-name">Choose something</span><i className="i-arrow-down"></i></a>
                <input type="hidden" placeholder="choose" id="m-select-1-value" value="" />
                <div className="m-select-dropdown">
                  <ul className="list-options">
                    <li><a href="#" data-parent="m-select-1" data-value="1" data-name="Option 1">An option:  1</a></li>
                    <li><a href="#" data-parent="m-select-1" data-value="2" data-name="Option 2">An option:  2</a></li>
                    <li><a href="#" data-parent="m-select-1" data-value="3" data-name="Option 3">An option:  3</a></li>
                    <li><a href="#" data-parent="m-select-1" data-value="4" data-name="Option 4">An option:  4</a></li>
                    <li><a href="#" data-parent="m-select-1" data-value="5" data-name="Option 5">An option:  5</a></li>
                  </ul>
                </div>
              </div>

              <h4 className="filter-name">another filter goes here</h4>
              <div id="m-select-2" className="m-select mb-20">
                <a href="#" className="m-select-btn"><span  id="m-select-2-name">Choose something</span><i className="i-arrow-down"></i></a>
                <input type="hidden" placeholder="choose" id="m-select-2-value" value="" />
                <div className="m-select-dropdown">
                  <ul className="list-options">
                    <li><a href="#" data-parent="m-select-2" data-value="1" data-name="Option 1">An option:  1</a></li>
                    <li><a href="#" data-parent="m-select-2" data-value="2" data-name="Option 2">An option:  2</a></li>
                    <li><a href="#" data-parent="m-select-2" data-value="3" data-name="Option 3">An option:  3</a></li>
                    <li><a href="#" data-parent="m-select-2" data-value="4" data-name="Option 4">An option:  4</a></li>
                    <li><a href="#" data-parent="m-select-2" data-value="5" data-name="Option 5">An option:  5</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </DropdownContent>
      </Dropdown>
    )
  }
}
