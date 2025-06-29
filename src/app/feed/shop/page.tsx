"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Sparkles, Gift } from "lucide-react";

// Animated sparkle component
const AnimatedSparkle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div
      className="absolute animate-sparkle"
      style={{
        animationDelay: `${delay}ms`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    >
      <Sparkles className="w-3 h-3 text-[#5BC898] opacity-70" />
    </div>
  );
};

// Shop items data
const shopItems = [
  {
    id: "duck-bundle",
    title: "the duck bundle",
    price: 500,
    discount: 8,
    image: "/badge-1.png",
    previewImage: "/banner.png",
    description: "A cute duck-themed profile bundle with animated effects",
    rarity: "epic",
  },
  {
    id: "bubble-bundle",
    title: "Bubble Bundle",
    price: 1250,
    discount: 8,
    image: "/badge-2.png",
    previewImage: "/member-card.png",
    description: "Floating bubbles effect for your profile",
    rarity: "rare",
  },
  {
    id: "fireflies-bundle",
    title: "Fireflies Bundle",
    price: 5000,
    discount: 8,
    image: "/badge-3.png",
    previewImage: "/light-preview-1.png",
    description: "Magical fireflies animation for night theme",
    rarity: "legendary",
  },
  {
    id: "sunflowers",
    title: "Sunflowers",
    price: 4000,
    discount: 0,
    image: "/badge-4.png",
    previewImage: "/light-preview-2.png",
    description: "Beautiful sunflower decoration for summer vibes",
    rarity: "common",
  },
];

// Modal component
const ItemModal = ({ item, isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0e2d23]/95">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#19382e] via-[#145c43]/80 to-[#19382e] rounded-3xl p-8 shadow-2xl border border-[#145c43]/40">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#145c43]/20 hover:bg-[#145c43]/40 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#145c43]/40 to-[#19382e]/40 p-8">
              <Image
                src={item.previewImage}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2d23]/80 to-transparent" />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {item.title}
              </h2>
              <p className="text-white/80 mb-4">{item.description}</p>

              <div className="flex items-center gap-2 mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.rarity === "legendary"
                      ? "bg-[#5BC898]/20 text-[#5BC898]"
                      : item.rarity === "epic"
                      ? "bg-[#47a87a]/20 text-[#47a87a]"
                      : item.rarity === "rare"
                      ? "bg-[#b6f2d6]/20 text-[#b6f2d6]"
                      : "bg-gray-500/20 text-gray-300"
                  }`}
                >
                  {item.rarity.toUpperCase()}
                </span>
                <Gift className="w-4 h-4 text-[#5BC898]" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-white">
                  CREDITS {item.price}
                </span>
                {item.discount > 0 && (
                  <span className="text-green-400 text-sm font-semibold">
                    (-{item.discount}%)
                  </span>
                )}
              </div>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#145c43] to-[#19382e] text-white font-semibold hover:from-[#19382e] hover:to-[#145c43] transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ShopPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <AnimatedSparkle key={i} delay={i * 200} />
        ))}
      </div>
      <div className="relative z-10 h-full flex flex-col py-2.5">
        {/* Header */}
        <div className="flex items-center justify-start mb-8">
          <div>
            <h1 className="text-2xl font-bold">Shop</h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              Get awesome items to customize your profile and stand out in the
              community!
            </p>
          </div>
        </div>

        {/* Shop Grid - 2 rows, 4 columns */}
        <div>
          <div className="h-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 lg:gap-6 px-4">
            {shopItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-full bg-gradient-to-br from-[#e6f9f3]/60 to-[#b6f2d6]/40 dark:from-[#1a2e26]/80 dark:to-[#19382e]/80 backdrop-blur-md rounded-3xl p-4 lg:p-6 border border-[#5BC898]/20 hover:border-[#5BC898]/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1 flex flex-col shadow-xl group overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5BC898]/0 to-[#47a87a]/0 group-hover:from-[#5BC898]/15 group-hover:to-[#47a87a]/15 transition-all duration-300" />

                  {/* Item image container */}
                  <div className="relative mb-3 mx-auto w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                    {/* Gri soru işareti */}
                    <span className="text-6xl lg:text-7xl font-extrabold text-gray-400 select-none">
                      ?
                    </span>
                  </div>

                  {/* Item details */}
                  <h3 className="text-[#1a2e26] dark:text-[#e6f9f3] font-semibold text-sm lg:text-base text-center mb-2">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-center gap-2 mt-auto">
                    <span className="text-[#1a2e26] dark:text-[#b6f2d6] font-bold text-sm">
                      CREDITS: {item.price}
                    </span>
                    {item.discount > 0 && (
                      <span className="text-green-500 text-xs font-semibold">
                        (-{item.discount}%)
                      </span>
                    )}
                  </div>

                  {/* Green Sparkles on hover */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="absolute top-4 right-4 w-3 h-3 text-[#5BC898] animate-pulse" />
                      <Sparkles className="absolute bottom-4 left-4 w-3 h-3 text-[#47a87a] animate-pulse animation-delay-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      <ItemModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

export default ShopPage;
