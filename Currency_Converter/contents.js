var http = require('http'); 

  
export default async function handler(req, res) {
    res.status(200).json({ number: 1 , name: 'John'})
}