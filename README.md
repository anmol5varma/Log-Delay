# Log-Delay

Log-Delay is a simple Node.js package that allows you to print messages to the console with a customizable delay between each character, and optional color and newline appending features.

## Installation

You can install Log-Delay via npm:

```bash
npm install log-delay
```

## Usage

Log-Delay exports a single function that takes an object as a parameter with the following properties:

- `message` (required): The string you want to log.
- `delay` (required): Delay in milliseconds between every character.
- `colorUnicode` (optional): Unicode for the color in which you want to print the message.
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

(async () => {
    await logDelay({message: 'Hello, world!', delay: 50, colorUnicode: '\x1b[31m'})
})()
```

This will print "Hello, world!" to the console with each character appearing 50 milliseconds after the previous one, and in red color.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
