
const withData = gql`
  query getPage {
    page(slug: "homepage") {
      title
      content
    }
  }
`;

export default withData;
