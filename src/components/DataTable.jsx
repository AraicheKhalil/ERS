

import React, { useState } from 'react'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from './ui/button'
import CustomForm from './CustomForm'
import { CircleFadingPlus, Upload } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"


export default function DataTable({data , HeadKeys, tableWidth}) {

    
    const [searchTerm, setSearchTerm] = useState('');
    const [file, setFile] = useState(null);

    const filteredData = data.filter((item) =>
        item.NomEtPrenom.includes(searchTerm.toUpperCase())
    );    

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        convertToJson(selectedFile);
      }
    };
  
    const convertToJson = (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        const jsonString = JSON.stringify(jsonData, null, 2);
  
        const blob = new Blob([jsonString], { type: 'application/json' });
        saveAs(blob, 'data.json');
      };
      reader.readAsArrayBuffer(file);
    };
    

    return (
      <>
        {data ? (
          <div className=" overflow-x-auto">
            <div className="w-full py-2.5 flex justify-between items-center flex-wrap gap-y-4">
              <div className='flex items-center gap-3 flex-wrap'>
                <div>
                  <Input
                    id="upload"
                    type="file"
                    accept=".xls,.xlsx"
                    className="max-w-[150px] file:hidden "
                    onChange={handleFileChange}
                  />
                  <Label
                    htmlFor="upload"
                    className="border px-5 py-2.5 rounded-lg flex items-center gap-2 text-[#64748b] text-sm hover:bg-accent text-nowrap" 
                  >
                    <Upload size={16} />
                    Export un fichier Excel
                  </Label>
                </div>
                <Dialog >
                  <DialogTrigger asChild>
                    <Button variant="outline" className="px-5"><CircleFadingPlus size={16} className='mr-2 '/> Ajouter</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[750px] max-h-[500px] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Ajouter un employé</DialogTitle>
                      <DialogDescription>
                        ajoutez un employé à votre tableau de bord. Cliquez sur Ajouter lorsque vous avez terminé.
                      </DialogDescription>
                    </DialogHeader>
                    {/* custom form */}
                    <CustomForm />
                  </DialogContent>
                </Dialog>
              </div>

              <Input
                type="text"
                placeholder="Entrer le nom"
                className="max-w-[250px] "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Table className={`${tableWidth ? tableWidth : "min-w-[3000px]"}`} >
              <TableHeader>
                <TableRow>
                  {HeadKeys?.map((key,idex) => (
                    <TableHead key={idex}>{key.key}</TableHead>
                  ))}
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
                    <TableCell>{invoice.Service}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div>no data available</div>
        )}
      </>
    );
}
