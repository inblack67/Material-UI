import { Container } from '@material-ui/core';
import React from 'react';
import Buttons from '../components/Buttons';
import MakeStyles from '../components/MakeStyles';
import Typographies from '../components/Typographies';

const index = () =>
{
  return (
    <Container>
      <Buttons />
      <Typographies />
      <MakeStyles />
    </Container>
  );
};

export default index;
