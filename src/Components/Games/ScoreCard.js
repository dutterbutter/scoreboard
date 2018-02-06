import React from 'react'
import './ScoreCard.css';
import BottomCard from './BottomCard';
import ScoreCardCase from '../Cases/ScoreCardCase';

//Should create single component as I do same thing for Linescore and ScoreCard
//PROPS is passed from GameData
//Need to optimize

const ScoreCard = (props) => {

    if (props.status === 'Cancelled' || props.status === 'Postponed') {
        return (
            <ScoreCardCase
                home_team_city={props.home_team_city}
                home_team={props.home_team}
                away_team_city={props.away_team_city}
                away_team={props.away_team}
                status={props.status}
                home_win={props.home_win}
                home_loss={props.home_loss}
                away_win={props.away_win}
                away_loss={props.away_loss}
                losing_pitcher={props.losing_pitcher}
                winning_pitcher={props.winning_pitcher}
                links={props.links}
                media={props.media}
                venue={props.venue} />
        )
    }
    else {

        let homescore = parseInt(props.home_score.linescore.r.home, 10);
        let awayscore = parseInt(props.away_score.linescore.r.away, 10);

        //INNINGS FOR GAME
        const innings_played = props.innings.linescore.inning.map((inning, index) => {
            return <th key={index}>{index + 1}</th>
        })

        //INNING SCORE FOR HOME AND AWAY
        const innings_score_home = props.innings.linescore.inning.map((inning, index) => {
            return <th key={index}>{inning.home}</th>
        })

        const innings_score_away = props.innings.linescore.inning.map((inning, index) => {
            return <th key={index}>{inning.away}</th>
        })


        return (
            <div className="card">
                <table className="bordered" id="mainTable">
                    <thead className="shaded">
                        <tr>
                            <th className="scorestatus"> {props.status} </th>
                            {innings_played}
                            <th className="shaded"> R </th>
                            <th> H</th>
                            <th> E </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={homescore > awayscore ? 'bold' : 'lost'}>{props.home_team} <br />
                                ({props.home_win}-{props.home_loss})</td>
                            {innings_score_home}
                            <th className="shaded">{props.run.linescore.r.home}</th>
                            <th> {props.homer.linescore.h.home}</th>
                            <th> {props.error.linescore.e.home} </th>
                        </tr>
                        <tr>
                            <td className={awayscore > homescore ? 'bold' : 'lost'}>{props.away_team}<br />
                                ({props.away_win}-{props.away_loss})</td>
                            {innings_score_away}
                            <th className="shaded">{props.run.linescore.r.away}</th>
                            <th> {props.homer.linescore.h.away}</th>
                            <th> {props.error.linescore.e.away} </th>
                        </tr>
                    </tbody>

                    <BottomCard
                        venue={props.venue}
                        game_data_directory={props.game_data_directory}
                        detailHandler={props.detailHandler}
                        losing_pitcher_last = {props.losing_pitcher.last ? props.losing_pitcher.last : 'N/A'}
                        losing_pitcher_era = {props.losing_pitcher.era ? props.losing_pitcher.era : 'N/A'}
                        winning_pitcher_last = {props.winning_pitcher.last ? props.winning_pitcher.last : 'N/A'}
                        winning_pitcher_era = {props.winning_pitcher.era ? props.winning_pitcher.era : 'N/A'} 
                        links={props.links}
                        media={props.media}
                    />
                </table>
            </div>
        )
    }
}

export default ScoreCard;