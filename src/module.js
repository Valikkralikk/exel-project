console.log('Modeule.js');

console.log(process.env.NODE_ENV);

async function start(){
   return await Promise.resolve('ASYNC WORKING!');
}

start().then(console.log);