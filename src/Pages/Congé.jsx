
import CustomDatePicker from '@/components/CustomDatePicker'
import DataTable from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CircleFadingPlus } from 'lucide-react'
import React, { useState } from 'react'

const HeadKeys = [
  {
    "key" : "CIN",
  },
  {
    "key" : "Nom/Prenom",
  },
  {
    "key" : "Date de Debut",
  },
  {
    "key" : "Date de Fin",
  },
  {
    "key" : "Le Reste ",
  },
]

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

const tableWidth = "w-full border rounded-lg"

export default function Congé() {

  const [ FormData,setFormData ] = useState({
    nom : "",
    numberDeJour : "",
    dateDebut : "",
    dateFin : ""
  })

  const handleDateChange = (date, field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: date //format(date, "yyyy-MM-dd") to make it string and format
    }));
  };

  const SubmitForm = async (e) => {
    e.preventDefault()
    console.log(FormData)
}

  return (
    <div className='congé md:p-8 p-4'>
       <PageTitle title={"Congé Des Employés"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa itaque magni omnis, iure assumenda nulla debitis dolorum voluptatibus consequatur facilis."} />

       <div className='bg-gray-100 rounded-lg  p-6 mb-4'>
         
         <form onSubmit={SubmitForm} action="" className='bg-gray-100 w-full flex items-center flex-wrap gap-4 md:gap-6'>
            <div className=' min-w-72 '>
              <Label htmlFor="nom">Nom et Prenom</Label>
              <Input
                type="text"
                id="nom"
                placeholder="Nom et Prenom"
                nom="nom"
                value={FormData.nom}
                onChange={(e) =>
                  setFormData({
                    ...FormData,
                    nom: e.target.value,
                  })
                }
              />
            </div>  
            <div className=' min-w-72 '>
              <Label htmlFor="numberDeJour">Numbre des Jours</Label>
              <Input
                type="text"
                id="numberDeJour"
                placeholder="Numbre des Jours"
                name="numberDeJour"
                value={FormData.numberDeJour}
                onChange={(e) =>
                  setFormData({
                    ...FormData,
                    numberDeJour: e.target.value,
                  })
                }
              />
            </div>  
            <div className="flex flex-col my-1.5 min-w-72  gap-1.5">
            <Label htmlFor="dateDebut">Date De Debut</Label>
              <CustomDatePicker date={FormData.dateDebut} handleDateChange={handleDateChange} type={'dateDebut'} />
            </div>

            <div className="flex flex-col my-1.5 min-w-72  gap-1.5">
            <Label htmlFor="dateFin">Date De Fin</Label>
              <CustomDatePicker date={FormData.dateFin} handleDateChange={handleDateChange} type={'dateFin'} />
            </div>

            <div className='mt-4 ml-2'>
             <Button type="submit"> <CircleFadingPlus size={16} className='mr-3' /> Ajouter Congé </Button>
            </div>
            
         </form>
       </div>

       <DataTable HeadKeys={HeadKeys} data={data} tableWidth={tableWidth}/>
    </div>
  )
}
