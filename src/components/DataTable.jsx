


import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { CircleFadingPlus, Upload } from "lucide-react"
import { DialogTrigger , Dialog} from './ui/dialog'
import { Button } from './ui/button'


export default function DataTable({data}) {
    
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredData = data.filter((item) =>
        item.CIN.includes(searchTerm.toUpperCase())
    );

    console.log(searchTerm)
    

    return (
      <>
        {data ? (
          <div className=" overflow-x-auto">
            <div className="w-full py-2.5 flex justify-between items-center">
              <div className='flex items-center gap-3'>
                <div>
                  <Input
                    id="upload"
                    type="file"
                    accept=".xls,.xlsx"
                    className="max-w-[150px] file:hidden "
                  />
                  <Label
                    htmlFor="upload"
                    className="border px-5 py-2.5 rounded-lg flex items-center gap-2 text-[#64748b] text-sm"
                  >
                    <Upload size={16} />
                    Upload File
                  </Label>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline"><CircleFadingPlus size={16} className='mr-2'/> Ajouter</Button>
                  </DialogTrigger>
                </Dialog>
              </div>

              <Input
                type="text"
                placeholder="Entre CIN"
                className="max-w-[250px] "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Table className="min-w-[3000px] ">
              <TableHeader>
                <TableRow>
                  <TableHead>CIN</TableHead>
                  <TableHead>Nom/Prenom</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Date naissance</TableHead>
                  <TableHead>Date recrutement </TableHead>
                  <TableHead>Echelle </TableHead>
                  <TableHead>Date echelle </TableHead>
                  <TableHead>Echelon</TableHead>
                  <TableHead>Date Echelon</TableHead>
                  <TableHead>Indice</TableHead>
                  <TableHead>Mutuelle</TableHead>
                  <TableHead>Diplome spécialialité</TableHead>
                  <TableHead>Situation administrative</TableHead>
                  <TableHead>Affectation </TableHead>
                  <TableHead>Traitement dossier</TableHead>
                  <TableHead>Date Retraité</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((invoice) => (
                  <TableRow key={invoice.CIN}>
                    <TableCell className="font-medium ">
                      {invoice.CIN}
                    </TableCell>
                    <TableCell>{invoice.NomEtPrenom}</TableCell>
                    <TableCell>{invoice.Grade}</TableCell>
                    <TableCell>{invoice.dateNaissance}</TableCell>
                    <TableCell>{invoice.DateRecrutement}</TableCell>
                    <TableCell>{invoice.Echelle}</TableCell>
                    <TableCell>{invoice.DateEchelle}</TableCell>
                    <TableCell>{invoice.Echelon}</TableCell>
                    <TableCell>{invoice.DateEchelon}</TableCell>
                    <TableCell>{invoice.Indice}</TableCell>
                    <TableCell>{invoice.Mutuelle}</TableCell>
                    <TableCell>{invoice.DiplomeSpecialité}</TableCell>
                    <TableCell>{invoice.SituationAdministrative}</TableCell>
                    <TableCell>{invoice.Affectation}</TableCell>
                    <TableCell>{invoice.TraitementDossier}</TableCell>
                    <TableCell>{invoice.DateRetraité}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              {/* <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                    </TableFooter> */}
            </Table>
          </div>
        ) : (
          <div>no data available</div>
        )}
      </>
    );
}
