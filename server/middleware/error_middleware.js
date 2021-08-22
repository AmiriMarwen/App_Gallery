// not found middleware custom
const notFound = (req, res, next) => {
  const error = new Error(`404 Error | ${req.originalUrl} Url is Not Found ! ☹ `);
  res.status(404);
  next(error);
}

// next error middleware
const errorHundler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message : error.message ,
    stack: error.stack ,
  })
}

module.exports = {notFound , errorHundler}
