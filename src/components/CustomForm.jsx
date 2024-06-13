import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { format, formatDate } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react" 
import { cn } from "../lib/utils"
import { Calendar } from "./ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import CustomDatePicker from './CustomDatePicker'


export default function CustomForm() {


    // const [date, setDate] = React.useState(null);
    // console.log(date)


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


    const handleDateChange = (date, field) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: format(date,"yyyy-MM-dd"),
      }));
    };
    
    
    const SubmitForm = async (e) => {
        e.preventDefault()
        console.log(FormData)
    }

  return (
    <>
      <form onSubmit={SubmitForm}>
        <div className="flex flex-wrap justify-between">
          {/* Cin  */}
          <div className="my-1.5 min-w-72 items-center gap-1.5">
            <Label htmlFor="cin">CIN</Label>
            <Input
              type="text"
              id="cin"
              placeholder="HH4571"
              name="cin"
              value={FormData.cin}
              onChange={(e) =>
                setFormData({ ...FormData, cin: e.target.value })
              }
            />
          </div>
          {/* Nom et Prenom  */}
          <div className="my-1.5 min-w-72 items-center gap-1.5">
            <Label htmlFor="nom">Nom et Prenom</Label>
            <Input
              type="text"
              id="nom"
              placeholder="Simo Yamir"
              name="nom"
              value={FormData.nom}
              onChange={(e) =>
                setFormData({ ...FormData, nom: e.target.value })
              }
            />
          </div>
          {/* Grade  */}
          <div className="flex flex-col my-1.5 min-w-72  gap-1.5">
            <Label htmlFor="grade">Grade</Label>
            <Select value={FormData.grade}
              onValueChange={(value) => {
                setFormData({...FormData, grade : value})
              }}>
              <SelectTrigger className="min-w-72">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key={1} value="administarateur">Administarateur</SelectItem>
                <SelectItem key={2} value="redacteur">Redacteurs</SelectItem>
                <SelectItem key={3} value="ingenieur">Ingenieurs</SelectItem>
                <SelectItem key={4} value="Technicien">Technicien</SelectItem>
                <SelectItem key={5} value="adj-admin">adj administartif</SelectItem>
                <SelectItem key={6} value="adj-tech">adj Technique</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Date de naissance  */}
          <div className="flex flex-col my-1.5 min-w-72  gap-1.5">
            <Label htmlFor="naissance">Date de naissance</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !FormData.date_naissance && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {FormData.date_naissance ? format(FormData.date_naissance, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={FormData.date_naissance}
                  onSelect={(date) => handleDateChange(date, 'date_naissance')}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
          </div>
          {/* Echelle */}
          <div className="my-1.5 min-w-72 items-center gap-1.5">
            <Label htmlFor="echelle">Echelle</Label>
            <Input
              type="text"
              id="echelle"
              placeholder="echelle"
              name="echelle"
              value={FormData.echelle}
              onChange={(e) =>
                setFormData({
                  ...FormData,
                  echelle: e.target.value,
                })
              }
            />
          </div>
          {/* date de Echelle  */}
          {/* <div className="my-1.5 min-w-72 flex flex-col  gap-1.5">
            <Label htmlFor="recrutement">Date de Echelle</Label>
            <Popover >
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"          
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div> */}
          {/* Echelon */}
          <div className="my-1.5 min-w-72 items-center gap-1.5">
            <Label htmlFor="echelle">Echelon</Label>
            <Input
              type="text"
              id="echelon"
              placeholder="Echelon"
              name="echelon"
              value={FormData.echelon}
              onChange={(e) =>
                setFormData({
                  ...FormData,
                  echelon: e.target.value,
                })
              }
            />
          </div>
          {/*  date de Echelon*/}
          {/* <div className="my-1.5 min-w-72 flex flex-col gap-1.5">
            <Label htmlFor="date-echelon">Date de Echelon</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div> */}
          {/* date de recrutement */}
          {/* <div className="my-1.5 min-w-72 flex flex-col  gap-1.5">
            <Label htmlFor="recrutement">Date de recrutement</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div> */}
          {/*  Indice */}
          <div className="my-1.5 min-w-72 items-center gap-1.5">
            <Label htmlFor="indice">Indice</Label>
            <Input
              type="text"
              id="indice"
              placeholder="Indice"
              name="indice"
              value={FormData.indice}
              onChange={(e) =>
                setFormData({
                  ...FormData,
                  indice: e.target.value,
                })
              }
            />
          </div>
          {/* Mutuelle  */}
          <div className="my-1.5 min-w-72 items-center gap-1.5">
            <Label htmlFor="mutuelle">Mutuelle</Label>
            <Input
              type="text"
              id="mutuelle"
              placeholder="Mutuelle"
              name="mutuelle"
              value={FormData.mutuelle}
              onChange={(e) =>
                setFormData({
                  ...FormData,
                  mutuelle: e.target.value,
                })
              }
            />
          </div>
          {/*  Diplome spécialialité */}
          <div className="my-1.5 min-w-72 items-center gap-1.5">
            <Label htmlFor="diplome_spécialialité">Diplome spécialialité</Label>
            <Input
              type="text"
              id="diplome_spécialialité"
              placeholder="diplome spécialialité"
              name="diplome_spécialialité"
              value={FormData.diplome_spécialialité}
              onChange={(e) =>
                setFormData({
                  ...FormData,
                  diplome_spécialialité: e.target.value,
                })
              }
            />
          </div>
          {/*  Situation administrative */}
          <div className="my-1.5 min-w-72 items-center gap-1.5">
            <Label htmlFor="situation_administrative">
              Situation administrative
            </Label>
            <Input
              type="text"
              id="situation_administrative"
              placeholder="Situation administrative"
              name="situation_administrative"
              value={FormData.situation_administrative}
              onChange={(e) =>
                setFormData({
                  ...FormData,
                  situation_administrative: e.target.value,
                })
              }
            />
          </div>
          {/* Affectation */}
          <div className="my-1.5 min-w-72 items-center gap-1.5">
            <Label htmlFor="Affectation">Affectation</Label>
            <Input
              type="text"
              id="Affectation"
              placeholder="Affectation"
              name="affectation"
              value={FormData.affectation}
              onChange={(e) =>
                setFormData({ ...FormData, affectation: e.target.value })
              }
            />
          </div>
          {/*  Traitement dossier */}
          <div className="my-1.5 min-w-72 items-center gap-1.5">
            <Label htmlFor="traitement-dossier">Traitement dossier</Label>
            <Input
              type="text"
              id="traitement-dossier"
              placeholder="Validé"
              name="traitement-dossier"
              value={FormData.traitement_dossier}
              onChange={(e) =>
                setFormData({ ...FormData, traitement_dossier: e.target.value })
              }
            />
          </div>
          {/* Date Retraité  */}
          {/* <div className="my-1.5 min-w-72 flex flex-col gap-1.5">
            <Label htmlFor="retraité">Date Retraité</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div> */}
        </div>

        <Button className="mt-7 ">Ajouter un employé </Button>
      </form>
    </>
  );
}
