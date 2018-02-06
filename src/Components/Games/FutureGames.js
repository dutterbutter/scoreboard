import React from 'react'

//Template that holds static data for 2018 games

const futureGames = (props) => {

    return (
        <div className="card">
            <table className="bordered" id="mainTable">
                <thead className="shaded">
                    <tr>
                        <th className="scorestatus">TBD</th>
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
                        {props.home_team} <br />
                        (TBD-TBD)
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
                        {props.away_team} <br />
                        (TBD-TBD)
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
            </table>
        </div>
    )
}

export default futureGames;