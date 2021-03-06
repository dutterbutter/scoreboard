import React from 'react';

const favTeamInput = (props) => {

    const teamArray = ['Blue Jays', 'Orioles', 'Diamondbacks', 'Red Sox', 'Braves', 'Cubs', 'Indians', 'Reds', 'Rockies', 'Tigers',
        'Astros', 'Dodgers', 'Royals', 'Marlins', 'Angels', 'Mets', 'Yankees', 'Phillies', 'Pirates', 'Brewers', 'Twins',
        'Athletics', 'Padres', 'Mariners', 'Rays', 'Cardinals', 'Nationals'];

    const teamPicker = teamArray.map((el, i) => {
        return <li key={i} onClick={() => props.favoriteTeamHandler(el)}>
            {el}</li>

    })


    return (
        <React.Fragment>
            <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Fav Team Picker</a>
            <ul id='dropdown1' className='dropdown-content'>
                {teamPicker}
            </ul>
        </React.Fragment>
    )
}

export default favTeamInput;