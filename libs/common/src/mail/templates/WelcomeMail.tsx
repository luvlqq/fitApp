import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const WelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>You're now ready to make live with Pocket Trainer!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Hr style={hr} />
          <Img
            src="https://www.body-burn.com/wp-content/uploads/2024/01/sam-sulek-biographie.webp"
            width="450"
            height="300"
          />
          <Text style={paragraph}>
            Thanks for register! You're now ready to make live with Pocket
            Trainer!
          </Text>
          <Text style={paragraph}>
            You can view your progress and a lot of other information about you
            in your dashboard.
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            We'll be here to help you with any step along the way.
          </Text>
          <Text style={paragraph}>— The Pocket Trainer Team</Text>
          <Hr style={hr} />
          <Text style={footer}>Pocket Trainer, Grodno, Belarus</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const anchor = {
  color: '#556cd6',
};

const button = {
  backgroundColor: '#656ee8',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '10px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
