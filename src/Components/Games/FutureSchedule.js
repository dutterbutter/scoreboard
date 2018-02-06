import React from 'react'
import FutureGames from './FutureGames';

//Should try not to use two components for this
const futureSchedule = (props) => {

    const futureGames = props.gameData.map(game => {
        return <FutureGames
            home_team = {game.home_team_name}
            away_team = {game.away_team_name}
        />
    })

    return (
        <div className="container">
                {futureGames}
            </div>
    )
}

export default futureSchedule;