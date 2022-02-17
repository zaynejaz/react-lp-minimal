/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
export default function Footer() {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        backgroundColor: '#fff',
      }}
    >
      <Container
        sx={{
          variant: 'layout.toolbar',
          justifyContent: ['center', null, null, 'space-between'],
          flexDirection: ['column', null, null, null, 'row'],
          paddingTop: [30, 40],
          paddingBottom: [30, 65],
        }}
      >
        <Box sx={styles.left}>
          <Logo />
          <Text as="p">
            &copy; {new Date().getFullYear()} Zayn Ejaz
          </Text>
        </Box>
        <Box sx={styles.right}>
          <Link path="/" label="Home" />
          <Link path="/" label="Products" />
          <Link path="/" label="Features" />
          <Link path="/" label="Resources" />
          <Link path="/" label="Support" />
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  left: {
    display: 'flex',
    flexDirection: ['column', 'column', 'column', 'column', 'row'],
    alignItems: 'center',
    p: {
      fontSize: [0, 1],
      color: 'black',
      opacity: 0.6,
      mt: ['10px', null, '0'],
    },
  },
  right: {
    display: ['none', null, null, null, 'flex'],
    fontSize: 2,
    alignItems: 'center',
    color: 'black',
    a: {
      transition: '500ms',
      '&:hover': {
        color: 'primary',
      },
    },
    'a+a': {
      marginLeft: '30px',
    },
  },
};
