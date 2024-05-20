import Company from '#models/company'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class CompaniesController {
  async getCompanies() {
    const companies = await Company.all()
    return companies
  }

  async getUser({}: HttpContext) {
    const user = await User.query().preload('company')
    return user
  }
}
