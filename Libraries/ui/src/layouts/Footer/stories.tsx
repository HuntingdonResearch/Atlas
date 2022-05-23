import React from 'react';
import Content from '../../elements/Content';
import Footer from '../../layouts/Footer';

export default {
  component: Footer,
  title: 'Layouts/Footer'
};

export const Simple = () => (
  <Footer>
    <Content className="has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </Content>
  </Footer>
);
