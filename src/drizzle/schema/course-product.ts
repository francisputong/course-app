import { relations } from 'drizzle-orm';
import { uuid, pgTable, primaryKey } from 'drizzle-orm/pg-core';

import { createdAt, updatedAt } from '../schema-helper';

import { CourseTable } from './course';
import { ProductTable } from './product';

export const CourseProductTable = pgTable(
  'course_products',
  {
    courseId: uuid()
      .notNull()
      .references(() => CourseTable.id, { onDelete: 'restrict' }),
    productId: uuid()
      .notNull()
      .references(() => ProductTable.id, { onDelete: 'cascade' }),
    createdAt,
    updatedAt,
  },
  (t) => [primaryKey({ columns: [t.courseId, t.productId] })],
);

export const CourseProductRelationships = relations(
  CourseProductTable,
  ({ one }) => ({
    course: one(CourseTable, {
      fields: [CourseProductTable.courseId],
      references: [CourseTable.id],
    }),
    products: one(ProductTable, {
      fields: [CourseProductTable.productId],
      references: [ProductTable.id],
    }),
  }),
);
