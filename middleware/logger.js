import colors from 'colors'
const logger = (req, res, next) => {
   const colorsmethod = {
      GET: 'green',
      POST: 'blue',
      PUT: 'yellow',
      DELETE: 'red'
   }

   const colors = colorsmethod[req.method]
   console.log(`${req.method} ${req.protocol}://${req.get('host')}:${req.originalUrl}`[colors]);
   next();
}

export default logger;