import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class About extends Component {
    state = {  }
    render() { 
        return ( 
       
         
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Arnold Kim</h2>
                    <img src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/7-512.png" alt="avatar" style={{height: '250px'}}/>
                    <p style={{width: '100%', margin: 'auto', paddingTop: '1rem'}}>
                        Hello! Welcome to my portfolio page! My name is Arnold Kim. I got into web development about a year ago, and fell in love with the front end side of development. 
                        I think the concept of creating and building websites from just a few lines of code is such a wonderful concept. The world of web development is vast, and I am eager to learn more and hone my skills. My dream is to continue to learn more and create beautiful websites that would be able to amaze anyone.
                        Feel free to contact me!</p>
                </Cell>

                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />

                    <div className="contact-list">
                    <List>   
                        <ListItem>
                            <ListItemContent style={{fontSize: '16px', fontFamily: 'Anton'}}><i className="fa fa-envelope" aria-hidden="true" /> arnoldbkim@gmail.com </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}><i className="fa fa-phone-square" aria-hidden="true" />  (661) 753-7877</ListItemContent>
                        </ListItem>
                     
                    </List>
                    </div>
                
                </Cell>
            </Grid>
        
            
        );
    }
}
 
export default About;