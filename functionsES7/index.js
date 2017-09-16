import * as functions from 'firebase-functions'

exports.check = functions.https.onRequest((request, response) => {
  response.json({ status: true })
})
