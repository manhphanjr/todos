import {
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { BaseEntity } from '../base/base.entity'
@Entity('subjects')
export class Subject extends BaseEntity {
  constructor(o: object) {
    super()
    Object.assign(this, o)
  }

  @Column({
    unique: true,
  })
  uuid: string
  @Column()
  name: string
}
