const client = require('./init_redis');

const incr = key => {
    // return new Promise( (resolve, reject) => {
    //     client.incr( key , (err, result)=> {
    //         console.log('hehe');
    //         if(err) return reject(err);
    //         resolve(result);

    //     })   
    // })

    return new Promise(resolve =>{
       resolve(client.incr( key))
    })
}

const expire = (key, ttl) => {
    // return new Promise( (resolve, reject) => {
    //     client.expire( key, ttl, (err, result)=> {
    //         console.log('hehe');
    //         if(err) return reject(err);
    //         resolve(result);
    //     })   
    // })

    return new Promise(resolve =>{
        resolve(client.expire( key, ttl))
     })
}

const ttl = (key) =>{
    // return new Promise( (resolve, reject) => {
    //     client.ttl( key , (err, ttl)=> {
    //         console.log('hehe');
    //         if(err) return reject(err);
    //         resolve(ttl);
    //     })   
    // })

    return new Promise(resolve =>{
        resolve(client.ttl( key))
     })
}

module.exports = {
    incr,
    expire,
    ttl
}

