import React from 'react';

//Component creates the AWAY teams batting roster in a TABLE format
//Receives PROPS from <Details component 
//KEY INDEX is still giving me a WARNING need to generate a random number to make them unique

const batters_away = (props) => {
    
    const batters_names = props.batting.map((batter, index) => {
        return <tr key= {index++}><td key={index}> {batter.name} {batter.pos}</td>
                     <td key={99}>  {batter.ab} </td>
                     <td key={98}>   {batter.r}  </td>
                     <td key={97}>   {batter.h}  </td>
                     <td key={96}>   {batter.rbi}</td>
                     <td key={95}>  {batter.bb} </td>
                     <td key={94}>  {batter.so} </td>
                     <td key={93}>  {batter.lob}</td>
                     <td key={92}>  {batter.avg}</td>
                     <td key={91}>  {batter.ops}</td>
            </tr>
    })

    return (
        <div className= "col s12 m6 l6">
           <table className= "striped">
                <thead className="shaded">
                    <tr>
                        <th className="teamName"> {props.away_name} </th>
                        <th> AB  </th>
                        <th> R   </th>
                        <th> H   </th>
                        <th> RBI </th>
                        <th> BB  </th>
                        <th> SO  </th>
                        <th> LOB </th>
                        <th> AVG </th>
                        <th> OPS </th>
                    </tr>
                </thead>
                <tbody >
                   {batters_names}
                </tbody>
            </table>
        </div>
    )
}

export default batters_away;