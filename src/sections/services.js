import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

// import icon1 from 'assets/icons/service-1-1.svg';
// import icon2 from 'assets/icons/service-1-2.svg';
// import icon3 from 'assets/icons/service-1-3.svg';
// import icon4 from 'assets/icons/service-1-4.svg';


import icon1 from 'assets/icons/service1.png';
import icon2 from 'assets/icons/service2.png';
import icon3 from 'assets/icons/service3.png';
import icon4 from 'assets/icons/service4.png';

const SERVICES_DATA = [
  {
    icon: icon1,
    title: 'Hello organized',
    text: 'Minimal keeps everything in its right place, so you’ll always have what you need when you need it. ',
  },
  {
    icon: icon2,
    title: 'Free up time',
    text: 'Sync with your bank and favorite apps, so your books are always accurate and up to date.',
  },
  {
    icon: icon3,
    title: 'Claim everything',
    text: 'Claim every entitlement at tax time with your expense receipts stored and sorted in Minimal. ',
  },
  {
    icon: icon4,
    title: 'Unlimited support',
    text: 'With Minimal free and unlimited customer support, help is always just a click away. ',
  },
];

const Services = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          slogan="Powerful accounting"
          title="Tools for small and growing businesses"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage:
          // 'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)',
          'none',
      },
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage:
          // 'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
          'none',
      },
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage:
          // 'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)',
          'none',
      },
    },
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage:
      // 'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
      'none',
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};
