import { Inter, Montserrat_Alternates } from "next/font/google";

export const inter = Inter({subsets:['latin']});

// Creo un nombre general(titleFont) para mis fuentes y así evitar el problema 
// de tener que hacer muchos cambios al momento de querere cambiar mis fuentes

export const titleFont = Montserrat_Alternates({
  subsets:['latin'],
  weight:['500','700']
});