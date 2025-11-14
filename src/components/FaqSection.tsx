import Container from "@/lib/Container";
import { FaqItem } from "./ui/FaqItem";
import SectionHeading from "@/lib/SectionHeading";
import { faqs } from "@/data/faq";

const firstColumnFaqs = faqs.slice(0, 6);
const secondColumnFaqs = faqs.slice(6, 12);

export default function FaqSection() {
  return (
    <Container variant="green" padding>
      <SectionHeading
        title="Frequently Asked Questions"
        description="Everything you need to know before getting started."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {firstColumnFaqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="space-y-4">
          {secondColumnFaqs.map((faq, index) => (
            <FaqItem
              key={index + 6}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
