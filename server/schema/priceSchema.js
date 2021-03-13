const graphql = require('graphql');
const _ = require('lodash');
const Price = require('../models/price');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');


const BookType = new GraphQLObjectType({
  name: "Book",

})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",

})

const Mutation = new GraphQLObjectType({

})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});