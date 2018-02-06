import React from 'react'
import '../Games/ScoreCard.css';
import BottomCard from '../Games/BottomCard';

//Should create single component as I do same thing for Linescore and ScoreCard
//PROPS is passed from GameData
//Need to optimize

const ScoreCardCase = (props) => {

    return (
        <div className="card">
            <table className="bordered" id="mainTable">
                <thead className="shaded">
                    <tr>
                        <th className="scorestatus"> {props.status} </th>
                        <th> 1</th>
                        <th> 2 </th>
                        <th> 3 </th>
                        <th> 4 </th>
                        <th> 5 </th>
                        <th> 6</th>
                        <th> 7 </th>
                        <th> 8 </th>
                        <th> 9 </th>
                        <th className="shaded"> R </th>
                        <th> H</th>
                        <th> E </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='lost'>{props.home_team} <br />
                            ({props.home_win}-{props.home_loss})</td>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                    </tr>
                    <tr>
                        <td className='lost'>{props.away_team}<br />
                            ({props.away_win}-{props.away_loss})</td>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                    </tr>
                </tbody>

                <BottomCard
                    venue={props.venue}
                    game_data_directory={props.game_data_directory}
                    detailHandler={props.detailHandler}
                    losing_pitcher={props.losing_pitcher}
                    winning_pitcher={props.winning_pitcher}
                    links={props.links}
                    media={props.media}
                />
            </table>
        </div>
    )
}

export default ScoreCardCase;