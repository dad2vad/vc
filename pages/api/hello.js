import { c } from '../../clo'

export default async function handler(req, res) {
	var v = 0

    try {
       v = await c("https://api.telegram.org/file/bot976117495:AAEUmJdnuryTxuX6VETU_rrIq-1nDi6W1lU/photos/file_9.jpg")
    } catch (err) {
        v = err.stack
    }

  res.status(200).json({ name: v })
}
