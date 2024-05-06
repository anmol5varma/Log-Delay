const logger = require('./index');

(async () => {
    await logger({message: 'This is an awesome package!!', delay: 100, nextLine: true})
    await logger({message: ' See you ', delay: 200})
    await logger({message: ' soon <3 ', delay: 500, nextLine: true})
})()