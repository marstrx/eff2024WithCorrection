import React from 'react';
import "./Evenements.css"

// Question 1

function Evenements(props) {
    const evenements = props.evenements;
    const coutTotalGlobal = evenements.reduce((total,eve)=>{
        return total + eve.cout_journalier * eve.durée ;
    },0)
  return (
    <>
      <table>
        <thead>
            <tr>
                <th>Theme</th>
                <th>Date de debut</th>
                <th>Date de fin</th>
                <th>Description</th>
                <th>Coût journalier</th>
                <th>Durée (jours)</th>
                <th>Coût total Evenement</th>
            </tr>
        </thead>
        <tbody>
            {
                evenements.map((eve ,key)=>{
                    const coutTotal = eve.cout_journalier * eve.durée ;
                    return(
                    <tr key={key}>
                        <td>{eve.thème}</td>
                        <td>{eve.date_debut}</td>
                        <td>{eve.date_fin}</td>
                        <td>{eve.description}</td>
                        <td>{eve.cout_journalier} DH</td>
                        <td>{eve.durée}</td>
                        <td>{coutTotal} DH</td>
                    </tr>
                
                )})

                
            }
            <tr>
                <td colSpan={7}>{<td>total des cout des evenements est  {coutTotalGlobal} DH</td>}</td>
            </tr>
        </tbody>
      </table>
    </>
  );
}

export default Evenements;