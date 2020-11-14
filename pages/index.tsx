import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import Buttons from '../components/Buttons';
import MakeStyles from '../components/MakeStyles';
import Typographies from '../components/Typographies';
import Link from 'next/link';

const index = () =>
{
  return (
    <Container>
      <Button color='secondary' variant='contained'>
        <Link href='/products'>
          <a>
            <Typography component='span'>
              Products
            </Typography>
          </a>
        </Link>
      </Button>
      <Buttons />
      <Typographies />
      <MakeStyles />
    </Container>
  );
};

export default index;
