import * as React from 'npm:react@18.3.1'
import { Body, Container, Head, Heading, Html, Preview, Section, Text } from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
}

const ContactConfirmation = ({ name = '' }: Props) => (
  <Html lang="en">
    <Head />
    <Preview>Thanks for your message. I will reply within 24 hours.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Message received</Heading>
        <Text style={body}>Hi{name ? ` ${name}` : ''},</Text>
        <Text style={body}>
          Thanks for reaching out. I have received your message and will reply within 24 hours.
        </Text>
        <Section style={box}>
          <Text style={boxText}>
            If you need to add anything in the meantime, just reply to this email.
          </Text>
        </Section>
        <Text style={footer}>Wiam El Youbi | AI automations and custom tools</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmation,
  subject: 'Thanks for your message | Wiam El Youbi',
  displayName: 'Contact form confirmation',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', color: '#420C14', margin: '0 0 20px' }
const body = { fontSize: '15px', color: '#420C14', lineHeight: '24px', margin: '0 0 16px' }
const box = { backgroundColor: '#EEF0F2', borderRadius: '8px', padding: '16px 20px', margin: '8px 0 16px' }
const boxText = { fontSize: '14px', color: '#420C14', margin: '0' }
const footer = { fontSize: '13px', color: '#6b6b6b', marginTop: '20px' }
