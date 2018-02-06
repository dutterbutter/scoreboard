import React from 'react'
import Venue from './Venue'
import './ScoreCard.css';
import BoxscoreTrigger from './BoxscoreTrigger';
import Media from './Media';

//Need to dynamically determine number of TR for each table for colspan
//Need to work on <Media component

const bottomCard = (props) => {

    // let rowCount = document.getElementById("mainTable").rows.length
    // console.log(rowCount);
    { props.status ? props.status : 'Cancelled'}
    return (
        <tbody>
            <tr>
                <td colSpan='13'>
                    <Venue
                        venue={props.venue}
                        losing_pitcher_last = {props.losing_pitcher_last ? props.losing_pitcher_last : 'N/A'}
                        losing_pitcher_era = {props.losing_pitcher_era ? props.losing_pitcher_era : 'N/A'}
                        winning_pitcher_last = {props.winning_pitcher_last ? props.winning_pitcher_last : 'N/A'}
                        winning_pitcher_era = {props.winning_pitcher_era ? props.winning_pitcher_era : 'N/A'} />
                </td>
            </tr>
            <tr>
                <td className="boxscore" colSpan="6">
                    <BoxscoreTrigger
                        game_data_directory={props.game_data_directory}
                        detailHandler={props.detailHandler} />
                </td>
                <td className="boxscore" colSpan="7">
                    <Media
                        links = {props.links}
                        media = {props.media} />
                </td>
            </tr>
        </tbody>
    )
}

export default bottomCard;