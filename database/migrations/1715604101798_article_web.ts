import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ArticleWeb extends BaseSchema {
  protected tableName = 'article_web'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.bigInteger('user_id').notNullable()
      table.string('title').notNullable()
      table.string('content').notNullable()
      table.string('image').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
