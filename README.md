# Log-Delay

Log-Delay is a simple Node.js package that allows you to print messages to the console with a customizable delay between each character, and optional newline appending feature. Please use [chalk](https://www.npmjs.com/package/chalk), [color](https://www.npmjs.com/package/colors) or [ansi-colors](https://www.npmjs.com/package/ansi-colors) for adding color to the text.

## Installation

You can install Log-Delay via npm:

```bash
npm install log-delay
```

## Usage

Log-Delay exports a single function that takes an object as a parameter with the following properties:

- `message` (required): The string you want to log.
- `delay` (required): Delay in milliseconds between every character.
- `nextLine` (optional): Will append `\n` after the message so that the next message starts from the next line. By default false.

The function returns a promise that resolves when the whole message has been printed.

```javascript
const logDelay = require('log-delay');

(async () => {
    await logDelay({message: 'This is an awesome package!!', delay: 100, nextLine: true})
    await logDelay({message: ' See you ', delay: 200})
    await logDelay({message: ' soon <3 ', delay: 500, nextLine: true})
})()
```

## Example

```javascript
const logDelay = require('log-delay');
const colors = require('colors');

(async () => {
    await logDelay({message: 'Hello, world!'.red, delay: 50, nextLine: true})
})()
```

This will print "Hello, world!" to the console with each character appearing 50 milliseconds after the previous one, and in red color.

> ***NOTE: It's a good practice to use nextLine true in the last call to the function else you might see a percentage sign on the CLI.***
```
This is an awesome package!!
See you  soon <3 %
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
