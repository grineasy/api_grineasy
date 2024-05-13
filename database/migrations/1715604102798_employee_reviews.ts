import { BaseSchema } from '@adonisjs/lucid/schema'

export default class EmployeeReviews extends BaseSchema {
  protected tableName = 'employee_reviews'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('user_id').notNullable()
      table.integer('comment').notNullable()
      table.integer('id_ company').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
