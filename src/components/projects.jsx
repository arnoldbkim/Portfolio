import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


class Project extends Component {
    constructor(props){
    super(props);
    this.state = {activeTab: 0};
    }
   toggleCategories() {
       
    if(this.state.activeTab === 0) {

        return(
        <div className='projects-grid'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}></CardTitle>
        <CardText>
            React Project Portfolio
         </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>
        )
    }
    else if(this.state.activeTab === 1){

        return(
           <div className='row'>
            <div className='projects-grid'> 
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Psychic Game
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/Psychic-Game">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card> 
        </div>

        

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Crystal Game
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/Crystals-Collector">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Gif
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/gif">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>
     
        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Trivia Game
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/Trivia-Game">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Tourist Guide
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/FirstGroupProject">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Train
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/Train">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Friend Finder
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/friendfinder">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Tourist with Materialize
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/project2">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Task Manager
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/kevinmehta137/pro-mgmt2">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Clicking Game
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/clickygame">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Node
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/liri">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Search engine
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/bamazon">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        <div className='row'>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ih0.redbubble.net/image.558639176.4210/flat,550x550,075,f.u4.jpg) center / cover'}}></CardTitle>
        <CardText>
            Burger
         </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/news-scraper">Github</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>

        


        </div>





        )
    }
    else{
        return(
            <div className='projects-grid'>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://codecrew.co/wp-content/uploads/2014/05/html-css-logo.png) center / cover'}}></CardTitle>
            <CardText>
            Bookies Website
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/arnoldbkim/bookies">Github</a></Button>
                <Button colored><a href="bookiesbakery.com">Link</a></Button>
               
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
            </div>
        )
    }
    }  
    

       
   
    render() { 
        return ( 
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Javascript</Tab>
                <Tab>HTML/CSS</Tab>
                
            </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()} </div>
                        </Cell>
                    </Grid>
           
        </div> 
        );
    }
}
 
export default Project;