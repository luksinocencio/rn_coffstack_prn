import type { CityPreview } from '../types'
import { supabase } from './supabase'

const storageURL = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL

export type CityFilters = {
  name?: string
  categoryId?: string | null
}

async function findAll(filters: CityFilters = {}): Promise<CityPreview[]> {
  let query = supabase.from('cities').select('*')

  if (filters.name && filters.name.trim() !== '') {
    query = query.ilike('name', `%${filters.name.trim()}%`)
  }

  const { data, error } = await query

  if (error) {
    console.error('Erro ao buscar cidades', error)
    throw error
  }

  if (!data) {
    return []
  }

  return data.map(row => ({
    id: row.id,
    country: row.country,
    name: row.name,
    coverImage: `${storageURL}/${row.cover_image}`,
  }))
}

export const supabaseService = { findAll }
