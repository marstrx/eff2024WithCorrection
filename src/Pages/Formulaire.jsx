import React, { useRef, useState } from 'react';

export default function Formulaire() {
  const [expertData, setExpertData] = useState("");

  const themRef = useRef();
  const DateDeDebutRef = useRef();
  const DateDeFinRef = useRef();
  const CoutRef = useRef();
  const ExpertRef = useRef();

  const AddExpert = (e) => {
    e.preventDefault();
    const data = {
      theme: themRef.current.value,
      date_debut: DateDeDebutRef.current.value,
      date_fin: DateDeFinRef.current.value,
      cout: CoutRef.current.value,
      expert: ExpertRef.current.value,
    };
    setExpertData(data);
  };

  return (
    <>
      <h1>Q4</h1>
      <h2>Formulaire de l'événement</h2>
      <form onSubmit={AddExpert}>
        <label htmlFor="them">Thème</label>
        <input ref={themRef} type="text" id="them" />
        <br />
        <label htmlFor="Date-de-debut">Date de début</label>
        <input ref={DateDeDebutRef} type="date" id="Date-de-debut" />
        <br />
        <label htmlFor="Date-de-fin">Date de fin</label>
        <input ref={DateDeFinRef} type="date" id="Date-de-fin" />
        <br />
        <label htmlFor="Coût">Coût</label>
        <input ref={CoutRef} type="text" id="Coût" />
        <br />
        <label htmlFor="Expert">Expert</label>
        <input ref={ExpertRef} type="text" id="Expert" />
        <br />
        <button type="submit">Confirmer</button>
      </form>

    <p>l'expert{expertData.expert} {expertData.theme}  {expertData.date_debut} {expertData.theme}</p>
    </>
  );
}
