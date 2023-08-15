const LocalStratagy = require("passport-local").Strategy
const { User } = require("./models");

exports.initializingpassport = (passport) => {
    passport.use(new LocalStratagy(async (username, password, done) => {
        const user = await User.findOne({ username })
        try {
            if (!user) return done(null, false);
            if (user.password !== password) return done(null, false);
            return done(null, user);
        } catch (error) {
            return done(error, user);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    })
}