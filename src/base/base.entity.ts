import { IsOptional } from 'class-validator'
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @IsOptional()
  @Column({
    name: 'is_active',
    default: true,
  })
  isActive?: boolean

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt?: Date
}
