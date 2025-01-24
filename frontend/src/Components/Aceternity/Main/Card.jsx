import { HoverEffect } from "../Support/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={services} />
    </div>
  );
}
export const services = [
  {
    title: "24/7 Customer Support",
    description:
      "Our support team is available around the clock to assist farmers and buyers with any issues or queries. Whether it's day or night, we're here to help.",
    link: "#",
  },
  {
    title: "Technical Assistance",
    description:
      "Get expert help for setting up your account, managing your listings, or navigating the platform. From troubleshooting to personalized guidance, our team is here for you.",
    link: "#",
  },
  {
    title: "Real-Time Transparency",
    description:
      "We ensure complete transparency in transactions. Buyers can view verified crop listings, pricing, and seller details in real time, fostering trust and reliability.",
    link: "#",
  },
  {
    title: "Live Chat Support",
    description:
      "Enable instant communication through live chat. Farmers and buyers can resolve inquiries, negotiate deals, and stay connected in real-time.",
    link: "#",
  },
  {
    title: "Verified User Profiles",
    description:
      "Build trust with verified profiles for farmers and buyers. Verification ensures credibility and authenticity of transactions on the platform.",
    link: "#",
  },
  {
    title: "Government Schemes Update",
    description:
      "Stay informed about the latest government schemes and subsidies for farmers. Get real-time updates and guidance to take full advantage of available benefits.",
    link: "#",
  },
  
];
