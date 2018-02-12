import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import GameData from './GameData';
import Details from '../Components/Details/Details'
import DayPicker from '../Components/DayPicker';
import FavTeamInput from '../Components/Games/FavTeamInput';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            gameData: [],
            favoriteTeam: "Blue Jays",
            detailsData: [],
            isEmpty: false
        }
        
        this.dateParserHandler = this.dateParserHandler.bind(this);
    }

    //Set to Last Game of Reg Season
    componentDidMount() {
        axios.get('http://localhost:8080/')
            .then(result => {
                this.setState({
                    gameData: result.data.games
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    //Slices out Month,Day,Year for gameDayHandler and calls it
    dateParserHandler = (selectedDate) => {

        let dayDigit = JSON.stringify(selectedDate).slice(17, 19)
        let month = JSON.stringify(selectedDate).slice(14, 16)
        let year = JSON.stringify(selectedDate).slice(9, 13)

        this.gameDayHandler(dayDigit, month, year)
    }

    //Handles retrieving data for selected day
    //Sets data in state
    gameDayHandler = (day, month, year) => {
        axios.post('http://localhost:8080/day', { day, month, year })
            .then(result => {
                this.setState({
                    gameData: result.data.games
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    //Handles retrieving data for BOXSCORE of selected GAME
    //Different ENDPOINT 
    detailHandler = (game_data_directory) => {
        axios.post("http://localhost:8080/game-details", { game_data_directory })
            .then(result => {
                this.setState({
                    detailsData: result.data.boxscore
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    favoriteTeamHandler = (team) => {
        this.setState({
            favoriteTeam: team
        })
    }

    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <h1>Scoreboard App</h1>

                    <div className="container daypicker left-align">
                        <div className="daypicker"> <DayPicker
                            dateParserHandler={this.dateParserHandler} />
                        </div>

                        <div className="favoriteTeam">
                            <FavTeamInput
                                favoriteTeamHandler={this.favoriteTeamHandler} />
                            <div className="favText">Current Favorite Team: {this.state.favoriteTeam}</div>
                        </div>
                    </div>

                    <div className="container left-align">
                        <Link to="/"><button>Back</button></Link>
                    </div>

                    <Route path="/" exact render={({ match }) =>
                        <GameData
                            gameData={this.state.gameData}
                            favTeam={this.state.favoriteTeam}
                            detailHandler={this.detailHandler}
                            dateParserHandler={this.dateParserHandler} />}
                    />

                    <Route path='/game-details' render={({ match }) =>
                        <Details
                            match={match}
                            detailData={this.state.detailsData}
                            innings={this.state.detailsData.linescore} />}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
