console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const word = process.stdin.read();  // ✅ Correction ici
    if (word) {
        console.log(`Your name is: ${word.toString().trim()}`); // Ajoute .trim() pour retirer le retour à la ligne
    }
});

process.stdin.on('end', () => {
    console.log('This important software is now closing');
});
