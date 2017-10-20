export default `
  type Page {
    id: ID!
    slug: String
    content: String
    title: String
  }
  type RootQuery {
    page(slug: String): Page
  }
  schema {
    query: RootQuery
  }
`;
