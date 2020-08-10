import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing'
import Music from './music';
import Photo from './photo';
import Video from './video';
import Engineering from './engineering';
import About from './about';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/music" component={Music} />
        <Route path="/photo" component={Photo} />
        <Route path="/video" component={Video} />
        <Route path="/engineering" component={Engineering} />
        <Route path="/about" component={About} />
    </Switch>
)

export default Main;