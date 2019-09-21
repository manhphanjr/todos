import { Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { Student } from './student.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class StudentsService extends BaseService<Student> {
  constructor(
    @InjectRepository(Student)
    private readonly _studentsRepository: Repository<Student>,
  ) {
    super(_studentsRepository)
  }
}
