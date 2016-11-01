// ---------------------------------------------------------------------------
// global module ..
// ---------------------------------------------------------------------------
import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon';
import requestLogger from 'morgan';
import session from 'express-session';
import bodyParser from 'body-parser';

// ---------------------------------------------------------------------------
// router
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// server
// ---------------------------------------------------------------------------

const clientPath = path.join(__dirname, '/../../client/dist');
const app = express();

var sessionOpt = {
  secret: '@#!@)($)*@#$)(#@$)(!@$*)',
  resave: false,
  saveUninitialized: false,
  cookie: {
   httpOnly: true,
   maxAge: 60000,
  }
};

// ---------------------------------------------------------------------------
// middleware
// ---------------------------------------------------------------------------

app.use(session(sessionOpt));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(clientPath));

if (app.get('env') === 'development') {
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(clientPath, 'index.html'));
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json(err);
});


// ----------------------------------------------------------------------------
// start server
// ----------------------------------------------------------------------------
const port = 3000;
const server = app.listen(port, () => {
  console.log(app.get('env') === 'development'? '--development': '--production');
  console.log('Server is listening on port : ', port);
});
