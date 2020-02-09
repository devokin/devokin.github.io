import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export const sendEmail = async (templateId: string, to: string, dynamicTemplateData: object) => {
    sgMail.send({
        templateId,
        dynamicTemplateData,
        to,
        from: `${process.env.SENDGRID_SENDER_EMAIL}`,
    });
};
