// Crypto Module
const crypto = require ("crypto");

const algorithm = 'aes-192-cbc';

const password = "timeless";

const key = crypto.scryptSync(password, 'GfG', 24);

const iv = Buffer.alloc(16,0);

// Cipher Creation
const cipher = crypto.createCipheriv(algorithm, key, iv);

//Decipher
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = '';

let encrypted = '';

// Encrypting
cipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = cipher.read())) {
        encrypted += chunk.toString('base64');
    }
});

// Reading Data
decipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = decipher.read())) {
        decrypted += chunk.toString('utf8');
    }
});

// Handling Events
cipher.on('end', () => {
    console.log(encrypted);
});

decipher.on('end', () => {
    console.log(decrypted);
});

cipher.write('JordanWimp');
cipher.end();

const encryptedHash = 'MIid5Gmb42NDl8egVjTDew==';

decipher.write(encryptedHash, 'base64');
decipher.end();

console.log("done");
