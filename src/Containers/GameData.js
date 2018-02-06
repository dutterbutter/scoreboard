import React from 'react';
import GameTable from '../Components/Games/GameTable';
import ScoreCard from '../Components/Games/ScoreCard';
import NoGames from '../Components/Games/NoGames';
import GameDataCase from './GameDataCase';
import Loading from '../Components/Details/Loading';
import ScoreCardCase from '../Components/Cases/ScoreCardCase';
import FutureSchedule from '../Components/Games/FutureSchedule'

const gameData = (props) => {

    let objectGame = props.gameData.game;
    let game;

    //Display Loading Message while data is retrieved from API and server
    if (props.gameData.game === undefined && Object.keys(props.gameData).length < 1) {
        return <Loading />
    }

    //IF no games were played on a given day renders a friendly "No Games Today Message"
    if (props.gameData.game === undefined && Object.keys(props.gameData).length > 2) {
        return <NoGames />
    }
    if (props.gameData.length === 0) {
        return <Loading />
    }

    //dataCleaner function takes an Object from the below IF statement and makes it an Array
    //Then passes it to a component set up to map the new Array data structure accordingly
    //Should just iterate over Object rather than transform it to an Array 
    function dataCleaner() {
        return Array.from(arguments);
    }
    if (Object.keys(props.gameData.game).length > 20) {
        game = dataCleaner(objectGame)
        return <GameDataCase game={game} detailHandler={props.detailHandler} favTeam ={props.favTeam} />
    }

    //IF user selects a date for the upcoming MLB 2018 Season
    //it will display who will be playing on that given day
    if (props.gameData.game[0].status.status === "Preview") {
        return <FutureSchedule gameData = {props.gameData.game} />
    }


    //LINES 38 - 44 TAKES THE ARRAY, FINDS BLUE JAYS AND SPLICES IT TO THE FRONT OF THE ARRAY
    let favTeamFound = props.gameData.game.findIndex(team => {
        return team.home_team_name.toLowerCase() === props.favTeam.toLowerCase()  || team.away_team_name.toLowerCase()  === props.favTeam.toLowerCase() ;
    });
  
    if(favTeamFound !== -1) {
        props.gameData.game.splice(0,0,props.gameData.game.splice(favTeamFound,1)[0]);
    }


    //MAPS through the game array to render info on UI cards
    const glanceGames = props.gameData.game.map(game => {

        return <GameTable
            key={game.id}
            home_team_name={game.home_name_abbrev}
            away_team_name={game.away_name_abbrev}
            home_score={game}
            away_score={game}
            status={game.status.status}
        />
    })

    const scoreCard = props.gameData.game.map(game => {
        return <ScoreCard key={game.id}
            id={game.id}
            home_team_city={game.home_team_city}
            home_team={game.home_team_name}
            away_team_city={game.away_team_city}
            away_team={game.away_team_name}
            status={game.status.status}
            home_score={game}
            away_score={game}
            innings={game}
            run={game}
            homer={game}
            error={game}
            home_win={game.home_win}
            home_loss={game.home_loss}
            away_win={game.away_win}
            away_loss={game.away_loss}
            losing_pitcher={game.losing_pitcher}
            winning_pitcher={game.winning_pitcher}
            links={game.links}
            media={game.media}
            venue={game.venue}
            game_data_directory={game.game_data_directory}
            detailHandler={props.detailHandler}
        />
    })

    return (
        <div>
            <div className="container">
                <div>
                    <div className="row">
                        <div className="left-align">Games At a Glance </div>
                    
                        {glanceGames}
                    </div>
                </div>
                {scoreCard}
            </div>
        </div>
    );
}


export default gameData;
