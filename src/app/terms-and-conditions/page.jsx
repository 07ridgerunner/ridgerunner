import { PolicyPage } from '@/components/PolicyPage';

export const metadata = { title: 'Terms and Conditions' };

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Terms"
      title="Terms and conditions"
      description="These terms govern communication, enquiry handling and trip planning for Ridge Runner Adventures services."
      paragraphs={[
        'By engaging with Ridge Runner Adventures, travelers acknowledge that trip availability, pricing, and itinerary details may vary depending on route conditions, season, weather and group size.',
        'We make every effort to share the most accurate information available at the time of enquiry. Final arrangements are confirmed as the trip is formally accepted and booked.',
        'Travelers are responsible for their own fitness, medical suitability, and reasonable preparation for the route they choose. We recommend reviewing route difficulty, weather conditions and time commitments before booking.',
        'Any cancellations or rescheduling are handled according to the trip-specific agreement and booking policy shared with the traveler at the time of confirmation.',
      ]}
    />
  );
}
