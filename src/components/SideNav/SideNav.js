import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars0.githubusercontent.com/u/50081224?s=400&u=2e305f90567612b13673a2406c2feeafd48381da&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Abhay Rana</h2>
            <p className="subtitle">"Life is like a book"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};