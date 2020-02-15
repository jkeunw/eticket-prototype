let query = "SELECT * FROM events";

        db.query(query, (err, result) => {
            if (err) throw err;
            console.log (result);
});