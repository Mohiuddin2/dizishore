"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"



const CustomCheckbox = () =>{
  return (
    <div className={cn("w-5 h-5 flex items-center justify-center rounded-full bg-green-500 text-white mt-1")}>
    <Check className="w-4 h-4" />
  </div>
  );
}

export { CustomCheckbox }