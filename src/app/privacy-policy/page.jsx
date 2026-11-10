import { PolicyPage } from '@/components/PolicyPage';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Privacy policy"
      description="This policy outlines how we collect, use and protect personal information for travel planning and communications."
      paragraphs={[
        'We collect only the information needed to support enquiries, trip planning and communication with travelers. This may include names, contact details, travel preferences and trip details shared through forms or direct messages.',
        'Information is used to respond to enquiries, share route options, coordinate bookings and provide relevant support before or during a journey.',
        'We do not sell personal data. Information is stored securely and accessed only by authorized team members for operational purposes.',
        'We may use cookies or analytics tools to understand website usage and improve the experience. These tools are configured in line with general website best practices and may be customized depending on business configuration.',
      ]}
    />
  );
}
