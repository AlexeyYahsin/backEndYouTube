import request from 'supertest'
import { app } from '../../src'

describe('/course', () => {
    beforeAll(async () => {
        await request(app).delete('/...test.../data')
    })

    it('should return 200 and empty array', async () => {
        await request(app)

        .get('/courses')
        .expect(200, [
            { id: 1, title: "front-end" },
            { id: 2, title: "back-end" },
            { id: 3, title: "automation qa" },
            { id: 4, title: "devops" },
          ])
    })

    it('should return 404 for not existing course', async () => {
        await request(app)

        .get('/courses/1')
        .expect(404)
    })
})