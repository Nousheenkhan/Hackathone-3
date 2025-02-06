import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cardData = [
  {
    id: 1,
    imageSrc: '/img/card1.png',
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    id: 2,
    imageSrc: '/img/card2.png',
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    id: 3,
    imageSrc: '/img/card3.png',
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
];

const CardData = () => {
  return (
    <div className="bg-white py-20">
      {/* Section Header */}
      <div className="w-full text-center px-4">
        <h2 className="text-[#23A6F0]">Practice Advice</h2>
        <h1 className="text-4xl font-bold text-[#252B42] mt-4">Featured Posts</h1>
        <p className="text-sm text-[#737373] mt-4">
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Product Cards Row */}
      <div className="px-14 flex flex-wrap justify-center gap-2 mt-10">
        {cardData.map(({ id, imageSrc, title, description, date, comments }) => (
          <div key={id} className="max-w-sm w-[348px] bg-white shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={imageSrc}
                alt="Featured post image"
                className="w-full h-[260px] object-cover"
                width={400}
                height={200}
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase font-bold py-1 px-2 rounded">
                New
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>Google</span>
                <span className="font-bold">&bull;</span>
                <span>Trending</span>
                <span className="font-bold">&bull;</span>
                <span>New</span>
              </div>
              <h2 className="mt-2 text-lg font-bold text-gray-900">{title}</h2>
              <p className="mt-1 text-gray-600 text-sm">{description}</p>
              <div className="flex items-center justify-between text-gray-400 text-sm mt-4">
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#23A6F0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#23A6F0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
                  </svg>
                  <span>{comments}</span>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/product-details">
                  <span className="text-blue-500 hover:underline text-sm font-medium cursor-pointer">
                    Learn More 
                    <FontAwesomeIcon icon={faChevronRight} className="text-[#23A6F0] w-3 h-3 ml-2" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardData;
