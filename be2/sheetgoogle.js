import { google } from 'googleapis';
import key from '../be2/secrets.json' assert{type: 'json'};


export const SHEET_ID = '1HcvQj9dEcavmjp92LtbhVeXTwOZyQlTXhRvkEMhfO_Q';

const client = new google.auth.JWT(key.client_email, null, key.private_key, 
    ['https://www.googleapis.com/auth/spreadsheets']);

const sheets = google.sheets({ version: 'v4', auth: client });

export default sheets;
