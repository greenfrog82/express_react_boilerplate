import passport from 'passport';
import LocalStrategy from 'passport-local';

export default function(app) {
    app.use(passport.initialize());
    app.use(passport.session());
}

export const localAuth = function(successUrl, failUrl) {
  return passport.authenticate(
    'local',
    {
      successRedirect: successUrl,
      failureRedirect: failUrl,
      failureFlash: true
    }
  );
};

passport.serializeUser(function(user, done) {
    console.log('authenticator.serializeUser > ', user);
    done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('authenticator.deserializeUser > ', user);
    done(null, user);
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('authenticator.LocalStrategy > ', username + ' : ' + password);

    if('greenfrog' === username && '1234' === password) {
      return done(null, {id:username});
    } else {
      if('greenfrog' !== username) {
        console.log('authenticator.Local Strategy > Wrong id');
         return done(null, false, { message: 'Incorrect username.' });
      } else {
        console.log('authenticator.Local Strategy > Wrong password');
        return done(null, false, { message: 'Incorrect password.' });
      }
    }
  }
));
