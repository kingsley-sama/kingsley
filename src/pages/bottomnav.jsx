import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import { Home, VerifiedUser,Folder,Mail, Menu } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: VerifiedUser, label: 'About' },
    { id: 'projects', icon: Folder, label: 'Projects' },
    { id: 'skills', icon: CodeIcon, label: 'Skills' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 40,
        delay: 0.2
      }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ item, isActive, onClick, index }) => {
  const Icon = item.icon;
  
  return (
    <motion.button
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 group ${
        isActive ? 'text-red-300' : 'text-zinc-400 hover:text-zinc-200'
      }`}
      whileHover={{ 
        scale: 1.1,
        rotate: isActive ? 0 : 5
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      {/* Active background */}
      {isActive && (
        <motion.div
          layoutId="activeBackground"
          className="absolute inset-0 bg-zinc-800 rounded-xl"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        />
      )}
      
      {/* Icon */}
      <motion.div
        className="relative z-10 mb-1"
        animate={{
          scale: isActive ? 1.1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
      >
        <Icon className="w-5 h-5" />
      </motion.div>
      
      {/* Label */}
      <motion.span
        className="relative z-10 text-xs font-medium"
        animate={{
          opacity: isActive ? 1 : 0.7,
          scale: isActive ? 1 : 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
      >
        {item.label}
      </motion.span>
      
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-red-500/20 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

// Alternative compact version
export const CompactBottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: VerifiedUser, label: 'About' },
    { id: 'projects', icon: Folder, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-full shadow-2xl overflow-hidden"
        animate={{
          width: isExpanded ? 'auto' : '60px',
          height: isExpanded ? 'auto' : '60px',
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      >
        {!isExpanded ? (
          <motion.button
            onClick={() => setIsExpanded(true)}
            className="w-full h-full flex items-center justify-center text-zinc-300 hover:text-red-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1 p-2"
          >
            {navItems.map((item, index) => (
              <CompactNavItem
                key={item.id}
                item={item}
                isActive={activeTab === item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsExpanded(false);
                }}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
};

const CompactNavItem = ({ item, isActive, onClick, index }) => {
  const Icon = item.icon;
  
  return (
    <motion.button
      onClick={onClick}
      className={`p-3 rounded-full transition-all duration-300 relative ${
        isActive ? 'text-red-300 bg-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.05,
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <Icon className="w-5 h-5" />
      
      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="compactActiveIndicator"
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        />
      )}
    </motion.button>
  );
};
