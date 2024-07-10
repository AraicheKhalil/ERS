

import DataTable from '@/components/DataTable'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const data = [
  {
    "CIN": "HH12354",
    "NomEtPrenom": "Laura Petit",
    "Grade": "Analyste financier",
    "dateNaissance": "1988-04-22",
    "DateRecrutement": "2012-11-05",
  },
  {
    "CIN": "HH12354",
    "NomEtPrenom": "Laura Petit",
    "Grade": "Analyste financier",
    "dateNaissance": "1988-04-22",
    "DateRecrutement": "2012-11-05",
  },
  {
    "CIN": "HH12354",
    "NomEtPrenom": "Laura Petit",
    "Grade": "Analyste financier",
    "dateNaissance": "1988-04-22",
    "DateRecrutement": "2012-11-05",
  },
  {
    "CIN": "HH12354",
    "NomEtPrenom": "Laura Petit",
    "Grade": "Analyste financier",
    "dateNaissance": "1988-04-22",
    "DateRecrutement": "2012-11-05",
  },
  {
    "CIN": "HH12354",
    "NomEtPrenom": "Laura Petit",
    "Grade": "Analyste financier",
    "dateNaissance": "1988-04-22",
    "DateRecrutement": "2012-11-05",
  }
]

const headKey = [
  {
    "key" : "CIN",
  },
  {
    "key" : "Nom/Prenom",
  },
  {
    "key" : "Grade",
  },
  {
    "key" : "Situation administrative",
  },
  {
    "key" : "Affectation ",
  },
  {
    "key" : "Service"
  }
]

const tableWidth = "w-full border rounded-lg"

export default function Services() {
  return (
    <div className='md:p-8 p-4'>
      <Tabs defaultValue="S.R.H.A.J.C.C" className="w-full">
        <TabsList className="grid w-full lg:grid-cols-7 h-fit grid-cols-response ">
          <TabsTrigger value="S.R.H.A.J.C.C">S.R.H.A.J.C.C</TabsTrigger>
          <TabsTrigger value="S.T.D.E">S.T.D.E</TabsTrigger>
          <TabsTrigger value="S.F.P">S.F.P</TabsTrigger>
          <TabsTrigger value="D.A.P">D.A.P</TabsTrigger>
          <TabsTrigger value="Secretarait">Secretarait</TabsTrigger>
          <TabsTrigger value="Beraux D'order">Beraux D'order</TabsTrigger>
          <TabsTrigger value="S.E.R.T">S.E.R.T</TabsTrigger>
       </TabsList>
      </Tabs>

      <DataTable HeadKeys={headKey} data={data} tableWidth={tableWidth} />
    </div>
  )
}


































// import DataTable from '@/components/DataTable'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import React from 'react'

// const redacteursEmployees = [
//   {
//     "CIN": "HH12543",
//     "NomEtPrenom": "Lucas Bernard",
//     "Grade": "Ingénieur réseau",
//     "SituationAdministrative": "En activité",
//     "Affectation": "Département IT, Bureau Régional",
//     "services" : "generale"
//   },
//   {
//     "CIN": "HH12543",
//     "NomEtPrenom": "Lucas Bernard",
//     "Grade": "Ingénieur réseau",
//     "SituationAdministrative": "En activité",
//     "Affectation": "Département IT, Bureau Régional",
//     "services" : "generale"
//   },
//   {
//     "CIN": "HH12543",
//     "NomEtPrenom": "Lucas Bernard",
//     "Grade": "Ingénieur réseau",
//     "SituationAdministrative": "En activité",
//     "Affectation": "Département IT, Bureau Régional",
//     "services" : "generale"
//   },
//   {
//     "CIN": "HH12543",
//     "NomEtPrenom": "Lucas Bernard",
//     "Grade": "Ingénieur réseau",
//     "SituationAdministrative": "En activité",
//     "Affectation": "Département IT, Bureau Régional",
//     "services" : "generale"
//   },
//   {
//     "CIN": "HH12543",
//     "NomEtPrenom": "Lucas Bernard",
//     "Grade": "Ingénieur réseau",
//     "SituationAdministrative": "En activité",
//     "Affectation": "Département IT, Bureau Régional",
//     "services" : "generale"
//   },
//   {
//     "CIN": "HH12543",
//     "NomEtPrenom": "Lucas Bernard",
//     "Grade": "Ingénieur réseau",
//     "SituationAdministrative": "En activité",
//     "Affectation": "Département IT, Bureau Régional",
//     "services" : "generale"
//   },
  
// ]

// const headKey = [
//   {
//     "key" : "CIN",
//   },
//   {
//     "key" : "Nom/Prenom",
//   },
//   {
//     "key" : "Grade",
//   },
//   {
//     "key" : "Situation administrative",
//   },
//   {
//     "key" : "Affectation ",
//   },
//   {
//     "key" : "Service"
//   }
// ]

// export default function Services() {
//   return (
//     <div className="md:p-8 p-4">
//         <Tabs defaultValue="S.R.H.A.J.C.C" className="w-full">
//           <TabsList className="grid w-full lg:grid-cols-7 h-fit grid-cols-response ">
//             <TabsTrigger value="S.R.H.A.J.C.C">S.R.H.A.J.C.C</TabsTrigger>
//             <TabsTrigger value="S.T.D.E">S.T.D.E</TabsTrigger>
//             <TabsTrigger value="S.F.P">S.F.P</TabsTrigger>
//             <TabsTrigger value="D.A.P">D.A.P</TabsTrigger>
//             <TabsTrigger value="Secretarait">Secretarait</TabsTrigger>
//             <TabsTrigger value="Beraux D'order">Beraux D'order</TabsTrigger>
//             <TabsTrigger value="S.E.R.T">S.E.R.T</TabsTrigger>
//           </TabsList>
          

//           <TabsContent value="S.R.H.A.J.C.C">
//             <DataTable HeadKeys={headKey} data={redacteursEmployees} tableWidth={"w-full"}/>
//           </TabsContent>
//         </Tabs>
//       </div>
//   )
// }


