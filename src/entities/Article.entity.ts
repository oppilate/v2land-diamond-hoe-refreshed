import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Site } from './Site.entity';
/**
 * This is the article entity used across langchao.org
 */

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  title?: string;

  @Column()
  content?: string;

  @Column()
  abstract?: string;

  @Column()
  source?: string;

  @Column()
  sourceUrl?: string;

  @Column()
  time?: Date;

  @Column()
  html?: string;

  @Column()
  screenshot?: string;

  @Column({ default: 'pending' })
  status: string;

  @OneToMany(
    type => Site,
    siteId => siteId.articles
  )
  siteId: Site;
}
