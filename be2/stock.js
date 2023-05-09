import express from 'express';
import { z } from 'zod';

import sheets, { SHEET_ID } from './sheetgoogle.js'

const app = express();

const userProduct = z.object ({         // he used 'contactFormSchema'

    brand: z.string().min(1, { message: 'Brand is required'}),
    price: z.number().min(1, { message: 'Price is required'}),
    model: z.string().min(1, { message: 'Model is required'}),
    years: z.number().min(1, { message: 'Year is required'}),
    kms: z.number().min(1, { message: 'Kms are required'}),
    fuel: z.string().min(1, { message: 'Fuel is required'}),
    description: z.string(),
    email: z.string().email(),


})
app.use(express.json());

app.use(express.static('public'));

//POST
app.post('/send-message', async (req, res)=>{

    try{
        const body = userProduct.parse(req.body);

        // Object to sheets
        const rows = Object.values(body)

console.log(rows);


        await sheets.spreadsheets.values.append({

           spreadsheetId: SHEET_ID,
           range: 'stock !B:I', 
           insertDataOption: 'INSERT_ROWS',
           valueInputOption: 'RAW',
           requestBody: {
            values: [rows]
           }
        });

        res.json({ message: 'Data added sucessfully'});

    } catch (error) {

        if (error instanceof ZodError) {
            res.status(400).json({ error: error.message })
        }
    }
});

app.listen(5000, ()=> console.log('App running'));