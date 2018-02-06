import React from 'react';
import GameTable from '../Components/Games/GameTable';
import ScoreCard from '../Components/Games/ScoreCard';

const gameDataCase = (props) => {

    //LINES 6 - 14 TAKES THE ARRAY, FINDS BLUE JAYS AND SPLICES IT TO THE FRONT OF THE ARRAY
    let favTeamFound = props.game.findIndex(team => {
        return team.home_team_name.toLowerCase() === props.favTeam.toLowerCase()  || team.away_team_name.toLowerCase()  === props.favTeam.toLowerCase() ;
    });
  
    if(favTeamFound !== -1) {
        props.game.splice(0,0,props.gameData.game.splice(favTeamFound,1)[0]);
    }

    //MAPS through the game array to render info on UI cards
    const glanceGames = props.game.map(game => {
        return <GameTable
            key={game.id}
            home_team_name={game.home_name_abbrev}
            away_team_name={game.away_name_abbrev}
            home_score={game}
            away_score={game}
            status={game.status.status}
        />
    })

    const scoreCard = props.game.map(game => {
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
            losing_pitcher = {game.losing_pitcher}
            winning_pitcher = {game.winning_pitcher}
            links = {game.links}
            media = {game.media}
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


export default gameDataCase;
