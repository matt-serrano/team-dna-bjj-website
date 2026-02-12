import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Award, Star, User } from 'lucide-react';
import { cn } from '../lib/utils';
import type { Coach } from '../../data/coaches';

interface CoachCardProps extends Coach {
  isHeadCoach?: boolean;
  index?: number;
}

export function CoachCard({
  name,
  role,
  bio,
  special,
  accomplishments,
  isHeadCoach = false,
  index = 0,
}: CoachCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-300 h-full",
        "bg-card border border-border",
        "shadow-sm hover:shadow-lg",
        "dark:bg-card dark:border-border/50 dark:hover:shadow-xl dark:hover:shadow-black/20",
        "flex flex-col",
        isHeadCoach && [
          "border-2 border-[var(--accent-primary)]/40",
          "ring-2 ring-[var(--accent-primary)]/20 ring-offset-2 ring-offset-background",
        ]
      )}
    >
      {/* Image Placeholder - Top */}
      <div className={cn(
        "relative w-full aspect-[4/3] bg-gradient-to-br from-muted to-muted/50",
        "flex items-center justify-center",
        isHeadCoach && "bg-gradient-to-br from-[var(--accent-primary)]/10 to-muted/50"
      )}>
        <User className="w-16 h-16 text-muted-foreground/30" />
        
        {/* Head Coach Badge Overlay */}
        {isHeadCoach && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--accent-primary)] text-white text-xs font-semibold shadow-lg">
              <Star className="w-3 h-3" />
              {role}
            </span>
          </div>
        )}
        
        {/* Regular Coach Badge Overlay */}
        {!isHeadCoach && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium shadow">
              {role}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Name */}
        <h3 className="text-lg font-bold tracking-tight leading-tight mb-2">
          {name}
        </h3>

        {/* Bio */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {bio}
        </p>

        {/* Special Badges - Compact */}
        {special && special.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {special.slice(0, 2).map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-[10px] font-medium"
              >
                <Award className="w-2.5 h-2.5" />
                <span className="truncate max-w-[140px]">{item}</span>
              </span>
            ))}
            {special.length > 2 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-muted text-muted-foreground text-[10px] font-medium">
                +{special.length - 2} more
              </span>
            )}
          </div>
        )}

        {/* Spacer to push accordion to bottom */}
        <div className="flex-1" />

        {/* Accomplishments Accordion */}
        {accomplishments && accomplishments.length > 0 && (
          <div className="mt-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsExpanded(!isExpanded);
                }
              }}
              className={cn(
                "w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg",
                "bg-muted/50 hover:bg-muted transition-colors",
                "text-xs font-medium text-foreground",
                "focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2",
                isExpanded && "rounded-b-none"
              )}
              aria-expanded={isExpanded}
              aria-controls={`accomplishments-${name.replace(/\s+/g, '-')}`}
            >
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                Achievements ({accomplishments.length})
              </span>
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  isExpanded && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  id={`accomplishments-${name.replace(/\s+/g, '-')}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-3 py-3 bg-muted/30 rounded-b-lg border-t border-border/50 max-h-48 overflow-y-auto">
                    <ul className="space-y-1.5">
                      {accomplishments.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                          className="flex items-start gap-1.5 text-xs text-muted-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-[var(--accent-primary)] mt-1.5 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
}
