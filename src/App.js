import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { robots } from './Robots';

class App extends Component {
    constructor (props) {
        super (props)

        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    // onSearchChange = (event) => {
    //     const newRobots = [...robots]
    //     const filteredArray = newRobots.filter((el) => {
    //         console.log(el.name);
    //         return el.name.toLowerCase().includes(event.target.value.toLowerCase());
    //         });
    //     console.log(filteredArray, "Filter");
    //     console.log(event.target.value, "Event");
    //     // if (filteredArray.length>=1){
    //     if (filteredArray){
    //       this.setState({
    //         robots: filteredArray
    //       })
    //     } else {
    //       // this.setState({
    //        return this.state.robots
    //       // })
    //     }
    //   }

    onSearchChange = (event) => {
        this.setState({
           searchField: event.target.value, 
        });
        
        const newRobots = [...robots]
        const filteredArray = robots.filter(robot => {
            return robot.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        console.log(filteredArray, 'filter');
        console.log(event.target.value, 'Agbor');
        if(filteredArray) {
          this.setState({
            robots: filteredArray,
          });
        }
    }


    render() {
        
        return (
            <div>
                <Grid container justify='center'>
                    <Typography variant='h4'>RoboFriends</Typography>
                </Grid>
                <Grid container justify="center">
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={this.state.robots} />
                </Grid>
            </div>
        );
    }
}

export default App;