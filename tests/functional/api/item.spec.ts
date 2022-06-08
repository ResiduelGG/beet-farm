import { test } from '@japa/runner'
import Item from 'App/Models/Item'

const testItemName = 'Beet123'

test.group('Api items', () => {
  test('create an item', async ({ client }, done) => {
    const response = await client.post('/items').json({ name: 'Beet123' }).send()

    response.assertAgainstApiSpec()
    response.assertBodyContains({ success: true })

    done()
  }).waitForDone()

  test('get all items', async ({ client }, done) => {
    const response = await client.get('/items')

    response.assertAgainstApiSpec()

    done()
  }).waitForDone()

  test('delete test item', async ({ client }) => {
    const item = await Item.findBy('name', testItemName)
    const response = await client.delete(`/items/${item?.id}`)

    response.assertAgainstApiSpec()
    response.assertBodyContains({ success: true })
  })
})
