export const welcomeMessage = () => 
`Hello,

I are thrilled to welcome to my blog subscription! 🎉

Thank you for connecting.

Best regards,

Brenden King
Software Engineer
website: ${process.env.PERSONAL_WEBSITE}
email: ${process.env.NM_USER}`;

export const contactMessage = (
    firstName: string, 
    lastName: string, 
    message: string) => 
    `New submission from ${firstName} ${lastName}:
    ${message}`;