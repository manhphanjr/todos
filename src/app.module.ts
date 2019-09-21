import { Module, DynamicModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { StudentsModule } from './students/students.module'
import { SubjectsModule } from './subjects/subjects.module'
import { TypeOrmConfig } from './configs/orm.config'

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot({ ...TypeOrmConfig, keepConnectionAlive: true })
}

@Module({
  imports: [DatabaseOrmModule(), StudentsModule, SubjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
