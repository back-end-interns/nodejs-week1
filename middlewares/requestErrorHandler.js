const errorRequest = (app) => {
    app.use((err, req, res, next) => {
        if(err && err.error.isJoi) {
            //we had a joi error, let's return a custom 400 json response
            const { details } = err.error;
            const e = [];

            details.map(err => {
                e.push(err.message.replace(/"/g,''))
                console.log(err.message);
            })
            console.log(e);
            res.status(400).json({
                errors: e
            });
        } else {
            //pass on to another error handler
            next(err);
        }
    })
}