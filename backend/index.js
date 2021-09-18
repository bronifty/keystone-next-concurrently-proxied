require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'keystone';
const adapterConfig = { DATABASE_URL: process.env.DATABASE_URL };
const PostSchema = require('./lists/Post');
const UserSchema = require('./lists/User');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret:
    'Cooooooooooooooooooooooookkkkkkkkkkkkiiiiiiiiiieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
});

keystone.createList('Post', PostSchema);
keystone.createList('User', UserSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email',
    secretField: 'password',
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
      isAccessAllowed: ({ authentication: { item: user } }) => {
        console.log(user);
        return !!user && !!user.isAdmin;
      },
    }),
  ],
  configureExpress: (app) => {
    app.set('trust proxy', true);
  },
};
