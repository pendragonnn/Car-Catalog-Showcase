"use client"

import React from 'react'
import { SearchManufacturer } from './'
import { useState } from 'react'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')

  const handleSearch = () => {

  }

  return (
    <form action="searchbar" onSubmit={handleSearch}>
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <SearchManufacturer 
          manufacturer={manufacturer} 
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar