import { supabaseCityRepo } from '../supabase/supabaseService'
import { useFetchData } from './useFetchData'

export function useCategories() {
  return useFetchData(() => supabaseCityRepo.listCategory())
}