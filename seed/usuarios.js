import bcrypt from 'bcrypt';

const usuarios =  [{
    nombre: 'Eric',
    email: 'eric@eric.com',
    confirmado: 1,
    password: bcrypt.hashSync('password', 10)

}]

export default usuarios;