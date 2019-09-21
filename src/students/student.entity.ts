import { Entity, PrimaryColumn, Column } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity('students')
export class Student extends BaseEntity {
  constructor(o: object) {
    super()
    Object.assign(this, o)
  }
  @Column({
    unique: true,
  })
  uuid: number
  @Column({
    unique: true,
  })
  email: string
  @Column()
  phone: string
  @Column({
    nullable: true,
    name: 'dob',
  })
  dayOfBirth?: Date
  @Column({
    nullable: true,
  })
  gender: boolean
  @Column({
    type: 'text',
  })
  address?: string
}
