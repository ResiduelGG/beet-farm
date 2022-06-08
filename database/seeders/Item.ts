import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Item from 'App/Models/Item'

export default class extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    const uniqueKey = 'name'

    await Item.updateOrCreateMany(uniqueKey, [
      {
        name: 'Bull’s Blood',
      },
      {
        name: 'Detroit Dark Red',
      },
      {
        name: ' Sangria',
      },
      {
        name: 'Sweetheart',
      },
      {
        name: 'Forono',
      },
      {
        name: 'Early Wonder Tall Top',
      },
      {
        name: 'Ruby Queen',
      },
      {
        name: 'Mammoth Red Mangel Beet',
      },
      {
        name: 'Warrior',
      },
      {
        name: 'Red Ace',
      },
      {
        name: 'Pacemaker',
      },
      {
        name: 'Little Ball',
      },
      {
        name: 'Baby Beat',
      },
      {
        name: 'Green Top Bunching',
      },
      {
        name: 'Giant Yellow Eckendorf Beet',
      },
      {
        name: 'Sugar Beets',
      },
      {
        name: 'Cylindria',
      },
      {
        name: 'Touchstone Gold',
      },
      {
        name: 'Golden',
      },
      {
        name: 'Chioggia',
      },
    ])
  }
}
