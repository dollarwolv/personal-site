"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "motion/react";

function MailButton({
  mailButtonHovered,
  setMailButtonHovered,
  mailButtonCopied,
  setMailButtonCopied,
}: {
  mailButtonHovered: boolean;
  setMailButtonHovered: Dispatch<SetStateAction<boolean>>;
  mailButtonCopied: boolean;
  setMailButtonCopied: Dispatch<SetStateAction<boolean>>;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipbooard = () => {
    navigator.clipboard.writeText("justindotzlaw@gmail.com");
    setCopied(true);
    setMailButtonCopied(true);
  };

  return (
    <motion.button
      onMouseEnter={() => {
        setIsHovered(true);
        setMailButtonHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setMailButtonHovered(false);
        setCopied(false);
        setMailButtonCopied(false);
      }}
      layout
      onClick={copyToClipbooard}
      initial={false}
      style={{ borderRadius: 12 }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 380,
          damping: 28,
        },
      }}
      className="inline-flex cursor-pointer bg-stone-100 px-4 py-2 whitespace-nowrap text-black transition-colors duration-300 hover:bg-[#ec4e39] hover:text-white"
    >
      {isHovered || mailButtonHovered ? (
        <div className="flex gap-1">
          <span>
            {copied || mailButtonCopied
              ? "Copied to clipboard!"
              : "justindotzlaw@gmail.com"}
          </span>
          {(!copied || !mailButtonCopied) && (
            <span className="rounded bg-white px-1 py-0.5 text-xs text-black">
              COPY
            </span>
          )}
        </div>
      ) : (
        "Mail"
      )}
    </motion.button>
  );
}

export default MailButton;
