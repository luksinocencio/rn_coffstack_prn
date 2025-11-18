import { supabaseCityRepo } from '../supabase/supabaseService'
import { useFetchData } from './useFetchData'

export function useRelatedCities(cityId: string) {
  return useFetchData(() => supabaseCityRepo.getRelatedCities(cityId))
}

// return cities.filter((city) => relatedCitiesIds.includes(city.id));