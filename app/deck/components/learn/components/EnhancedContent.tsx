'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { TooltipDefinition, DetailModal as DetailModalType } from '../types';
import DetailModal from './DetailModal';

interface EnhancedContentProps {
  html: string;
  tooltips?: TooltipDefinition[];
  details?: DetailModalType[];
  className?: string;
}

const EMPTY_TOOLTIPS: TooltipDefinition[] = [];
const EMPTY_DETAILS: DetailModalType[] = [];

export default function EnhancedContent({
  html,
  tooltips = EMPTY_TOOLTIPS,
  details = EMPTY_DETAILS,
  className = '',
}: EnhancedContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [popoverPos, setPopoverPos] = useState<{ x: number; y: number } | null>(null);
  const [activePopover, setActivePopover] = useState<{
    id: string; // Changed from 'term' to support both old tooltips and new popovers
    title: string;
    content: string;
    x: number;
    y: number;
    placement: 'top' | 'bottom';
    centered?: boolean;
  } | null>(null);
  const activePopoverRef = useRef<{
    id: string;
    title: string;
    content: string;
    x: number;
    y: number;
    placement: 'top' | 'bottom';
    centered?: boolean;
  } | null>(null);

  // Keep ref in sync with state for toggle behavior
  useEffect(() => {
    activePopoverRef.current = activePopover;
  }, [activePopover]);

  // Track client mount for portal usage
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Clamp popover position within viewport after render
  useEffect(() => {
    if (!activePopover) {
      setPopoverPos(null);
      return;
    }

    // Start from desired position
    setPopoverPos({ x: activePopover.x, y: activePopover.y });

    const handle = requestAnimationFrame(() => {
      const el = document.getElementById('enhanced-popover');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const margin = 12;
      const minX = margin + rect.width / 2;
      const maxX = window.innerWidth - rect.width / 2 - margin;
      const clampedX = Math.min(Math.max(activePopover.x, minX), maxX);

      let clampedY: number;
      if (activePopover.placement === 'top') {
        const minY = rect.height + margin;
        clampedY = Math.max(activePopover.y, minY);
      } else {
        const maxY = window.innerHeight - margin;
        clampedY = Math.min(activePopover.y, maxY);
      }

      if (clampedX !== activePopover.x || clampedY !== activePopover.y) {
        setPopoverPos({ x: clampedX, y: clampedY });
      }
    });

    return () => cancelAnimationFrame(handle);
  }, [activePopover]);

  // Process HTML ONCE on mount or when html changes
  useEffect(() => {
    if (!contentRef.current) return;

    const container = contentRef.current;

    // Always reset HTML so processing starts from a clean slate
    container.innerHTML = html;

    const cleanupFunctions: Array<() => void> = [];

    // 1. Add tooltip/popover styling to terms
    tooltips.forEach((tooltip) => {
      const walker = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT,
        null
      );

      const nodesToProcess: Text[] = [];
      let node: Text | null;

      while ((node = walker.nextNode() as Text)) {
        const regex = new RegExp(`\\b${tooltip.term}\\b`, 'gi');
        if (
          regex.test(node.textContent || '') &&
          node.parentElement?.tagName !== 'SCRIPT' &&
          !node.parentElement?.hasAttribute('data-glossary')
        ) {
          nodesToProcess.push(node);
        }
      }

      let occurrenceCount = 0;
      const maxOccurrences = tooltip.maxOccurrences ?? 1; // Default: only first occurrence

      nodesToProcess.forEach((textNode) => {
        // Skip if we've already hit the max occurrences
        if (occurrenceCount >= maxOccurrences) return;

        const text = textNode.textContent || '';
        const parts = text.split(new RegExp(`(\\b${tooltip.term}\\b)`, 'gi'));

        if (parts.length > 1) {
          const fragment = document.createDocumentFragment();
          parts.forEach((part) => {
            if (part.toLowerCase() === tooltip.term.toLowerCase()) {
              // Check if we should still highlight this occurrence
              if (occurrenceCount < maxOccurrences) {
                occurrenceCount++;

                const wrapper = document.createElement('span');
                wrapper.setAttribute('data-glossary', 'true');
                wrapper.style.position = 'relative';
                wrapper.style.display = 'inline-block';

                if (tooltip.indicator === 'icon') {
                  // Icon indicator: term + (i) superscript
                  const termSpan = document.createElement('span');
                  termSpan.textContent = part;

                  const iconSpan = document.createElement('sup');
                  iconSpan.textContent = 'ℹ';
                  iconSpan.className = 'text-blue-400 text-xs ml-0.5 cursor-pointer';
                  iconSpan.style.fontSize = '0.7em';

                  wrapper.appendChild(termSpan);
                  wrapper.appendChild(iconSpan);
                } else {
                  // Underline indicator (default)
                  wrapper.textContent = part;
                  wrapper.className = 'border-b-2 border-dashed border-blue-400/60 cursor-pointer hover:border-blue-400 hover:bg-blue-500/10 transition-all px-0.5 rounded-sm';
                }

                // Click handler for popover with toggle behavior
                const handleClick = (e: Event) => {
                  e.stopPropagation();

                  // Toggle: if clicking the same term, close it
                  if (activePopoverRef.current && activePopoverRef.current.id === tooltip.term) {
                    setActivePopover(null);
                    return;
                  }

                  const rect = wrapper.getBoundingClientRect();
                  const preferred = tooltip.position || 'top';
                  const spaceTop = rect.top;
                  const spaceBottom = window.innerHeight - rect.bottom;
                  const placement: 'top' | 'bottom' =
                    preferred === 'top'
                      ? spaceTop > 160 || spaceTop >= spaceBottom
                        ? 'top'
                        : 'bottom'
                      : spaceBottom > 160 || spaceBottom >= spaceTop
                        ? 'bottom'
                        : 'top';
                  const x = rect.left + rect.width / 2;
                  const y = placement === 'top' ? rect.top - 8 : rect.bottom + 8;

                  setActivePopover({
                    id: tooltip.term,
                    title: tooltip.term,
                    content: tooltip.definition,
                    x,
                    y,
                    placement,
                  });
                };

                wrapper.addEventListener('click', handleClick);
                cleanupFunctions.push(() => wrapper.removeEventListener('click', handleClick));

                fragment.appendChild(wrapper);
              } else {
                // Don't highlight this occurrence, just add as plain text
                fragment.appendChild(document.createTextNode(part));
              }
            } else if (part) {
              fragment.appendChild(document.createTextNode(part));
            }
          });
          textNode.parentNode?.replaceChild(fragment, textNode);
        }
      });
    });

    // 2. Setup detail modal triggers
    details.forEach((detail) => {
      const triggers = container.querySelectorAll(`[data-detail="${detail.id}"]`);

      triggers.forEach((trigger) => {
        trigger.innerHTML = `
          <span class="${detail.trigger.className ||
          'text-blue-400 underline decoration-dotted cursor-pointer hover:text-blue-300 transition-colors'
          }">
            ${detail.trigger.icon ? detail.trigger.icon + ' ' : ''}${detail.trigger.text}
          </span>
        `;
      });
    });

    // Delegated click handler (covers all data-detail triggers, even if re-rendered)
    const handleContainerClick = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const detailEl = target.closest('[data-detail]') as HTMLElement | null;
      if (!detailEl) return;

      const detailId = detailEl.getAttribute('data-detail');
      const detail = details.find((d) => d.id === detailId);
      if (!detail) return;

      event.stopPropagation();

      if (detail.content.size === 'popover') {
        // Calculate position based on trigger element
        const rect = detailEl.getBoundingClientRect();
        const spaceTop = rect.top;
        const spaceBottom = window.innerHeight - rect.bottom;

        // Default to top unless limited space
        const placement = spaceTop > 160 || spaceTop >= spaceBottom ? 'top' : 'bottom';

        const x = rect.left + rect.width / 2;
        const y = placement === 'top' ? rect.top - 8 : rect.bottom + 8;

        setActivePopover({
          id: detail.id,
          title: detail.content.title,
          content: detail.content.html,
          x,
          y,
          placement,
          centered: false,
        });
        return;
      }

      // Otherwise open modal
      setOpenModalId(detail.id);
    };

    container.addEventListener('click', handleContainerClick);
    cleanupFunctions.push(() => container.removeEventListener('click', handleContainerClick));

    // 3. Cleanup function
    return () => {
      cleanupFunctions.forEach(fn => fn());
      // Do NOT reset activePopover here. 
      // If component unmounts, state is lost and portal is removed automatically.
      // If component updates, we want to keep the popover open.
      activePopoverRef.current = null;
    };
  }, [html, tooltips, details]);

  const openModal = details.find((d) => d.id === openModalId);
  const defaultPos = {
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  };
  const isPopoverOpen = !!activePopover;

  return (
    <>
      {/* Main content - NO dangerouslySetInnerHTML, we manage innerHTML manually */}
      <div ref={contentRef} className={className} />

      {isMounted && isPopoverOpen && createPortal(
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black/20"
            onClick={() => setActivePopover(null)}
          />
          <div
            id="enhanced-popover"
            data-popover-id={activePopover?.id || 'none'}
            className="enhanced-popover fixed bg-gray-800 text-white text-sm px-4 py-3 rounded-xl shadow-2xl border border-blue-500/40 max-w-sm"
            style={{
              left: `${(popoverPos || activePopover || defaultPos).x}px`,
              top: `${(popoverPos || activePopover || defaultPos).y}px`,
              transform: activePopover?.centered
                ? 'translate(-50%, -50%)'
                : activePopover?.placement === 'top'
                  ? 'translate(-50%, -100%)'
                  : 'translate(-50%, 0)',
              zIndex: 9999,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-semibold text-blue-300 mb-1 text-xs uppercase tracking-wider">
              {activePopover?.title || ''}
            </div>
            <div
              className="text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: activePopover?.content || '' }}
            />

            {/* Arrow - Only show if NOT centered */}
            {!activePopover?.centered && (
              <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 border-r border-b border-blue-500/40 rotate-45" />
            )}

            {/* Close hint */}
            <div className="text-[10px] text-gray-400 mt-2 text-center opacity-60">
              Click anywhere to close
            </div>
          </div>
        </>,
        document.body
      )}

      {/* Modal for details */}
      {openModalId && (
        <DetailModal
          isOpen={true}
          onClose={() => setOpenModalId(null)}
          title={details.find(d => d.id === openModalId)?.content.title || ''}
          content={details.find(d => d.id === openModalId)?.content.html || ''}
          tabs={details.find(d => d.id === openModalId)?.content.tabs}
          size={(() => {
            const s = details.find(d => d.id === openModalId)?.content.size;
            return s === 'popover' ? undefined : s;
          })()}
        />
      )}
    </>
  );
}
