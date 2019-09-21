import { Controller } from '@nestjs/common'
import { BaseController } from '../base/base.controller'
import { Student } from './student.entity'
import { StudentsService } from './students.service'

@Controller('students')
export class StudentsController extends BaseController<Student> {
  constructor(private _studentsService: StudentsService) {
    super(_studentsService)
  }
}
