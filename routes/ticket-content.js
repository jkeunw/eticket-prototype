module.exports = {
   getContent: (req, res) => {
      let query = "SELECT * FROM events, seats";
      db.query(query, (err, result) => {
         if (err) throw err;         
         res.render('smart-ticket.ejs', { events: result, seats: result });
      });       
   },   
};