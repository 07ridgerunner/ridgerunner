import { PolicyPage } from '@/components/PolicyPage';

export const metadata = { title: 'Cancellation Policy' };

export default function CancellationPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Cancellation policy"
      description="A practical overview of how cancellations, rescheduling and route changes are handled for confirmed trips."
      paragraphs={[
        'Cancellation terms may vary by route and departure. In general, trip deposits or advance payments are processed according to the booking confirmation provided at the time of purchase.',
        'In cases of weather disruption, route changes, or operational constraints beyond our control, we will work with travelers to reschedule or provide alternative plans where feasible.',
        'For route-specific changes triggered by safety or environmental conditions, travelers are advised to be flexible and follow the guidance of the lead team.',
        'Final refund or reschedule terms should be confirmed in writing at the time of booking and may depend on route-specific policies.',
      ]}
    />
  );
}
