import { MouseEventHandler } from "react"

export interface BtnProps {
    title: string
    containerStyles?: string
    textStyles?: string
    rightIcon?: string
    isDisabled?: boolean
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}
export interface SearchManufacturerProps {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}
export interface CarProps {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string,
    transmission: string,
    year: number
}
export interface FilterProps {
    manufacturer: string
    year: number
    fuel: string
    limit: number
    model:string
}
export interface OptionsProps {
    title: string
    value: string
}
export interface CustomFilterProps {
    title: string
    options: OptionsProps[]
}
export interface ShowMoreProps {
    pageNumber: number
    isNext: boolean
}
export interface HomeProps {
    searchParams: FilterProps
}