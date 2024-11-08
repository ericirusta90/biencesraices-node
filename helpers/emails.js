import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    
    const {email, nombre, token} = datos;

    //Enviar el Email
    await transport.sendMail({
      from: 'eric.river90@gmail.com',
      to: email,
      subject: 'Confirma tu cuenta en bienesraices.com',
      text: 'Confirma tu cuenta en bienesraices.com',
      html: `
            <p>Hola ${nombre}, comprueba tu cuenta en BienesRaices.com </p>

            <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
            <a href="${process.env.BACKEND_URL}/auth/confirmar/${token}">Confirmar cuenta</a> </p>

            <p>Si tu no creast esta cuenta, puedes ignorar el mensaje</p>
            `
    })
     
}


const emailOlvidePassword = async (datos) => {

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

  
  const {email, nombre, token} = datos;

  //Enviar el Email
  await transport.sendMail({
    from: 'eric.river90@gmail.com',
    to: email,
    subject: 'Reestablece tu password en bienesraices.com',
    text: 'Reestablece tu password en bienesraices.com',
    html: `
          <p>Hola ${nombre}, has solicitado reestablecer tu password en BienesRaices.com </p>

          <p>Sigue el siguiente enlace para generar un password nuevo:
          <a href="${process.env.BACKEND_URL}/auth/olvide-password/${token}">Reestablecer password</a> </p>

          <p>Si tu no solicitaste el cambio de password, puedes ignorar el mensaje</p>
          `
  })
   
}

export{
    emailRegistro,
    emailOlvidePassword
}