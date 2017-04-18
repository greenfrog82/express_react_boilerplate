// ---------------------------------------------------------------------------
// global module ..
// ---------------------------------------------------------------------------
import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon';
import requestLogger from 'morgan';
// import session from 'express-session';
import bodyParser from 'body-parser';
//import connectRedis from 'connect-redis';
import flash from 'connect-flash';

// ---------------------------------------------------------------------------
// biz module ..
// ---------------------------------------------------------------------------
import authInitializer from './auth/authenticator';

// ---------------------------------------------------------------------------
// router
// ---------------------------------------------------------------------------
import {login, logout, loginSuccess, loginFail} from './router/auth';

// ---------------------------------------------------------------------------
// server
// ---------------------------------------------------------------------------

// const clientPath = path.join(__dirname, '/../../view/dist');
const app = express();
// const redisStore = connectRedis(session);

// var sessionOpt = {
//   secret: '@#!@)($)*@#$)(#@$)(!@$*)',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//    httpOnly: true,
//    maxAge: 3600000,
//   },
//   store: new redisStore({host: 'localhost', port: 6379})
// };
//
// ---------------------------------------------------------------------------
// middleware
// ---------------------------------------------------------------------------

// app.use(session(sessionOpt));
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   console.log('--- Session Checker Middleware');
//   console.log('--- Session ID : ', req.session.id);
//   console.log(req.session);
//   console.log('--- --------------------------');
//   next();
// });
// app.use('/', express.static(clientPath));
// authInitializer(app);
// app.use('/auth', login);
// app.use('/auth', logout);
// app.use('/auth', loginSuccess);
// app.use('/auth', loginFail);
app.get('/', (req, res) =>{
  console.log('/text');
  res.json({
    msg: '[ECHO] ' + req.query.msg
  });
});
// if (app.get('env') === 'development') {
//   console.log('--- Setting Proxy Middleware');
//   app.get('*', (request, response) => {
//     console.log('proxy *');
//     response.sendFile(path.join(clientPath, 'index.html'));
//   });
// }
//
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('404');
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(function(err, req, res, next) {
  console.log('error handlers');
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
