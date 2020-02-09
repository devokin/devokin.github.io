import sgClient from '@sendgrid/client';
import * as dotenv from 'dotenv';

dotenv.config();

sgClient.setApiKey(process.env.SENDGRID_API_KEY || '');

export const sgSubscribe = async (contact: ISgContact) => {

  console.log(contact);
  return sgClient.request({
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: {
      list_ids: [ process.env.SENDGRID_LANDING_SUBSCRIBE_LIST_ID ],
      contacts: [
        {
          email: contact.email,
          first_name: contact.firstName,
          last_name: contact.lastName,
          custom_fields: {
            'e1_T': contact.message
          },
        },
      ],
    },
  });
};

export interface ISgContact {
  email: string;
  firstName: string;
  lastName: string
  message: string;
}
