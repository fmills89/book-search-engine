const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const resolvers = {
    Query: {
        helloWorld : () => {
            return 'Hello World';
        }
    }
};

module.exports = resolvers;