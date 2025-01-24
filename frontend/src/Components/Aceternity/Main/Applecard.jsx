"use client";
// import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../Support/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    (<div className="w-full bg-[#f4f2ef] h-[400px] py-20">
      <h2
        className="max-w-7xl text-center pl-4 mx-auto text-xl md:text-5xl font-bold text-[#336021] dark:text-[#e68c3a] font-sans">
        Empowering Agriculture Connections
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const data = [
    {
      category: "Marketplace",
      title: "Connect Farmers to Buyers.",
      src: "/assets/Marketplace.png",
      content: (
        <p className="text-neutral-600 text-base md:text-lg font-sans">
          Empowering farmers to list their produce directly on a digital platform
          and enabling buyers to connect and purchase with ease. Bridge the gap
          between supply and demand in the agriculture industry.
        </p>
      ),
    },
    {
        category: "Community Building",
        title: "Join a Growing Community.",
        src: "/assets/Community.png",
        content: (
        <p className="text-neutral-600 text-base md:text-lg font-sans">
          Collaborate with like-minded farmers and buyers. Share knowledge, tips,
          and experiences to foster innovation and build a resilient agriculture
          community.
        </p>
      ),
    },
    {
        category: "Advanced AI Tools",
        title: "Crop Analytics for Better Decisions.",
        src: "/assets/AIcrops.png",
        content: (
            <p className="text-neutral-600 text-base md:text-lg font-sans">
          Use AI-powered crop analytics to monitor yields, optimize growth, and
          enhance productivity. Make data-driven decisions for a sustainable
          future.
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
    {
      category: "Government Support",
      title: "Stay Updated on Schemes and Subsidies.",
      src: "/assets/Government.png",
      content: (
        <p className="text-neutral-600 text-base md:text-lg font-sans">
          Access the latest updates on government schemes, subsidies, and
          agricultural policies. Ensure farmers leverage every available
          opportunity for growth and success.
        </p>
      ),
    },
  ];
  