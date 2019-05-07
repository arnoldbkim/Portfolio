import React from 'react';
import Landing from './landingpage';
import {Switch, Route} from 'react-router-dom';
import About from './aboutme';
import Project from './projects';
import Resume from './resume';
import Contact from './contact';


const Main = () => (
<Switch>
    <Route exact path="/home" component={Landing} />
    <Route exact path="/aboutme" component={About} />
    <Route exact path="/projects" component={Project} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
</Switch>
)

export default Main;