import React from 'react';
import propTypes from 'prop-types';
import DefaultLayout from '../../layouts/default';

const Homepage = ({ page }) => (
  <div>
    <DefaultLayout>
      <section>
        <header>
          GraphQl page title: {page.title}
        </header>
        <article>
          <header>
            <h2>The title of Article 1</h2>
          </header>
          <section>
            <p>
              Content of Article 1.
            </p>
          </section>
        </article>
      </section>
      <aside>
        graphQl page content: {page.content}
      </aside>

    </DefaultLayout>
  </div>
);

Homepage.propTypes = {
  page: propTypes.any,
};

export default Homepage;
