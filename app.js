const express = require('express');
const app = express();
const ExpressError = require('./expressError');

// Parse request bodies for JSON 
app.use(express.json());

const companyRoutes = require('./routes/companies');
const invoiceRoutes = require('./routes/invoices');
app.use("/companies", companyRoutes);
app.use("/invoices", invoiceRoutes);

// 404 Handler 
app.use((req, res) => {
    const err = new ExpressError("Not Found", 404);

    // pass err to the next middleware
    return next(err);
});

// generic error handler 
app.use((err, req, res, next) => {
    // the default status is 500 Internal Server Error 
    let status = err.status || 500;

    // set the status and alert the user 
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
});



module.exports = app;