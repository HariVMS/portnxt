import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactMap from "@/components/sections/contact/ContactMap";

export const metadata = {
  title: "Contact Us | Makelink Innovation",
  description: "Get in touch with Makelink Innovation for your software development and digital marketing needs.",
};

export default function ContactUs() {
  return (
    <main className="bg-white 2xl:max-w-[1536px] mx-auto pt-21">
      <section className="py-24 bg-white">
        <div className="container min-w-full">
          <div className="grid lg:grid-cols-[1fr_506px] gap-12 lg:gap-8 items-start 2xl:gap-0">
            <div>
              <ContactForm />
            </div>

            <div className="pt-8 lg:pt-0">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white 2xl:max-w-[1536px] mx-auto px-6 pb-30">
        <ContactMap />
      </section>
    </main>
  );
}
