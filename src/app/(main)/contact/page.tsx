import EstimationForm from "@/components/EstimationForm";
import PageBanner from "@/components/PageBanner";

export default function page() {
  return (
    <>
          <PageBanner
                title="Contact Us"
                subtitle="Get in touch with us for any inquiries or questions"
                backgroundImage="/paint.jpg"
              />
              <EstimationForm/>
    </>
  )
}
