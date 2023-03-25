import express from 'express'
import getAnswer from '../config/openai.js'

const routes = express.Router()

routes.get('/', (request, response) => {
  response.send('API GPT-4 1.0.0')
})

routes.get('/answer', async (request, response) => {
  const { question } = request.query

  const answer = await getAnswer(question)

  return response.json({ answer })
})

export default routes 