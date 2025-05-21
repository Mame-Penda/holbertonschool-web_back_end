console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const name = std.stdin.read();
    if (name) {
        process.stdout.write(`Your name is: ${name.toString()}`);
    }
});

process.stdin.on('end', () => {
    console.log('This important software is now closing');
});
