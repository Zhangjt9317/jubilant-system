const { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
  } = require('graphql');


const axios = require('axios');

const GLIndicatorType = new GraphQLObject({
  name: "GLIndicators",
  fields: () => ({
    timestamp: {type: GraphQLInt},
    value: {type: GraphQLInt}
  })
})


const CQIndicatorType = new GraphQLObject({
  name: "CQIndicators",
  fields: () => ({

  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType"
})