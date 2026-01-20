"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Lefthome = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="w-full bg-stone-50 p-4 border-b border-stone-200"
    >
      {/* NAV WRAPPER */}
      <nav className="flex items-center justify-between w-full">
        {/* LEFT: name + description */}
        <div className="flex flex-col">
          <Link href="/" className="text-lg text-stone-800 font-medium">
            Vidhi Gokani
          </Link>
          <div className="text-sm text-stone-500">
            designer focused on{" "}
            <span className="text-red-900">fintech</span> and{" "}
            <span className="text-red-900">enterprise design</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-4">
          <NavButton href="/" label="work" icon="/work.png" />
          <NavButton href="/about" label="about" icon="/aboutv.png" />
          <NavButton href="https://drive.google.com/file/d/1Atf03cruBvciRvUdbc4U_Gk8IvlwPQ--/view?usp=sharing" label="resume" icon="/work.png" />
        </div>

        {/* RIGHT ACTION BUTTON (desktop) */}
        <div className="hidden md:block">
          <ActionButton label="let's talk" icon="/phone.png" href="mailto:vidhigokani1@gmail.com" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-stone-200"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6 text-stone-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3">
          <NavButton href="/" label="work" icon="/work.png" />
          <NavButton href="/about" label="about" icon="/aboutv.png" />
          <NavButton href="https://drive.google.com/file/d/1Atf03cruBvciRvUdbc4U_Gk8IvlwPQ--/view?usp=sharing" label="resume" icon="/work.png" />
          <ActionButton label="let's talk" icon="/phone.png" href="mailto:vidhigokani1@gmail.com" />
        </div>
      )}
    </motion.div>
  );
};

/* -----------------------------
   REUSABLE BUTTON COMPONENTS
-------------------------------- */

function NavButton({ href, label, icon }) {
  return (
    <Link href={href}>
      <button
        className="
        flex items-center gap-2 rounded-xl border-2 border-red-800
        px-3 py-1.5 text-stone-700 text-sm 
        hover:bg-red-50 active:bg-red-100
        transition-all
        "
      >
        <img src={icon} className="w-6 h-6" alt="" />
        {label}
      </button>
    </Link>
  );
}

function ActionButton({ href, label, icon }) {
  return (
    <Link href={href}>
      <button
        className="
        flex items-center gap-2 rounded-xl border-2 border-red-700
        px-3 py-1.5 text-stone-700 text-sm 
        hover:bg-red-100 active:bg-red-200
        transition-all
        "
      >
        <img src={icon} className="w-6 h-6" alt="" />
        {label}
      </button>
    </Link>
  );
}

export default Lefthome;
