import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Sobre o Danilo"
        description="Desenvolvedor Front-end Uberlândia"
      />
    }
  >
    <Content>
      <p>Em construção...</p>
    </Content>
  </Main>
);

export default About;
