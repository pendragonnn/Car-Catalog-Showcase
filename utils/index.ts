import { CarProps } from '@/types';
import axios from 'axios';

export async function fetchCars() {
  const response = await axios.get("http://localhost:8000/cars")
  
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