const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

/**
 * Cryptoquant BTC Data
 * Bitcoin
 */
const CQStatus = new GraphQLObjectType({
    name: ""
})

const CQExchangeFlows = new GraphQLObjectType({
    name: ""
})

const CQFlowIndicator = new GraphQLObjectType({
    name: ""
})

const CQMarketIndicator = new GraphQLObjectType({
    name: ""
})

const CQNetworkIndicator = new GraphQLObjectType({
    name: ""
})

const CQMinerFlows = new GraphQLObjectType({
    name: ""
})

const CQInterEntityFlows = new GraphQLObjectType({
    name: ""
})

const CQFundData = new GraphQLObjectType({
    name: ""
})

const CQMarketData = new GraphQLObjectType({
    name: ""
})

const CQNetworkData = new GraphQLObjectType({
    name: ""
})
