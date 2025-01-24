"use client";
// import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../Support/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    (<div className="w-full bg-zinc-900 h-fit py-10">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const data = [
    {
      category: "Marketplace",
      title: "Connect Farmers to Buyers.",
      src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <p className="text-neutral-600 text-base md:text-lg font-sans">
          Empowering farmers to list their produce directly on a digital platform
          and enabling buyers to connect and purchase with ease. Bridge the gap
          between supply and demand in the agriculture industry.
        </p>
      ),
    },
    {
      category: "Government Support",
      title: "Stay Updated on Schemes and Subsidies.",
      src: "https://images.unsplash.com/photo-1635332027535-f7c06f395230?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <p className="text-neutral-600 text-base md:text-lg font-sans">
          Access the latest updates on government schemes, subsidies, and
          agricultural policies. Ensure farmers leverage every available
          opportunity for growth and success.
        </p>
      ),
    },
    {
      category: "Community Building",
      title: "Join a Growing Community.",
      src: "https://images.unsplash.com/photo-1523475496153-3d6ccf8492d2?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <p className="text-neutral-600 text-base md:text-lg font-sans">
          Collaborate with like-minded farmers and buyers. Share knowledge, tips,
          and experiences to foster innovation and build a resilient agriculture
          community.
        </p>
      ),
    },
    {
      category: "Advanced Tools",
      title: "Crop Analytics for Better Decisions.",
      src: "https://images.unsplash.com/photo-1617263686245-efcc1a1c27ab?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <p className="text-neutral-600 text-base md:text-lg font-sans">
          Use AI-powered crop analytics to monitor yields, optimize growth, and
          enhance productivity. Make data-driven decisions for a sustainable
          future.
        </p>
      ),
    },
    {
      category: "Transparency",
      title: "Ensure Transparent Transactions.",
      src: "https://images.unsplash.com/photo-1527168022196-5d6aa6d1e0c4?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <p className="text-neutral-600 text-base md:text-lg font-sans">
          Build trust with clear and transparent transactions. Buyers and farmers
          can verify deals, ensuring fair prices and mutual satisfaction.
        </p>
      ),
    },
    {
      category: "Jobs & Growth",
      title: "Explore New Opportunities.",
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <p className="text-neutral-600 text-base md:text-lg font-sans">
          Discover job opportunities in agriculture and related industries.
          Empower rural communities by creating pathways for economic growth.
        </p>
      ),
    },
  ];
  