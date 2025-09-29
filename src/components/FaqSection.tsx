import { FaqItem } from './ui/FaqItem';

const faqs = [
  { question: 'How long will the project take?', answer: 'A standard room can take 1-2 days, but project timelines vary based on the size and complexity. We will provide a detailed schedule with your quote.' },
  { question: 'Do I need to move my furniture?', answer: 'We can handle moving larger furniture items. We just ask that you clear away any small or fragile items before we arrive.' },
  { question: 'What kind of paint/wallpaper do you use?', answer: 'We use high-quality, durable paints and materials from trusted brands. We also offer eco-friendly and low-VOC options for a healthier home environment.' },
  { question: 'Are you insured?', answer: 'Yes, we are fully licensed and insured. We can provide proof of insurance upon request for your peace of mind.' },
  { question: 'How do you protect my home?', answer: 'We take great care to protect your property. All floors, furniture, and fixtures are covered with drop cloths and plastic sheeting. We also ensure proper ventilation.' },
  { question: 'What is your process for surface preparation?', answer: 'Proper preparation is key to a lasting finish. Our process includes cleaning walls, filling holes or cracks, sanding surfaces, and applying primer as needed.' },
  { question: 'Can you help me choose colors or patterns?', answer: 'Absolutely! We offer color and design consultations to help you find the perfect look for your space.' },
  { question: 'What is the cost of your services?', answer: 'The cost depends on the scope of work, materials selected, and the size of the area. We provide a detailed, no-obligation quote after an initial consultation.' },
  { question: 'Do you offer a warranty?', answer: 'Yes, we offer a warranty on our workmanship to ensure you are completely satisfied with the results.' },
  { question: 'How should I prepare for your arrival?', answer: 'Please remove any pictures, decorations, and small items from the rooms being painted. We will handle the rest!' },
  { question: 'How should I prepare for your arrival?', answer: 'Please remove any pictures, decorations, and small items from the rooms being painted. We will handle the rest!' },
  { question: 'How should I prepare for your arrival?', answer: 'Please remove any pictures, decorations, and small items from the rooms being painted. We will handle the rest!' },
];

const firstColumnFaqs = faqs.slice(0, 6);
const secondColumnFaqs = faqs.slice(6, 12);

export default function FaqSection() {
  return (
    <section className="primary-color section-container-top">
      <div className="bg-emerald-700 rounded-xl p-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            If you have a question that&apos;s not answered below, please{' '}
            <a href="#" className="text-white font-medium underline">
              get in touch
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            {firstColumnFaqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="space-y-4">
            {secondColumnFaqs.map((faq, index) => (
              <FaqItem key={index + 6} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
