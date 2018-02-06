import React from 'react'
import './GameTable.css';
import GameTableCase from '../Cases/GameTableCase';

const GameTable = (props) => {

    //Handles instances where a game has been cancelled or postponed
    //Need to optimize this better, using if/else statement RN
    
    if (props.status === 'Cancelled' || props.status === 'Postponed') {  
        return <GameTableCase home_team_name= {props.home_team_name} away_team_name= {props.away_team_name} />
    } else {
        
        let homescore = parseInt(props.home_score.linescore.r.home, 10);
        let awayscore = parseInt(props.away_score.linescore.r.away, 10);

        return (
            <div className="card col s1 game-scores hide-on-med-and-down">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th className="game-status">{props.status}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={homescore > awayscore ? 'bold' : 'lost'} >{props.home_team_name}</td>
                            <td>{props.home_score.linescore.r.home}</td>
                        </tr>
                        <tr>
                            <td className={awayscore > homescore ? 'bold' : 'lost'} >{props.away_team_name}</td>
                            <td>{props.away_score.linescore.r.away}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GameTable;