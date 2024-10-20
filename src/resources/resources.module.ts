import { Module } from '@nestjs/common';
import { FranchisesModule } from './franchises/franchises.module';
import { ShowsModule } from './shows/shows.module';

@Module({
  imports: [FranchisesModule, ShowsModule],
})
export class ResourcesModule {}
