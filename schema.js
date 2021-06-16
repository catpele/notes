import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
 type Note {
    _id: ID!
    title: String!
    date: Date
    content: String!
    image: String
 }
 
 scalar Date
 
 type Query {
    getNote(_id: ID!): Note 
    allNotes: [Note]
 }

 input NoteInput {
    title: String
    content: String
    image: String
 }

 input NoteUpdateInput {
    title: String
    content: String
    image: String
 }

 type Mutation {
    createNote(input: NoteInput): Note
    updateNote(_id: ID!, input: NoteUpdateInput): Note
    deleteNote(_id: ID!): Note
 }
 `;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;