import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


export default function CustomForm() {
    const [FormData,setFormData] = useState({
        cin : "",
        nom : "",
        grade : "",
        date_naissance : "",
        date_recrutement : "",
        echelle : "",
        date_echelle : "",
        echelon : "",
        date_Echelon : "",
        indice : "",
        mutuelle : "",
        diplome_spécialialité : "",
        situation_administrative : "",
        affectation : "",
        traitement_dossier : "",
        date_Retraité : "",
    })

    const SubmitForm = async () => {

    }
    
  return (
      <>
        <form>
            <div className="flex flex-wrap justify-between">
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="cin">CIN</Label>
                    <Input type="text" id="cin" placeholder="HH4571" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="nom">Nom et Prenom</Label>
                    <Input type="text" id="nom" placeholder="Simo Yamir" />
                </div>
                <div className="flex flex-col my-1.5 min-w-72  gap-1.5">
                    <Label htmlFor="grade">Grade</Label>
                    <Select>
                        <SelectTrigger className="min-w-72">
                            <SelectValue aria-required placeholder="Administarteur" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="administarateur">Administarateur</SelectItem>
                            <SelectItem value="redacteur">Redacteurs</SelectItem>
                            <SelectItem value="ingenieur">Ingenieurs</SelectItem>
                            <SelectItem value="technicien">Technicien</SelectItem>
                            <SelectItem value="adj-admin">adj administartif</SelectItem>
                            <SelectItem value="adj-tech">Technique</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="naissance">Date de naissance</Label>
                    <Input type="text" id="naissance" placeholder="14/10/1991" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="recrutement">Date de recrutement</Label>
                    <Input type="text" id="recrutement" placeholder="12/10/1994" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="echelle">Echelle</Label>
                    <Input type="text" id="echelle" placeholder="echelle" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="date-echelle">Date de Echelle</Label>
                    <Input type="text" id="date-echelle" placeholder="echelle" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="echelle">Echelle</Label>
                    <Input type="text" id="echelle" placeholder="echelle" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="date-echelle">Date de Echelle</Label>
                    <Input type="text" id="date-echelle" placeholder="echelle" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="Affectation">Affectation</Label>
                    <Input type="text" id="Affectation" placeholder="Affectation" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="traitement-dossier">Traitement dossier</Label>
                    <Input type="text" id="traitement-dossier" placeholder="Validé" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="retraité">Date Retraité</Label>
                    <Input type="text" id="retraité" placeholder="2045-03-14" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="date-echelle">  Echelle</Label>
                    <Input type="text" id="date-echelle" placeholder="echelle" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="Affectation">Affectation</Label>
                    <Input type="text" id="Affectation" placeholder="Affectation" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="traitement-dossier">Traitement dossier</Label>
                    <Input type="text" id="traitement-dossier" placeholder="Validé" />
                </div>
                <div className="my-1.5 min-w-72 items-center gap-1.5">
                    <Label htmlFor="retraité">Date Retraité</Label>
                    <Input type="text" id="retraité" placeholder="2045-03-14" />
                </div>
            </div>

            <Button className="mt-7 ">Ajouter un employé </Button>
        </form>
      </>
    )
}
