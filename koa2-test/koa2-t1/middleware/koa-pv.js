function pv(ctx){
    ctx.session.count++
    global.console.log("pv")
}
module.exports=function(){
    return async function(ctx,next){
        global.console.log("pv start")
        pv(ctx)
        await next()
        global.console.log("pv end")
    }
}