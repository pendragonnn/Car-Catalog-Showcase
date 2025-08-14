import axios from 'axios';

export async function fetchCars() {
  const response = await axios.get("http://localhost:8000/cars")
  
  const result = await response.data

  return result
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