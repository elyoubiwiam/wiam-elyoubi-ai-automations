import * as React from 'npm:react@18.3.1'
import { Body, Container, Head, Heading, Html, Preview, Section, Text } from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  message?: string
}

const ContactNotification = ({ name = 'Someone', email = '', message = '' }: Props) => (
  <Html lang="en">
    <Head />
    <Preview>New message from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New message from your website</Heading>
        <Section style={box}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email}</Text>
          <Text style={label}>Message</Text>
          <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{message}</Text>
        </Section>
        <Text style={footer}>Reply to this email to answer {name} directly.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotification,
  subject: (d: Record<string, any>) => `New message from ${d.name ?? 'your website'}`,
  displayName: 'Contact form notification',
  to: 'elyoubi.wia@gmail.com',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', message: 'Hi Wiam, I would like to discuss an automation project.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', color: '#420C14', margin: '0 0 20px' }
const box = { backgroundColor: '#EEF0F2', borderRadius: '8px', padding: '16px 20px' }
const label = { fontSize: '12px', color: '#6b6b6b', textTransform: 'uppercase' as const, margin: '12px 0 2px' }
const value = { fontSize: '15px', color: '#420C14', margin: '0' }
const footer = { fontSize: '13px', color: '#6b6b6b', marginTop: '20px' }
