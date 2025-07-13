import { useIsMobile } from "@/hooks/usIsMobile";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FC, useEffect, useState, useCallback } from "react";

// Custom hook per debouncing
const useDebounce = (value: boolean, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Varianti animate migliorate per mobile e desktop
const textMotion = {
  rest: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.35,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const titleMotion = {
  rest: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  hover: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.25,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

// Animazione per la card stessa
const cardMotion = {
  rest: {
    scale: 1,
    boxShadow: "0 0 0 rgba(56, 189, 248, 0)",
    zIndex: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 32px rgba(56, 189, 248, 0.15)",
    zIndex: 50, // Z-index più alto durante hover
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  tap: {
    scale: 0.98,
    zIndex: 50,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 600,
      damping: 40,
    },
  },
};

export type CardProps = {
  title: string;
  description: string;
  href: string;
};

export const Card: FC<CardProps> = ({ title, description, href }) => {
  const [isTapped, setIsTapped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  // Debounce per l'hover con delay di 100ms per entrare, 150ms per uscire
  const debouncedHover = useDebounce(isHovered, isHovered ? 50 : 150);

  // Gestione del tap per mobile
  const handleTap = useCallback(() => {
    if (isMobile) {
      setIsTapped((prev) => !prev);
    }
  }, [isMobile]);

  // Gestione hover per desktop con debouncing
  const handleMouseEnter = useCallback(() => {
    if (!isMobile) {
      setIsHovered(true);
    }
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setIsHovered(false);
    }
  }, [isMobile]);

  // Chiusura automatica su mobile dopo un delay
  useEffect(() => {
    if (isMobile && isTapped) {
      const timer = setTimeout(() => {
        setIsTapped(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isTapped, isMobile]);

  const isActive = isTapped || debouncedHover;

  return (
    <motion.div
      onTap={handleTap}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="rest"
      animate={isActive ? "hover" : "rest"}
      variants={cardMotion}
      style={{ zIndex: isActive ? 50 : 1 }}
      className={`
        relative overflow-hidden cursor-pointer
        bg-gradient-to-br from-gray-900 to-black
        border-2 transition-all duration-300 m-2
        ${isActive ? "border-sky-400" : "border-gray-700"}
        rounded-lg 
        font-Inconsolata text-sky-400
        
        /* Fixed responsive sizing - più alte per evitare testo tagliato */
        w-full
        h-48 sm:h-52 md:h-56 lg:h-60
        min-w-0
        
        /* Flex layout */
        flex flex-col items-center justify-center
        
        /* Mobile optimizations */
        ${isMobile ? "active:scale-98" : ""}
        
        /* Focus states for accessibility */
        focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50
      `}
    >
      {/* Effetto di background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 to-blue-400/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />

      {/* Titolo principale */}
      <motion.div
        variants={titleMotion}
        className="relative z-5 flex items-center justify-center h-full px-4 py-2"
      >
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center leading-tight break-words hyphens-auto">
          {title}
        </h1>
      </motion.div>

      {/* Contenuto della descrizione */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col justify-between p-4 md:p-5 lg:p-6 rounded-lg overflow-hidden"
        variants={textMotion}
      >
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-full flex flex-col justify-between relative z-5"
            >
              {isMobile ? (
                <MobileContent
                  title={title}
                  description={description}
                  href={href}
                />
              ) : (
                <DesktopContent
                  title={title}
                  description={description}
                  href={href}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Indicatore mobile */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isTapped ? 0 : 1 }}
          className="absolute bottom-2 right-2 text-sky-400/60 text-xs z-5"
        >
          Tocca per info
        </motion.div>
      )}
    </motion.div>
  );
};

// Componente per contenuto mobile
const MobileContent: FC<{
  title: string;
  description: string;
  href: string;
}> = ({ title, description, href }) => (
  <div className="flex flex-col justify-between h-full gap-3 rounded-lg overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex-1 flex items-start pt-2"
    >
      <p className="text-sm text-gray-300 leading-relaxed text-left overflow-hidden">
        {description}
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="flex items-center justify-between gap-2"
    >
      <h2 className="text-sm font-bold line-through text-sky-400 truncate flex-1">
        {title}
      </h2>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs bg-sky-400 text-black px-3 py-1 rounded-full hover:bg-sky-300 transition-colors whitespace-nowrap"
        onClick={(e) => e.stopPropagation()}
      >
        Apri
      </Link>
    </motion.div>
  </div>
);

// Componente per contenuto desktop
const DesktopContent: FC<{
  title: string;
  description: string;
  href: string;
}> = ({ title, description, href }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-full flex flex-col justify-between group rounded-lg overflow-hidden"
  >
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex-1 flex items-start pt-2"
    >
      <p className="text-sm md:text-base text-gray-300 leading-relaxed text-left overflow-hidden">
        {description}
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="flex items-center justify-between gap-2"
    >
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold line-through text-sky-400 group-hover:text-sky-300 transition-colors truncate flex-1">
        {title}
      </h2>
      <div className="text-xs bg-sky-400 text-black px-3 py-1 rounded-full opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Apri →
      </div>
    </motion.div>
  </Link>
);
