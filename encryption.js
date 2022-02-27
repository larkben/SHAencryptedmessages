const crypto = require ("crypto");

const algorithm = 'aes-192-cbc';

const password = "slows10";

const key = crypto.scryptSync(password, 'GfG', 24);

const iv = Buffer.alloc(16,0);

// Cipher Creation
const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = '';

// Encrypting
cipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = cipher.read())) {
        encrypted += chunk.toString('base64');
    }
});

// Handling Events
cipher.on('end', () => {
    console.log(encrypted);
});

cipher.write('BenWimp');
cipher.end();
console.log("done");