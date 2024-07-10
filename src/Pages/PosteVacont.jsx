import React from "react";

const tableData = [
  {
    category: "I - PERSONNEL TITULAIRE ET ASSIMILE",
    rows: [
      { title: "Administrateur 1er et 2ème grade", total: 23, pOcc: 4, pVacc: 19 },
      { title: "Administrateur 3ème grade", total: 11, pOcc: "", pVacc: 11 },
      { title: "Administrateur & Administrateur principalMI", total: 30, pOcc: 15, pVacc: 15 },
      { title: "Administrateur Adjoint MI", total: 2, pOcc: "", pVacc: 2 },
      { title: "Ingénieur Général et Ingénieur en Chef", total: 4, pOcc: "", pVacc: 4 },
      { title: "Ingénieur d'Etat", total: 9, pOcc: 1, pVacc: 8 },
      { title: "Ingénieur d'Application", total: 3, pOcc: "", pVacc: 3 },
      { title: "Architecte en Chef", total: 1, pOcc: "", pVacc: 1 },
      { title: "Architecte", total: 1, pOcc: "", pVacc: 1 },
      { title: "Médecin", total: 1, pOcc: "", pVacc: 1 },
      { title: "Vétérinaire", total: 1, pOcc: "", pVacc: 0 },
      { title: "Rédacteur 1er et 2ème grade", total: 4, pOcc: 3, pVacc: 1 },
      { title: "Rédacteur 3ème et 4ème grade", total: 22, pOcc: "", pVacc: 22 },
      { title: "Adjoint Technique 1er grade et grade principal", total: 15, pOcc: 14, pVacc: 1 },
      { title: "Adjoint Technique 2ème grade", total: 121, pOcc: 12, pVacc: 109 },
      { title: "Adjoint Administratif 1er grade et grade principal", total: 12, pOcc: 10, pVacc: 2 },
      { title: "Adjoint Administratif 2ème grade", total: 47, pOcc: 12, pVacc: 35 },
      { title: "Adjoint de santé grade exceptionnel", total: 0, pOcc: "", pVacc: 0 },
      { title: "Adjoint de santé 1er grade", total: 0, pOcc: "", pVacc: 0 },
      { title: "Adjoint de santé 1er et 2ème grade", total: 0, pOcc: "", pVacc: 0 },
      { title: "Infirmier diplômé d'Etat Principal", total: 0, pOcc: "", pVacc: 0 },
      { title: "Infirmier diplômé 1er et 2ème grade", total: 0, pOcc: "", pVacc: 0 },
      { title: "Adjoint de santé breveté, et breveté principal", total: 0, pOcc: "", pVacc: 0 },
      { title: "Technicien 1er grade", total: 12, pOcc: 10, pVacc: 2 },
      { title: "Technicien 2ème grade", total: 22, pOcc: 10, pVacc: 12 },
      { title: "Technicien 3ème grade", total: 15, pOcc: 9, pVacc: 6 },
      { title: "Technicien 4ème grade", total: 11, pOcc: "", pVacc: 11 },
      { title: "SOUSTOTAL I", total: 366, pOcc: 100, pVacc: 266, isSubtotal: true }
    ]
  },
  {
    category: "II - PERSONNEL CONTRACTUEL",
    rows: [
      { title: "Administrateur 1er et 2ème grade contractuel", total: 2, pOcc: "", pVacc: 2 },
      { title: "Administrateur 3ème grade contractuel", total: "", pOcc: "", pVacc: "" },
      { title: "Architecte contractuel", total: "", pOcc: "", pVacc: "" },
      { title: "Avocat de conseil", total: "", pOcc: "", pVacc: "" },
      { title: "Professeur de musique", total: "", pOcc: "", pVacc: "" },
      { title: "Professeur des beaux arts", total: "", pOcc: "", pVacc: "" },
      { title: "Conseillers", total: "", pOcc: "", pVacc: "" },
      { title: "Autres contractuels", total: 3, pOcc: 1, pVacc: 2 },
      { title: "SOUSTOTAL II", total: 5, pOcc: 1, pVacc: 4, isSubtotal: true }
    ]
  },
  {
    category: "TOTAL GENERAL",
    rows: [
      { title: "", total: 371, pOcc: 101, pVacc: 270, isTotal: true }
    ]
  }
];


export default function PosteVacont() {
  return (
    <div  className="md:p-8 p-4">
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th colSpan="4" className="bg-gray-200 border border-gray-300 p-2 text-center">
              REGION MARRAKECH-SAFI
            </th>
          </tr>
          <tr>
            <th className="bg-gray-200 border border-gray-300 p-2 text-center">Emplois</th>
            <th className="bg-gray-200 border border-gray-300 p-2 text-center">TOTAL</th>
            <th className="bg-gray-200 border border-gray-300 p-2 text-center">P.OCC</th>
            <th className="bg-gray-200 border border-gray-300 p-2 text-center">P.VACC</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((category, index) => (
            <React.Fragment key={index}>
              <tr>
                <td colSpan="4" className="bg-orange-100 border border-gray-300 p-2 font-bold">
                  {category.category}
                </td>
              </tr>
              {category.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={row.isSubtotal ? "bg-orange-200 font-semibold" : row.isTotal ? "bg-red-200 font-bold" : ""}>
                  <td className="border border-gray-300 p-2">{row.title}</td>
                  <td className="border border-gray-300 p-2 text-center">{row.total}</td>
                  <td className="border border-gray-300 p-2 text-center">{row.pOcc}</td>
                  <td className="border border-gray-300 p-2 text-center">{row.pVacc}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
