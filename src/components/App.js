import React, { Component } from 'react';

import { MainDisplay } from './MainDisplay/MainDisplay';


import { about } from '../constants/About';
import { skills } from '../constants/Skills';
import { projects } from '../constants/Projects';



import './App.css';

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			selectedSection: "",
			selectedHeading: "",
			selectedQuote: "",
			about: null,
			skills: null,
			projects: null,
			
		};
	}

	componentDidMount () {
		this.setState ({ 
			about,
			skills,
			projects,
			selectedHeading: about.heading,
			selectedQuote: about.quote,
			selectedSection: "about" 
		});
	}

	handleSectionClick =  (section) => {
		this.setState({
			selectedSection: section,
			selectedHeading: this.state[section].heading,
			selectedQuote: this.state[section].quote
		})
	}

	render () {
		
		return (
			
           

			<div className="App">

				<MainDisplay
					handleSectionClick={this.handleSectionClick}
					selectedSection={this.state.selectedSection}
					selectedHeading={this.state.selectedHeading}
					selectedQuote={this.state.selectedQuote}
					about={this.state.about}
					skills={this.state.skills}
					projects={this.state.projects}
				/>
				
			</div>
		);
	}
}

export default App;
