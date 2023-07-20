'use client'
import React, { SetStateAction } from 'react'
import {SearchManufacturer} from './'
import { useState } from 'react'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'
const SearchButton = ({ otherClasses } : {otherClasses: string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src='magnifying-glass.svg' alt='magnifyng glass' width={40} height={40} className='object-contain' />
  </button>
)
const SearchBar = ({setManufacturer, setModel} : {setManufacturer: React.Dispatch<SetStateAction<any>>, setModel: React.Dispatch<SetStateAction<any>>}) => {
  const
  // router = useRouter()
  [searchManufacturer, setSearchManufacturer] = useState('')
  , [searchModel, setSearchModel] = useState('')
  , handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchManufacturer === '' && searchModel === '') { return alert('Please fill in the search bar') }
    setModel(searchModel)
    setManufacturer(searchManufacturer)
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer 
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image src='/model-icon.png' width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' alt='car model' />
        <input type='text' name='model' value={searchModel} onChange={(e)=>setSearchModel(e.target.value)} placeholder='Tiguan' className='searchbar__input' />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBar