import { FranchiseEntity } from 'src/resources/franchises/entities/franchise.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WatchingStatus } from '../types/watchingStatus.enum';
import { ShowType } from '../types/showType.enum';

@Entity()
export class ShowEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('date')
  airDate: Date;

  @Column({ enum: ShowType })
  type: ShowType;

  @Column({ enum: WatchingStatus })
  status: WatchingStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => ShowEntity, (show) => show.next, {
    nullable: true,
  })
  previous: ShowEntity | null;

  @OneToOne(() => ShowEntity, (show) => show.previous, {
    nullable: true,
  })
  next: ShowEntity | null;

  @ManyToOne(() => FranchiseEntity, (frachise) => frachise.shows)
  @JoinColumn()
  franchise: FranchiseEntity;
}
