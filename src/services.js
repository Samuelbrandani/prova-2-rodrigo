var BILLS_DATA = []

const deleteBill = (req, res) => {
    var id = `${req.params.id}`;
    let valid = false;
    for (let i = 0; i < BILLS_DATA.length; i++) {
        console.log(BILLS_DATA[i].id)
        console.log(id)
        if (id == BILLS_DATA[i].id) {
            BILLS_DATA.splice(i, 1);
            valid = true;
        }
    }

    if (!valid) res.json({ message: "Bill not found" }, 404)
    else res.json({}, 200)
}

const getBills = (req, res) => {
    var customerR = req.query.customer
    var returnData = [];
    for (let i = 0; i < BILLS_DATA.length; i++) {
        if (customerR == BILLS_DATA[i].customer) {
            returnData.push(BILLS_DATA[i])
        }
    }
    if (returnData == "") res.json({ message: "Bill not found" }, 401)
    else res.json({result: returnData}, 200)
}

const newBiils = (req, res) => {
    var body = req.body;

    if (body.amount) res.status(405)
    if (body.produtc) res.status(405)
    if (body.paymentMethod) res.status(405)
    if (body.customer) res.status(405)

    var data = {
        'id': Math.random().toString(36).substr(2, 9),
        'amount': body.amount,
        'produtc': body.produtc,
        'paymentMethod': body.paymentMethod,
        'customer': body.customer,
    }
    BILLS_DATA.push(data)
    res.json({ message: "Bill added with success", bill: data }, 200)

}


module.exports = {
    deleteBill,
    getBills,
    newBiils,
}
