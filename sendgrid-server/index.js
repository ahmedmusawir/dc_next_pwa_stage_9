/* 
* Author: Da Moose
* Date: 18 Jan 2018
* Install Dependencies, run the statement from below: 
* "yarn add express cors @sendgrid/mail" 
* To run server use the statement below: 
* 'nodemon index.js'
* 
MAKE SURE YOU HAVE NODEMON Installed! 
For Reference check here: https://www.npmjs.com/package/nodemon 
*/
require('dotenv/config');
const express = require('express'); //needed to launch server
const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails

const app = express(); //alias from the express function

// console.log(process.env.SENDGRID_API_KEY);
//sendgrid api key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server:
app.get('/', (req, res) => {
	res.send('Welcome to the Sendgrid Emailing Server');
});

app.get('/send-email', (req, res) => {
	//Get Variables from query string in the search bar
	const { recipient, sender, topic, text } = req.query;

	//Sendgrid Data Requirements
	const msg = {
		to: recipient,
		from: sender,
		subject: topic,
		text: text,
	};

	//Send Email
	sgMail
		.send(msg)
		.then(msg => {
			console.log(text);
			console.log('Email Send Successful');
		})
		.catch(function(error) {
			// console.log(error);
			console.log('Email Send Failed');
		});
});

// to access server run 'node index.js' then click here: http://localhost:4567/
app.listen(4567, () => console.log('Running on Port 4567'));
