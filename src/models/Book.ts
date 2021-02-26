import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  pages: number;

  @Column({
    type: 'jsonb',
    array: true,
    nullable: false,
  })
  tags: string[];
}

export default Book;
