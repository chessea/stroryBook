
import  './Mylabel.css'

interface Props {

/**
 * Text to display
 */

  label: string;

/**
 * Label size
 */


  size?:  'normal'| 'h1' | 'h2' | 'h3';



/**
 * Capitaliza
 */


  allCaps?: boolean;

/**
 * Color
 */


  color?: "text-primary" | "text-secondary" | "text-tertiary"

/**
 * Color de las letras
 */


  fontColor?: string 
  
}

export const MyLabel = ({label, size = "normal", allCaps = false,  color="text-secondary",  fontColor="black"  }: Props) => {
  return (
    <span className={`${size }  ${color} `} style={{ "color" : fontColor}} >
      {allCaps === true ? label.toUpperCase() : label}
      </span>
  )
}
