import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('company_id').unsigned().references('id').inTable('companies').nullable()
      table.string('firstName', 50).nullable()
      table.string('lastName', 50).nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.integer('admin').nullable()
      table.string('role', 80).nullable() // 'employee', 'company', or 'happiness_officer'
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
