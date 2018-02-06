import React from 'react';
import BattersSwitch from './BattersSwitch.css';
//Component creates the HOME teams batting roster in a TABLE format
//Receives PROPS from <Details component 
//KEY INDEX is still giving me a WARNING need to generate a random number to make them unique

const batters_home = (props) => {
 
    const batters_names = props.batting.map((batter, index) => {
        return <tr key={index}><td key={index}> {batter.name} {batter.pos}</td>
                    <td key={89}>  {batter.ab}  </td>
                    <td key={88}>   {batter.r}  </td>
                    <td key={87}>   {batter.h}  </td>
                    <td key={86}> {batter.rbi}  </td>
                    <td key={85}>  {batter.bb}  </td>
                    <td key={84}>  {batter.so}  </td>
                    <td key={83}> {batter.lob}  </td>
                    <td key={82}> {batter.avg}  </td>
                    <td key={81}> {batter.ops}  </td>
                </tr>
    })

    return (
        <div className= "col s12 m6 l6">
           <table className= "striped">
                <thead className="shaded">
                    <tr>
                        <th className="teamName"> {props.home_name} </th>
                        <th> AB </th>
                        <th> R </th>
                        <th> H </th>
                        <th> RBI </th>
                        <th> BB </th>
                        <th> SO </th>
                        <th> LOB </th>
                        <th> AVG </th>
                        <th> OPS </th>
                    </tr>
                </thead>
                <tbody>
                        {batters_names}
                </tbody>
            </table>
        </div>
    )
}

export default batters_home;