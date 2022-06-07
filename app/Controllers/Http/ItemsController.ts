import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Item from 'App/Models/Item'

export default class ItemsController {
  public async index() {
    return Item.all()
  }

  public async store({ request, response }: HttpContextContract) {
    Item.create({ name: request.input('name') })

    return response.status(201).json({ success: true })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const itemId = request.param('id')
    const item = await Item.findOrFail(itemId)

    item.delete()

    response.json({ success: true })
  }
}
