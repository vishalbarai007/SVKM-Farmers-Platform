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
      "Our support team is available round the clock to assist you with any issues or queries. Whether it's day or night, we're here to help.",
    link: "#", // You can update with a relevant link or just use `#` for now
  },
  {
    title: "Technical Assistance",
    description:
      "Our skilled technicians are always ready to provide expert assistance with any technical challenges you may face. From setup to troubleshooting, we've got you covered.",
    link: "#",
  },
  {
    title: "Live Chat Support",
    description:
      "Get immediate assistance through our live chat service. Our agents are online and ready to respond to your inquiries in real-time.",
    link: "#",
  },
  {
    title: "Product Updates",
    description:
      "Stay informed about the latest features and updates. We send regular notifications to keep you in the loop with what's new.",
    link: "#",
  },
  {
    title: "On-Demand Troubleshooting",
    description:
      "If you're facing technical issues, our on-demand troubleshooting service will resolve the problem quickly and efficiently. Our team can guide you remotely to fix the issue.",
    link: "#",
  },
  {
    title: "Documentation & Guides",
    description:
      "Access our detailed product manuals and guides to help you navigate and make the most out of our services. Comprehensive FAQs and tutorials are available for quick self-help.",
    link: "#",
  },
];
