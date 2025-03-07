import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { DateFieldsEntity } from "./shared.entity";

@Entity()
export class Announcement extends DateFieldsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  headline: string;

  @Column()
  body: string;

  @Column({
    type: "boolean",
    default: false,
  })
  isPublished?: boolean;
}
