import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { ResourcesModule } from './resources/resources.module';

@Module({
  imports: [ConfigurationModule, ResourcesModule],
})
export class AppModule {}
