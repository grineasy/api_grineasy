import { HttpContext } from '@adonisjs/core/http'

export default class MessagesController {
  async sendMessage({ request, auth }: HttpContext) {
    const user = await auth.authenticate()
    const rolesAllowed = ['employee', 'happiness_officer']

    if (!rolesAllowed.includes(user.role)) {
      return { status: 'error', message: "Vous n'avez pas la permission d'envoyer des messages." }
    }

    // Récupération des données du message à partir de la requête
    const { content } = request.only(['content'])

    // Création d'un nouveau message
    const message = await Database.table('messages').insert({
      userId: user.id,
      content,
      sentAt: new Date(),
    })

   // Retourner une réponse réussie
    return {
      status: 'success',
      message: 'Votre message a été envoyé avec succès.',
      messageId: message.id,

  }
}
