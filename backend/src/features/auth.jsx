const jwt = require('jsonwebtoken');
const SECRET_KEY='school';


// Function to generate JWT
exports.generateToken=(payload) =>{
    console.log(jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }))
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
}

// Function to verify JWT
exports.verifyToken=(token)=> {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return { isValid: true, decoded };
    } catch (error) {
        return { isValid: false, error: 'Invalid token' };
    }
}

// Example usage
// const payload = { username: 'example_user', role: 'admin' };
// const token = generateToken(payload);
// console.log('Generated Token:', token);

// const verificationResult = verifyToken(token);
// if (verificationResult.isValid) {
//     console.log('Token is valid. Decoded payload:', verificationResult.decoded);
// } else {
//     console.error('Token verification failed:', verificationResult.error);
// }
