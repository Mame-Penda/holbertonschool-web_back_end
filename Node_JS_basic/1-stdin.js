console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const word = process.stdin.read();
    if (word) {
        console.log(`Your name is: ${word.toString().trim()}`);
    }
});

process.stdin.on('end', () => {
    console.log('This important software is now closing');
});
