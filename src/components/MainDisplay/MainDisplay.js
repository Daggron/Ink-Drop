import React from 'react';

import { SideNav } from './../SideNav/SideNav';

import { SectionContainer } from './../SectionContainer/SectionContainer';

import './mainDisplay.css';

export const MainDisplay = ({ 
    handleSectionClick,
    selectedHeading, 
    selectedQuote,
    selectedSection,
    about,
    skills,
    projects }) => {
    return (
        <section >

        <div className="mainDisplay-container">
            <div className="sidenav-container">
                <SideNav
                    handleSectionClick={handleSectionClick}
                />
            </div>
            <div className="main-section-container">
                <SectionContainer
                    selectedSection={selectedSection}
					selectedHeading={selectedHeading}
					selectedQuote={selectedQuote}
					about={about}
					skills={skills}
					projects={projects} />
            </div>
        </div>
         
        </section>
    );
};