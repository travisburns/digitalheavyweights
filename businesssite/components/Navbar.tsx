"use client";

import { Socials } from '@/constants';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-10 top-0 w-full bg-slate-900 px-4 py-4 md:px-10 md:py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/digitalheavyweightsicon.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
            <h1 className="text-white text-lg md:text-xl font-semibold ml-2">
              Travis Burns
            </h1>
          </div>
        </Link>

        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/projects">My Projects</Link>
          <Link href="/aboutme">About me</Link>
        </div>

        <div className="hidden md:flex gap-3">
          {Socials.map((social, index) => (
            <Link key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <div className="relative w-6 h-6 md:w-7 md:h-7">
                <Image
                  src={social.src}
                  alt={social.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 text-white">
            <Link href="/projects" onClick={toggleMenu}>
              My Projects
            </Link>
            <Link href="/aboutme" onClick={toggleMenu}>
              About me
            </Link>
          </div>
          <div className="flex justify-center mt-6 gap-3">
            {Socials.map((social, index) => (
              <Link key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-6 h-6">
                  <Image
                    src={social.src}
                    alt={social.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;