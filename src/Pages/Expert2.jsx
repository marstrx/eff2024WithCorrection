// import React from 'react'
// import { useState , useEffect } from 'react'
// function Expert2() {
//     const [expertData , setExpertData] =useState("");

//     useEffect(()=>{
//         // just a exapmple and this is what the quetion want from us 
//         // but we cant test this api so comment it for now 
//         const url = "http://localhost:8000/expert2";
//         fetch(url).then(res=>{
//             return res.json()
//         })
//         .then(data=>{
//             setExpertData(data) 
//         })
//     },[])

//   return (
//     <>
//     <h1>Q5</h1>
//     <ul>
//         {expertData.map((exp,key)=>(
//             <>
//              <li key={key}>{exp.nom_complet}</li>
//              <ul>
//                 {exp.événements.map((eve,i)=>(
//                     <li key={i}>{eve.thème}</li>
//                 ))}
//              </ul>
//             </>
           
            
//         ))}
//     </ul>
    
//     </>
//   )
// }

// export default Expert2