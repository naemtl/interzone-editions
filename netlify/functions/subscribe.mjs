import axios from 'axios';

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { email } = JSON.parse(event.body);

  const API_URL = `https://emailoctopus.com/api/1.6/lists/1a39cd28-7af0-11ef-a82c-77b26b012851/contacts`;
  const API_KEY = process.env.EMAIL_OCTOPUS_API_KEY;

  const data = {
    email_address: email,
    api_key: API_KEY,
  };

  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    if (response.status === 200) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Success! We'll be in touch." }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Something went wrong. Please try again.' }),
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error. Please try again later.' }),
    };
  }
};