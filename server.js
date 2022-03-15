const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer')
const app = express()
const port = process.env.PORT || 3000

const pathname=path.join(__dirname + "/public")

app.use(express.static(pathname))
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.sendFile(path.join(pathname + "/index.html"));
})


app.post('/joinform', (req, res) => {
    let transporter1 = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "infobility.ca@gmail.com" , 
            pass: "bbwgkfhwqzpwxxgk" 
        }
    });
    let mailOptions1 = {
        from: 'rupinvijan@gmail.com', 
        to: `rupinvijan@gmail.com `, 
        subject: 'Join Now form response',
        html: `<h2>We will contact you as soon as possible! Thanks for your interest!</h2> <br><br>  <p>First-Name: ${req.body['first-name']} <br> Last-Name: ${req.body['last-name']} <br> Email: ${req.body.email}<br>  Phone Number : ${req.body.phone} <br> Loan Range: ${req.body['loan-range']} <br>Credit Score: ${req.body.CreditScore} <br> Location: ${req.body.location} <br> privateLandingRequired: ${req.body.privateLandingRequired} </p> `
    };
    transporter1.sendMail(mailOptions1, (err, data) => {
        if (err) {
            res.send({err})
            return log('Error occurs');
        }
        else{  
            res.redirect("/");
        }
    });
})

app.post('/contactform', (req, res) => {
    let transporter1 = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "infobility.ca@gmail.com" , 
            pass: "bbwgkfhwqzpwxxgk" 
        }
    });
    let mailOptions1 = {
        from: 'rupinvijan@gmail.com', 
        to: `rupinvijan@gmail.com `, 
        subject: 'Contact form response',
        html: `<h2>We will contact you as soon as possible! Thanks for your interest!</h2> <br><br>  <p>First-Name: ${req.body['first-name']} <br> Last-Name: ${req.body['last-name']} <br> Email: ${req.body.email}<br>  Phone Number : ${req.body.phone} <br> Message: ${req.body.message}  </p> `
    };
    transporter1.sendMail(mailOptions1, (err, data) => {
        if (err) {
            res.send({err})
            return log('Error occurs');
        }
        else{  
            res.redirect("/");
        }
    });
})



app.listen(port, () => {
    console.log(`Your app listening at http://localhost:${port}`)
})