import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import ContentBlock from "@/components/ui/ContentBlock";
import ServiceFeatures from "@/components/sections/ServiceFeatures";
import RelatedServices from "@/components/sections/RelatedServices";

// Simplified data for industries - could be moved to separate file
const industriesData: Record<string, any> = {
  healthcare: {
    title: "Healthcare Solutions",
    description: "Digital transformation for the healthcare industry.",
  },
  finance: {
    title: "FinTech Solutions",
    description: "Secure and scalable financial technology solutions.",
  },
  education: {
    title: "EdTech Solutions",
    description: "Innovative platforms for learning and education.",
  },
  "real-estate": {
    title: "Real Estate Solutions",
    description: "Digital tools for the real estate property market.",
  },
  retail: {
    title: "Retail & E-commerce",
    description: "Next-gen solutions for the retail sector.",
  },
  default: {
    title: "Industry Solutions",
    description: "Tailored technology for your specific industry.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = industriesData[slug] || industriesData["default"];
  return {
    title: `${item.title} | Port NxT Digital Solutions`,
    description: item.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(industriesData)
    .filter((key) => key !== "default")
    .map((slug) => ({
      slug,
    }));
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const data = industriesData[slug] || {
    ...industriesData["default"],
    title:
      slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) +
      " Solutions",
  };

  return (
    <main>
      <PageHero
        title={data.title}
        description={data.description}
        breadcrumb="Industries"
      />

      <ContentBlock
        subtitle="INDUSTRY FOCUS"
        title={`Technology for ${data.title}`}
        description={`We provide specialized software and digital marketing solutions tailored to the unique challenges and opportunities in the ${data.title} sector. Our expertise ensures compliance, efficiency, and growth.`}
        imageSrc="/img/Home/hero-img.webp" // specific industry img if avail
        imageAlt={data.title}
        ctaText="Discuss Project"
        ctaLink="/contact-us"
      />

      {/* Reuse ServiceFeatures for Industry Benefits */}
      <ServiceFeatures
        features={[
          {
            title: "Digital Transformation",
            description:
              "Modernize your operations with cutting-edge digital tools.",
            subFeatures: ["Automation", "Cloud Integration"],
          },
          {
            title: "Compliance & Security",
            description:
              "Solutions designed to meet strict industry regulations.",
            subFeatures: ["Data Protection", "Audit Trails"],
          },
          {
            title: "Customer Experience",
            description: "Enhance how you interact with your clients/users.",
            subFeatures: ["Mobile Apps", "Portals"],
          },
        ]}
      />

      <RelatedServices />
    </main>
  );
}
