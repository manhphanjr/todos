import { IBaseService } from './base.service.interface'
import { BaseEntity } from './base.entity'
import { Repository } from 'typeorm'
import { BadGatewayException, HttpException, HttpStatus } from '@nestjs/common'
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate'

export class BaseService<T extends BaseEntity> implements IBaseService<T> {
  constructor(private readonly _baseRepository: Repository<T>) {}
  async findByPk(id: number): Promise<T> {
    try {
      return await this._baseRepository.findOne({ where: { id } })
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }

  async findByUUID(uuid: number): Promise<T> {
    try {
      return await this._baseRepository.findOne({ where: { uuid } })
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }

  async findAll(options?: IPaginationOptions): Promise<Pagination<T>> {
    try {
      return await paginate(this._baseRepository, options)
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }

  async create(entity: any): Promise<T> {
    try {
      return await this._baseRepository.save(entity)
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }
  async update(entity: T): Promise<T> {
    try {
      const res: any = await this._baseRepository.findOne(entity.id)
      if (!res) {
        throw new HttpException({ message: 'Not found' }, HttpStatus.NOT_FOUND)
      }
      const updated = Object.assign(res, entity)
      return this._baseRepository.save(updated)
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }
  async delete(id: number): Promise<any> {
    try {
      return await this._baseRepository.delete(id)
    } catch (error) {
      throw new BadGatewayException(error)
    }
  }
}
