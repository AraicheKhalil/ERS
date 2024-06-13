


import React from 'react'
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


export default function CustomDatePicker({ date,handleDateChange , type}) {

  return (
    <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "w-[280px] justify-start text-left font-normal",
          !date && "text-muted-foreground "
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4 " />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
      <Calendar
        mode="single"
        selected={date}
        onSelect={(date) => handleDateChange(date, type)}
        initialFocus
      />
    </PopoverContent>
  </Popover>
  )
}
