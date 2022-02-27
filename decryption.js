const crypto = require ("crypto");

const algorithm = 'aes-192-cbc';

const password = "slows10";

const key = crypto.scryptSync(password, 'GfG', 24);

const iv = Buffer.alloc(16,0);

// Cipher Creation
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = '';

decipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = decipher.read())) {
        decrypted += chunk.toString('utf8');
    }
});

decipher.on('end', () => {
    console.log(decrypted);
});

const encryptedHash = 'W3OqzmnhuR/aAGIMozd12Q==';

decipher.write(encryptedHash, 'base64');
decipher.end();

console.log("done");

