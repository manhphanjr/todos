import { BaseEntity } from './base.entity'
import {
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { IBaseService } from './base.service.interface'
// import { AuthGuard } from '@nestjs/passport'
import { Pagination } from 'nestjs-typeorm-paginate'

// @UseGuards(AuthGuard('jwt'))
export class BaseController<T extends BaseEntity> {
  constructor(private readonly _baseService: IBaseService<T>) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Entities retrieved successfully.' })
  async index(
    @Query('page') page: number = 0,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<T>> {
    limit = limit > 10 ? 10 : limit
    return this._baseService.findAll({
      page,
      limit,
    })
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Entity retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Entity does not exist' })
  async show(@Param('id') id: number): Promise<T> {
    return this._baseService.findByPk(id)
  }

  @Get('/uuid/:uuid')
  @ApiResponse({ status: 200, description: 'Entity retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Entity does not exist' })
  async showByUUID(@Param('uuid') uuid: number): Promise<T> {
    return this._baseService.findByUUID(uuid)
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() entity: T, _options?: any): Promise<T> {
    return this._baseService.create(entity)
  }

  @Put()
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  async update(@Body() entity: T, _options?: any): Promise<T> {
    return this._baseService.update(entity)
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async delete(@Param('id') id: number): Promise<any> {
    return this._baseService.delete(id)
  }
}
