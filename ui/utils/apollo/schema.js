export default `
  type Page {
    id: ID!
    slug: String
    consten: String
  }
  type RootQuery {
    getPage(slug: String): Page
  }
  schema {
    query: RootQuery
  }
`;
