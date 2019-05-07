import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src="https://pickaface.net/gallery/avatar/callmeking17542a224942442.png" alt="avatar" className="avatar" />

                <div className='banner-text'>
                    <h1>Front End Web Developer</h1>
                    <hr />
                
                <p>HTML | CSS | Bootstrap | Javascript | jQuery | React</p>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/arnoldkim92/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                    </a>

                    <a href="https://github.com/arnoldbkim" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square"  aria-hidden="true" />
                    </a>

                    <a href="https://www.freecodecamp.org/arnoldbkim/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-free-code-camp"  aria-hidden="true" />
                    </a>

                
                    <a href="https://www.facebook.com/kminiwoom/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-facebook-square"  aria-hidden="true" />
                    </a>

                    <a href="https://www.instagram.com/arnoldbkim/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-instagram"  aria-hidden="true" />
                    </a>
                </div>

                </div>
                 </Cell>
            </Grid>
        </div> );
    }
}
 
export default Landing;