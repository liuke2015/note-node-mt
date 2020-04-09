const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.cookies.set("t1",Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 22!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookies:ctx.cookies.get("t1")
  }
})

module.exports = router
