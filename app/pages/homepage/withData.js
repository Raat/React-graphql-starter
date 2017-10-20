import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import propTypes from 'prop-types';
import Homepage from './homepage';

const withData = gql`
  query getHomepage {
    page(slug: "homepage") {
      title
      content
    }
  }
`;

const HomepageWithData = ({ data: { loading, error, page } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return <Homepage page={page}/>;
};

HomepageWithData.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool,
    error: propTypes.object,
    Trainer: propTypes.object,
  }).isRequired,
};


export default graphql(withData)(HomepageWithData);
