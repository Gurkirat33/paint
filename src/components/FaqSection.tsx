import Container from '@/lib/Container';
import { FaqItem } from './ui/FaqItem';
import SectionHeading from '@/lib/SectionHeading';

const faqs = [
  {
    question: 'How long does a typical painting project take?',
    answer: 'Most standard rooms are completed within 1–2 days. Larger or more detailed projects may take longer, and we always provide a clear timeline before we start.'
  },
  {
    question: 'Do I need to move furniture or cover anything?',
    answer: 'We take care of moving and covering large furniture items. We just ask that you remove any personal, fragile, or small decorative items beforehand.'
  },
  {
    question: 'What types of paint and materials do you use?',
    answer: 'We use premium, long-lasting paints and wallpapers from trusted brands. Eco-friendly and low-VOC options are also available upon request.'
  },
  {
    question: 'Are your painters licensed and insured?',
    answer: 'Yes, we are fully licensed and insured for residential and commercial projects. We can provide proof of coverage anytime for your peace of mind.'
  },
  {
    question: 'How do you protect my home during the project?',
    answer: 'We carefully cover floors, furniture, and fixtures with drop cloths and plastic sheeting. We also maintain clean work areas and proper ventilation throughout.'
  },
  {
    question: 'Do you handle prep work like patching or sanding?',
    answer: 'Absolutely. We clean surfaces, repair cracks or holes, sand as needed, and apply primer to ensure a smooth and durable finish.'
  },
  {
    question: 'Can you help me choose the right colors or wallpaper?',
    answer: 'Yes! We offer personalized color and design guidance to help you pick the best shades, finishes, or wallpaper patterns for your space.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve Calgary and surrounding areas for both residential and commercial painting and wallpaper services.'
  },
  {
    question: 'Do you offer exterior painting as well?',
    answer: 'Yes, we provide both interior and exterior painting services, using weather-resistant materials to ensure a lasting, professional finish.'
  },
  {
    question: 'How much will my project cost?',
    answer: 'Pricing depends on the size, scope, and materials. We provide a detailed, no-obligation quote after inspecting the space and discussing your goals.'
  },
  {
    question: 'Do you provide a warranty on your work?',
    answer: 'Yes, all of our projects include a workmanship warranty. We stand behind the quality of our finishes and ensure customer satisfaction.'
  },
  {
    question: 'How should I prepare before the team arrives?',
    answer: 'Just clear personal items and wall décor from the workspace. We’ll handle all furniture protection, prep, and cleanup so you don’t have to worry about a thing.'
  },
];


const firstColumnFaqs = faqs.slice(0, 6);
const secondColumnFaqs = faqs.slice(6, 12);

export default function FaqSection() {
  return (
    <Container variant="green" padding>
       <SectionHeading title="Frequently Asked Questions" description="Everything you need to know before getting started."/>

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
        </Container>
  );
}
