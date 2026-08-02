import { Category } from '@/domain/category/Category'
import { ICategoryRepo } from '@/domain/category/ICategoryRepo'
import { categories } from '@/infra/repositories/adapters/inMemory/data/categories'

export class InMemoryCategoryRepo implements ICategoryRepo {
  async findAll(): Promise<Category[]> {
    return categories
  }
}
