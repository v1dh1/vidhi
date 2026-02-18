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
      className="w-full bg-stone-50 p-4"
    >
      <nav className="grid grid-cols-2 md:grid-cols-3 items-center w-full">
        {/* LEFT */}
        <div className="flex flex-col justify-self-start">
          <Link href="/" className="text-lg text-fuchsia-900 leading-none ">
              Vidhi 
              <div className="">Gokani</div>
          </Link>
        </div>

        {/* CENTER (desktop only) */}
        <div className="hidden md:flex items-center gap-4 justify-self-center">
          <NavButton href="/" label="WORK" />
          <NavButton href="/about" label="ABOUT" />
          <NavButton
            href="https://drive.google.com/file/d/1Atf03cruBvciRvUdbc4U_Gk8IvlwPQ--/view?usp=sharing"
            label="RESUME"
          />
        </div>

        {/* RIGHT ACTION (desktop) */}
        <div className="hidden md:block justify-self-end">
          <ActionButton
            label="LET'S TALK"
            href="mailto:vidhigokani1@gmail.com"
          />
        </div>

        {/* HAMBURGER (mobile) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-stone-200 justify-self-end"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6 text-stone-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3">
          <NavButton href="/" label="work" icon="/work.png" />
          <NavButton href="/about" label="about" icon="/aboutv.png" />
          <NavButton
            href="https://drive.google.com/file/d/1Atf03cruBvciRvUdbc4U_Gk8IvlwPQ--/view?usp=sharing"
            label="resume"
            icon="/work.png"
          />
          <ActionButton
            label="let's talk"
            icon="/phone.png"
            href="mailto:vidhigokani1@gmail.com"
          />
        </div>
      )}
    </motion.div>
  );
};

/* -----------------------------
   BUTTONS
-------------------------------- */

function NavButton({ href, label }) {
  return (
    <Link href={href}>
      <button className="flex items-center gap-2 px-3 py-1.5 text-stone-700 text-sm hover:bg-fuchsia-50 hover:rounded-xl active:bg-fuchsia-100 transition-all">
        {label}
      </button>
    </Link>
  );
}

function ActionButton({ href, label }) {
  return (
    <Link href={href}>
      <button className="flex items-center gap-2 rounded-xl px-3 py-1.5 text-stone-700 text-sm hover:bg-fuchsia-100 active:bg-fuchsia-200 transition-all">
        {label}
      </button>
    </Link>
  );
}

export default Lefthome;
