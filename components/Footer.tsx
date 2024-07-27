import { Container, Anchor } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        Built by&nbsp;<Anchor
            href='https://twitter.com/henriwoodcock'
            c='inherit'
            underline='always'
            target='_blank'
        >Henri Woodcock</Anchor>
      </Container>
    </div>
  );
}
