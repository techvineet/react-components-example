import React, { Component } from 'react';
import Modal from 'react-modal';

import ExampleTabs from './components/Tabs.jsx'
import DemoCarousel from './components/DemoCarousel.jsx'
import SimpleDropDown from './components/SimpleDropDown.jsx'

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
  	super(props);

    this.state = {
      modalIsOpen: false // for react-modal
    };

    // Bindings for react-modal
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <m-hide>
          <h3>Tab Component</h3>
          <p>To use custom class names please refer to the documentation <a href="https://github.com/reactjs/react-tabs">here</a></p>
          <ExampleTabs />
          <hr />
        </m-hide>

        <m-component>
          <h3>Dropdown</h3>
          <SimpleDropDown />
        </m-component>

        <m-hide>
        <h3>Modal Dialog Box component</h3>
          <button onClick={this.openModal}>Open Modal</button>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </m-hide>
        <m-component>
          <h3>Image Carousel</h3>
          <DemoCarousel />
        </m-component>

      </div>
    );
  }
}

export default App;
