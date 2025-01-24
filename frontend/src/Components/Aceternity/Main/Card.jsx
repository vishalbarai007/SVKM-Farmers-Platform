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
    title: "Real-Time Market Prices",
    description:
      "Farmers can view live prices of crops, fruits, vegetables, and other commodities in various markets (local, regional, and national).",
    link: "#", // You can update with a relevant link or just use `#` for now
  },
  {
    title: "Whether Updates and Alerts",
    description:
      "Accurate and localized weather forecasts to help farmers plan their activities.",
    link: "#",
  },
  {
    title: "Government Schemes and Subsidies",
    description:
      "Information about government programs and financial support available to farmers.",
    link: "#",
  },
  {
    title: "Product Updates",
    description:
      "Information about government programs and financial support available to farmers.",
    link: "#",
  },
  {
    title: "Personalise Crop Advisory",
    description:
      "Every farm is unique, with its own set of challenges based on location, soil type, and climate conditions. ",
    link: "#",
  },
  {
    title: "Community and Support",
    description:
      "Farming can often be an isolating profession, especially for small-scale farmers. This feature provides a platform for farmers to connect with one another and share their experiences, challenges, and solutions",
    link: "#",
  },
];
