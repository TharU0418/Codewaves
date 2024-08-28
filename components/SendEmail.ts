import emailjs from 'emailjs-com';

interface EmailData {
  to_name: string;
  from_name: string;
  message: string;
}

const SendEmail = (data: EmailData): void => {
  const templateParams = {
    user_name: data.to_name,
    user_email: data.from_name,
    message: data.message,
  };

  const emailS = (): void => {
    emailjs
      .send('service_ontktoq', 'template_4f6u0ij', templateParams, '-CmWWrjwvAinlS-nm')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  emailS();
};

export default SendEmail;
