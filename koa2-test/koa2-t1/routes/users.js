const router = require('koa-router')()
const Person = require('../dbs/models/person')
const Redis = require('koa-redis')

const store =new Redis().client//客户端

router.prefix('/users')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.get('/fix',async function (ctx,next) {
    await store.hset("fix","name",Math.random())//hset-redis的一个方法
    ctx.body={
        code:0
    }
})
router.post('/addPerson', async function (ctx, next) {
    const person = new Person({
        name: ctx.request.body.name,
        age: ctx.request.body.age
    })
    let code
    try {
        await person.save()
        code = 0
    } catch (e) {
        code = -1
    }
    ctx.body = {
        code
    }
})

router.post('/getPerson', async function (ctx, next) {
    const result = await Person.findOne({name: ctx.request.body.name})
    const results = await Person.find({name: ctx.request.body.name})
    ctx.body = {
        code: 0,
        result,
        results,
    }
})

router.post('/updatePerson', async function (ctx, next) {
    await Person.where({name: ctx.request.body.name}).update({
        age:ctx.request.body.age
    })

    ctx.body = {
        code: 0
    }
})

router.post('/removePerson', async function (ctx, next) {
    await Person.where({name: ctx.request.body.name}).remove()

    ctx.body = {
        code: 0
    }
})
module.exports = router
