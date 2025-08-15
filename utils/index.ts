import { CarProps, FilterProps } from '@/types';
import axios from 'axios';

export async function fetchCars(filters: FilterProps) {
  const { make, year, model, fuel_type, limit } = filters

  const response = await axios.get(`http://localhost:8000/cars?make${make}&year=${year}&model=${model}&_limit=${limit}&fuel_type=${fuel_type}`)

  const result = await response.data

  return result
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')

  const { make, year, model } = car


  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split('')[0])
  url.searchParams.append('zoom', 'fullscreen')
  url.searchParams.append('year', year)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50
  const mileagefactor = 0.1
  const ageFactor = 0.05

  const mileageRate = city_mpg * mileagefactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(type, value)

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  return newPathName
}