// importing Evenements to use it again
import Evenements from "./Evenements";

const Expert =(props)=>{
    // data coming on props from App.jsx
    const expert = props.expert ;
return(
    <>
    <h1>Q2</h1>
    <li>
        {/* printing the name of the expert */}
        {expert.nom_complet}
        {/* here calling the same table from evenmet cuz almost the same  */}
        <Evenements evenements={expert.événements}/>

    </li>
    
    </>
)

}
export default Expert;