import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/8-512.png" alt="avatar" style={{height: '250px'}} />
                    </div>
                    <h2 style={{paddingTop: '2rem', textAlign: 'center'}}>Arnold Kim</h2>
                    <h4 style={{color: 'gray'}}>Front End Developer</h4>
                    <hr />
                </Cell>

                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education 
                        startYear={2018}
                        endYear={2019}
                        schoolName="University of California - Los Angeles"
                        schoolDescription="Completed a Full Stack Web Development course at UCLA"
                    />

                    <Education 
                        startYear={2010}
                        endYear={2014}
                        schoolName="University of Richmond"
                        schoolDescription="Graduated from the University of Richmond with a major in Criminal Justice and Psychology, and with a minor in Sociology and Italian Studies"
                    />

                    <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Experience</h2>
                    <Experience 
                        startYear={2018}
                        endYear={2019}
                        jobName={"Editor, Joanne English"}
                        jobDescription={"Editor for Joanne English children’s novels. Performs various tasks involving web design and editor approval."}
                    />

                     <Experience 
                        startYear={2017}
                        endYear={2019}
                        jobName={"Restaurant Co-Manager, L&L Hawaiian Barbeque"}
                        jobDescription={"Responsible for operations and management of entire restaurant. Overseeing employees and meeting list of demands."}
                    />
                    <Experience 
                        startYear={2015}
                        endYear={2017}
                        jobName={"Community and Youth Development Facilitator, U.S. Peace Corps"}
                        jobDescription={"Coordinate multiple seminars for the purpose of educating underprivileged Filipino college students. Assist students with developing creative writing skills."}
                    />
                     <Experience 
                        startYear={2014}
                        endYear={2015}
                        jobName={"Intensive In-Home Counselor, Wilkerson’s Consultants Inc."}
                        jobDescription={"Work with at-risk youth dealing with emotional instability. Write daily reports on the progress of clients."}
                    />
                    <Experience 
                        startYear={2013}
                        endYear={2014}
                        jobName={"Research Assistant, University of Richmond Department of Psychology"}
                        jobDescription={"Conducting independent research on affectivity and spatial cognition. Present weekly reports and in charge of writing various research papers."}
                    />

                    <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Skills</h2>
                    <Skills 
                        skill="HTML"
                        progress={100}   
                    />
                     <Skills 
                        skill="CSS"
                        progress={100}   
                    />
                     <Skills 
                        skill="Javascript"
                        progress={70}   
                    />
                     <Skills 
                        skill="React"
                        progress={30}   
                    />
                        
                
                </Cell>
                </Grid>
            </div> )
        ;
    }
}
 
export default Resume;