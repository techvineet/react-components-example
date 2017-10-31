import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


	//!!!Only for testing. do not copy this
	//################################################
	//--m-select
	//################################################
	(function () {

		var classname_m_select_btn = document.getElementsByClassName("m-select-btn");
		var dropdown_links = document.querySelectorAll("div.m-select-dropdown a");


		var openDropdown = function(evt) {
				evt.preventDefault();
		    this.classList.toggle('open-dropdown');
		};
		var selectOption = function(evt) {
				evt.preventDefault();
				var data_name = this.getAttribute("data-name");
				var data_value = this.getAttribute("data-value");
				var data_parent = this.getAttribute("data-parent");
				var inp = document.querySelector('#' + data_parent + '-value');
				var btn = document.querySelector('#' + data_parent + '-name');
				var parent_link = document.querySelector('#' + data_parent + " .m-select-btn");

				inp.value = data_value;
				btn.innerHTML = data_name;
				parent_link.classList.remove('open-dropdown');
		    // this.classList.toggle('open-dropdown');
		};

		for (var i = 0; i < classname_m_select_btn.length; i++) {
			console.log('find one');
		    classname_m_select_btn[i].addEventListener('click', openDropdown, false);
		}

		for (var i = 0; i < dropdown_links.length; i++) {
			console.log('find a link');
		    dropdown_links[i].addEventListener('click', selectOption, false);
		}
		
	})();
