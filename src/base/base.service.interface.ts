import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate'

export interface IBaseService<T> {
  findByPk(id: number): Promise<T>
  findByUUID(uuiid: number): Promise<T>
  findAll(options?: IPaginationOptions): Promise<Pagination<T>>
  create(entity: T): Promise<T>
  update(entity: T): Promise<T>
  delete(id: number): Promise<T>
}
