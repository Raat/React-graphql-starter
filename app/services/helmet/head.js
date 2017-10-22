import React from 'react';
import { Helmet } from 'react-helmet';
import propTypes from 'prop-types';

const Head = ({ title }) => (
  <div className="application">
    <Helmet>
      <meta httpEquiv="content-type" content="text/html" />
      <meta charSet="utf-8" />
      <title>{title || 'React starter'}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  </div>
);

Head.propTypes = {
  title: propTypes.string,
};
export default Head;
