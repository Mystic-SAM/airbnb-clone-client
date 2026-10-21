import { ThingsToKnowData } from '../types/policies';

export const POLICIES_DATA: ThingsToKnowData = {
  cancellationPolicy: {
    id: 'cancellation',
    title: 'Cancellation policy',
    lines: [
      'Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.',
      'Review this host’s full policy for details.'
    ],
    linkText: 'Learn more',
    linkHref: '#cancellation-policy'
  },
  houseRules: {
    id: 'house-rules',
    title: 'House rules',
    lines: [
      'Check-in after 2:00 pm',
      'Checkout before 11:00 am',
      '3 guests maximum'
    ],
    linkText: 'Learn more',
    linkHref: '#house-rules'
  },
  safetyAndProperty: {
    id: 'safety',
    title: 'Safety & property',
    lines: [
      'Carbon monoxide alarm not reported',
      'Smoke alarm not reported',
      'Exterior security cameras on property'
    ],
    linkText: 'Learn more',
    linkHref: '#safety-property'
  }
};
