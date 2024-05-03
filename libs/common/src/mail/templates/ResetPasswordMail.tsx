import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const ResetPassword = (validationCode: string) => (
  <Html>
    <Head />
    <Preview>Your reset code for Pocket Trainer</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={
            'https://www.hollywoodreporter.com/wp-content/uploads/2023/05/GettyImages-115094961-H-2023.jpg?w=1296'
          }
          width="450"
          height="300"
        />
        <Heading style={heading}>
          Your password reset code for Pocket Trainer
        </Heading>
        <Text style={paragraph}>
          This code will only be valid for the next 5 minutes.
        </Text>
        <code style={code}>{validationCode}</code>
      </Container>
    </Body>
  </Html>
);

export default ResetPassword;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '560px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0',
};

const paragraph = {
  margin: '0 0 15px',
  fontSize: '15px',
  lineHeight: '1.4',
  color: '#3c4149',
};

const buttonContainer = {
  padding: '27px 0 27px',
};

const button = {
  backgroundColor: '#5e6ad2',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '11px 23px',
};

const reportLink = {
  fontSize: '14px',
  color: '#b4becc',
};

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px',
};

const code = {
  fontFamily: 'monospace',
  fontWeight: '700',
  padding: '1px 4px',
  backgroundColor: '#dfe1e4',
  letterSpacing: '-0.3px',
  fontSize: '21px',
  borderRadius: '4px',
  color: '#3c4149',
};
