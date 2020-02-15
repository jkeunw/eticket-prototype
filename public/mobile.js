module.exports = {
    getTicketContent: (req, res) => {
        let queryEvnets = "SELECT * FROM events";

        db.query(queryEvents, (err, result) => {
            if (err) throw err;
            res.render('mobile.ejs', {title: Smart-Ticket, content: result});
        });
    }
}