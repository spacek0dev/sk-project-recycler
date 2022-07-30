import * as bcrypt from 'bcrypt';
const saltOrRounds = 10;
const encryptPassword = async (password) => {
    return await bcrypt.hash(password, saltOrRounds);
}

const validatePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}

export { encryptPassword, validatePassword }