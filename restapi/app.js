const express = require('express');
const app = express();
const data = require('./data');

// Endpoint for retrieving business debt details
app.get('/capacityBusinessDebt/:profileID', (req, res) => {
    const profileID = req.params.profileID;
    const businessDebtDetails = data.getBusinessDebtDetails(profileID);

    if (businessDebtDetails) {
        res.json(businessDebtDetails);
    } else {
        res.status(404).json({ error: 'ProfileID not found' });
    }
});

// Endpoint for retrieving business cashflow details
app.get('/businessCashflow/:profileID', (req, res) => {
    const profileID = req.params.profileID;
    const businessCashflowDetails = data.getBusinessCashflowDetails(profileID);

    if (businessCashflowDetails) {
        res.json(businessCashflowDetails);
    } else {
        res.status(404).json({ error: 'ProfileID not found' });
    }
});

// Endpoint for retrieving personal debt details
app.get('/capacityPersonalDebt/:profileID', (req, res) => {
    const profileID = req.params.profileID;
    const personalDebtDetails = data.getPersonalDebtDetails(profileID);

    if (personalDebtDetails) {
        res.json(personalDebtDetails);
    } else {
        res.status(404).json({ error: 'ProfileID not found' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
