const cloudinary = require('../../lib/cloudinary').v2
cloudinary.config({
  cloud_name: "o8", 
  api_key: "297669472464919",
  api_secret: "6wTepNTccnHrzVOq0Wyu_UedQEY"
})
 var c = async x => await cloudinary.uploader.upload(x,
    {transformation: [
      {
        gravity: "north",
        width: 700,
        overlay: {
          font_family: "Yanone Kaffeesatz",
          font_size: 42,
          font_weight: "bold",
          text_align: "center",
          text: "Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%20adipisicing%20elit%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%20ex%20ea%20commodo%20consequat."
        },
        color: "#80ffa2",
        crop: "fit"
      }
      ]}
    )  .then( r => "https://res.cloudinary.com/o8/" + r.public_id )
  .catch( err => {
    console.error(err)
  })

export default async function handler(req, res) {
  var q = req.query
  q = q.i || ''
  if(!q) res.status(200)
   
    try {
      q = await c(`https://${q}`)//bot976117495:AAEUmJdnuryTxuX6VETU_rrIq-1nDi6W1lU/photos/file_9.jpg
    } catch (err) {
        q = err.stack
    }
  res.status(200).json([q])
}