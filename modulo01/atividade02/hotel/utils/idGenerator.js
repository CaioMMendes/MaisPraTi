







function idGenerator(){
    const timestamp = new Date().getTime()
    const random = Math.floor(Math.random() * 10000)
    return `${timestamp}${random}` 
}


module.exports=idGenerator