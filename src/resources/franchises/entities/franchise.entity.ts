import { ShowEntity } from 'src/resources/shows/entities/show.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FranchiseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ShowEntity, (show) => show.franchise)
  shows: ShowEntity[];
}
