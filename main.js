/**
 * 
 * @param {object} config - object with all the details for the log.
 * @param {string} message config.message - The string you want to log.
 * @param {number} delay config.timeout - Delay in milliseconds between every character.
 * @param {string} colorUnicode config.colorUnicode - Unicode for the color in which you want to print the message.
 * @param {boolean} nextLine config.nextLine - Will append \n after the message so that the next message starts from next line. By default false
 * @returns {Promise} Promise resolves when the whole message has been printted.
 */

const streamWrite = async ({ message, delay, colorUnicode, nextLine }) => {
    return new Promise((res) => {
        let i = 0;
        const endInterval = setInterval(() => {
            process.stdout.write(message[i++]);
            if (i === message.length) {
                process.stdout.write(`${nextLine ? '\n' : ''}`)
                res('Done');
                clearInterval(endInterval)
            }
        }, delay);
    })
}

module.exports = streamWrite