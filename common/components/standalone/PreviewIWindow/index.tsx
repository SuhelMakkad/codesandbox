"use client";

import { useState, useRef } from "react";
import Link from "next/link";

import { FiRefreshCcw } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { MdHttps } from "react-icons/md";

const PreviewWindow = () => {
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const [frameSrc, setFrameSrc] = useState(
    "https://suhelmakkad.github.io/studio-landing-page/"
  );

  const reloadIframe = () => {
    if (!frameRef.current) return;

    if (frameRef.current.src === frameSrc) return;

    frameRef.current.src = frameSrc;
  };

  return (
    <aside className="h-full w-full ">
      <div className="flex gap-2 border-b border-neutral-600 bg-neutral-800 px-3 py-2 text-sm text-neutral-300">
        <button className="aspect-square rounded-full px-1.5 py-1 leading-none transition-[background-color] hover:bg-neutral-700">
          <FiRefreshCcw />
        </button>

        <div className="flex grow items-center gap-2 border border-neutral-700 bg-black px-2 py-0.5">
          <button>
            <MdHttps />
          </button>
          <input
            className="bg-transparent"
            type="text"
            value={frameSrc}
            onChange={(e) => setFrameSrc(e.target.value)}
            onBlur={reloadIframe}
          />
        </div>

        <Link
          href={frameSrc}
          target="_blank"
          referrerPolicy="no-referrer"
          className="aspect-square rounded-full px-1.5 py-1 leading-none transition-[background-color] hover:bg-neutral-700"
        >
          <IoOpenOutline />
        </Link>
      </div>
      <iframe ref={frameRef} className="h-full w-full" src={""}></iframe>
    </aside>
  );
};

export default PreviewWindow;
