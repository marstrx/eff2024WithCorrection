import expertsData from "../data";

const Experts1 = () => {
  return (
    <>
      <h1>Q3</h1>
      <ul>
        {expertsData.map((expert, key) => {
          const total = expert.événements.reduce(
            (total, ev) => total + ev.cout_journalier * ev.durée,
            0
          );
          return (
            <li key={key}>
              <p>{expert.nom_complet}</p>
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
                  {expert.événements.map((eve, i) => (
                    <tr key={i}>
                      <td>{eve.thème}</td>
                      <td>{eve.date_debut}</td>
                      <td>{eve.date_fin}</td>
                      <td>{eve.description}</td>
                      <td>{eve.cout_journalier} DH</td>
                      <td>{eve.durée}</td>
                      <td>{eve.cout_journalier * eve.durée}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={7}>
                      Total des coûts des événements est {total} DH
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Experts1;
