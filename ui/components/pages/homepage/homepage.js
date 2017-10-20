import React from 'react';
import DefaultLayout from '../../layouts/default';

const Homepage = () => (
  <div>
    <DefaultLayout>
      <section>
        <article>
          <header>
            <h2>The title of Article 1</h2>
            <p>
              Content of Article 1.</p>
          </header>

          <header>
            <h2>The title of Article 2</h2>
            <p>
              Content of Article 2.</p>
          </header>
        </article>

      </section>

      <aside>
        <h2>
          Section Tite.
        </h2>
        <p>
          Content of the section.
        </p>
      </aside>

    </DefaultLayout>
  </div>
);

export default Homepage;
