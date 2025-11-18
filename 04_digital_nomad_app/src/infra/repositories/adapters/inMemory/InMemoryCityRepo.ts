import { cities } from '@/src/data/cities'
import { City, CityPreview } from '@/src/domain/city/City'
import { CityFindAllFilters, ICityRepo } from '@/src/domain/city/ICityRepo'

export class InMemoryCityRepo implements ICityRepo {
  findById(id: string): Promise<City> {
    throw new Error('Method not implemented.')
  }

  getRelatedCities(cityId: string): Promise<CityPreview[]> {
    throw new Error('Method not implemented.')
  }

  async findAll({ name, categoryId }: CityFindAllFilters): Promise<CityPreview[]> {
    let cityPreviewList = [...cities]

    if (name) {
      cityPreviewList = cityPreviewList.filter(city => {
        return city.name.toLowerCase().includes(name.toLowerCase())
      })
    }

    if (categoryId) {
      cityPreviewList = cityPreviewList.filter(city => {
        return city.categories.some(category => category.id === categoryId)
      })
    }

    return cityPreviewList
  }
}
