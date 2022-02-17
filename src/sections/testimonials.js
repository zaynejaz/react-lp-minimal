import React, { useState } from 'react';
import SwiperCore, { Thumbs, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Text, Heading } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import img1 from 'assets/test-1.png';
import img2 from 'assets/test-2.png';
import img3 from 'assets/test-3.png';
import img4 from 'assets/test-3.png';
import img5 from 'assets/test-3.png';

SwiperCore.use([Thumbs, Autoplay]);

const TESTIMONIALS_DATA = [
  {
    image: img1,
    heading: 'Jordan Abbott',
    designation: 'VP of Research Engineering',
    content:
      'The ease of adding vendors and customers is great. Once you iron out the how to of the invoice templates they can be very useful to switch what is needed on each invoice per customer.',
  },
  {
    image: img3,
    heading: 'Adriana Markopoulos',
    designation: 'Head of Technology',
    content:
      'Up time is fantastic and they always send out down alerts immediately. Love the reports to Excel - works great.',
  },
  {
    image: img4,
    heading: 'Lyra Bancroft',
    designation: 'Senior Marketing Manager',
    content:
      'I liked the ease of use and that it provides a sort of tutorial in the program for how to use parts of it. The help chat was also nice to see.',
  },
  {
    image: img5,
    heading: 'Natalia Quinn',
    designation: 'Chief Finance Officer',
    content:
      'Overall I have been happy with Minimal. Quite simply, it does what I need it to do. Track sales and expenses in a way I can easily pull data by varying parameters as needed.',
  },
  {
    image: img2,
    heading: 'James Underwood',
    designation: 'Senior Data Scientist',
    content:
      'Minimal helps keep my small business finances in check with features both simple enough for me to use and robust enough for my CPA to help with during tax season. I cannot imagine going back to manual invoicing, expense, and profit/loss tracking. ',
  },
];

const Testimonials = () => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const infoParams = {
    spaceBetween: 15,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  };
  const contentParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <Container>
        <BlockTitle
          slogan="People love us"
          title="Join 4.5 million global customers"
          styles={styles.blockTitle}
        />
        <Swiper
          id="testimonialsContent"
          thumbs={{ swiper: thumbsSwiper }}
          {...contentParams}
        >
          {TESTIMONIALS_DATA.map((testimonialText, index) => (
            <SwiperSlide key={`testimonial-content-${index}`}>
              <Text sx={styles.testimonialsContent} as="p">
                {testimonialText.content}
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          id="testimonialsInfo"
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
          {...infoParams}
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <SwiperSlide key={`testimonial-info-${index}`}>
              <Image src={testimonial.image} alt="testimonials image" />
              <Heading as="h3">{testimonial.heading}</Heading>
              <Text as="span">{testimonial.designation}</Text>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    pt: ['65px', null, null, null, null, '80px', '170px'],
    '.blockTitle': {
      textAlign: 'center',
      marginBottom: ['25px', null, null, null, null, '50px'],
    },
    '#testimonialsInfo': {
      textAlign: ['center', null, null, null, null, 'left'],
      marginTop: ['30px', null, null, null, '40px', '50px'],
      width: '100%',
      maxWidth: '820px',
      '.swiper-slide': {
        cursor: 'pointer',
        borderTop: [
          '5px solid transparent',
          null,
          null,
          null,
          null,
          '5px solid transparent',
        ],
        position: 'relative',
        paddingLeft: ['0', null, null, null, null, '75px'],
        paddingTop: ['0', null, null, null, null, '25px'],
        paddingBottom: ['0', null, null, null, null, '15px'],
        minHeight: ['auto', null, null, null, null, '50px'],
        '&.swiper-slide-thumb-active': {
          borderColor: 'primary',
        },
      },
      img: {
        borderRadius: '50%',
        display: 'block',
        marginLeft: ['auto', null, null, null, null, '0'],
        marginRight: ['auto', null, null, null, null, '0'],
        marginBottom: ['15px', null, null, null, null, '0'],
        position: ['relative', null, null, null, null, 'absolute'],
        top: ['auto', null, null, null, null, '50%'],
        left: ['auto', null, null, null, null, '10px'],
        mt: ['10px', null, null, null, null, 0],
        transform: [
          'translateY(0)',
          null,
          null,
          null,
          null,
          'translateY(calc(-50% + 8px))',
        ],
      },
      h3: {
        fontSize: ['18px', null, 2, null, 3],
        lineHeight: 1,
        color: 'black',
        display: ['none', null, 'block'],
      },
      span: {
        color: 'text',
        opacity: '0.8',
        fontSize: [15, null, '15px'],
        lineHeight: 1,
        display: 'block',
        display: ['none', null, 'block'],
        marginTop: '10px',
      },
    },
  },
  testimonialsContent: {
    margin: 0,
    fontSize: [2, null, 3, null, 4, '32px', 7],
    color: 'black',
    lineHeight: [2.3, null, 1.8],
    textAlign: 'center',
    fontFamily: 'special',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '820px',
    marginTop: ['0', null, null, null, null, '-15px'],
  },
};
