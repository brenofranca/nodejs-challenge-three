const User = require('../models/User')
const Post = require('../models/Post')
const Purchase = require('../models/Purchase')
const Mail = require('../services/Mail')

class PurchaseController {
  async store (req, res) {
    const { post: postId, content } = req.body

    const post = await Post.findById(postId).populate('author')
    const user = await User.findById(req.userId)

    await Mail.sendMail({
      from: 'Breno França <franciscobreno.si@gmail.com>',
      to: post.author.email,
      subject: `Solicitação de Compra: ${post.title}`,
      html: `<h1>${content}</h1>`
    })

    const purchase = await Purchase.create({
      content,
      author: user.id,
      post: post.id
    })

    return res.json(purchase)
  }
}

module.exports = new PurchaseController()
