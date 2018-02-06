import React from 'react'
import '../Games/GameTable.css';

//RENDERED FROM 
const GameTableCase = (props) => {

        return (
            <div className="card col s1 game-scores hide-on-med-and-down">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th className="game-status">{ props.status ? props.status : 'Cancelled'} </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='lost'>{props.home_team_name}</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <td className='lost'>{props.away_team_name}</td>
                            <td>NA</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}

export default GameTableCase;