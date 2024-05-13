import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.bigInteger('id_company').nullable()
      table.string('firstName', 50).notNullable()
      table.string('lastName', 50).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.integer('admin').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
