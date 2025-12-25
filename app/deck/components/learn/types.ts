export type SlideType = 'text' | 'image' | 'quiz' | 'interactive';
export type SlideLayout = 'default' | 'cover' | 'section-header' | 'split' | 'quote' | 'data' | 'centered' | 'three-column' | 'reveal' | 'carousel-3d';
export type SlideTheme = 'dark' | 'light' | 'blue' | 'purple' | 'green' | 'brand';

// Tooltip for inline term definitions (now rendered as click-to-show popover)
export interface TooltipDefinition {
    term: string; // The term to match in content
    definition: string; // Short explanation
    position?: 'top' | 'bottom' | 'left' | 'right';
    indicator?: 'underline' | 'icon'; // How to show the term (default: underline)
    maxOccurrences?: number; // Limit highlighting to first N occurrences (default: 1 = first only)
}

// Detail modal for long-form content
export interface DetailModal {
    id: string;
    trigger: {
        text: string; // Text to display as trigger
        icon?: string; // Optional emoji/icon
        className?: string; // Optional styling
    };
    content: {
        title: string;
        html: string; // HTML content for modal/popover
        tabs?: { label: string; content: string }[]; // Optional tabs for modal
        size?: 'popover' | 'sm' | 'md' | 'lg' | 'xl'; // popover = small inline tooltip
    };
}

export interface Slide {
    id: string;
    type: SlideType;
    layout?: SlideLayout;
    title?: string;
    subtitle?: string;
    showBadge?: boolean;
    content?: string; // Standard text content
    contentHTML?: string; // New field for custom HTML visuals
    imageUrl?: string;
    interactiveData?: any;
    quizData?: QuizData;
    chartData?: any;
    theme?: SlideTheme;
    nextItems?: string[]; // CSS selectors for clickable elements that navigate to next slide
    customTransition?: {
        type: 'ripple' | 'zoom-in';
        originSelector?: string; // CSS selector for animation origin. If not defined, use clicked element position
    };
    tooltips?: TooltipDefinition[]; // Inline term definitions
    details?: DetailModal[]; // Long-form content modals
    // New: Block-based content (alternative to content/contentHTML)
    blocks?: Block[];
    // New: Structured columns for three-column layout
    columns?: {
        title: string;
        content: string;
        icon?: string;
        entity?: string;
        color?: string;
        badge?: string;
    }[];
    // New: Carousel Item Data
    carouselItems?: {
        title: string;
        desc?: string;
        icon?: string;
        imageUrl?: string;
        color?: string;
    }[];
    // Narration text for TTS
    narration?: string;
}

export interface QuizData {
    type: 'multiple-choice' | 'flashcard' | 'sorting' | 'matching';
    question: string;
    options?: { id: string; text: string; isCorrect?: boolean }[];
    pairs?: { id: string; left: string; right: string }[];
    items?: { id: string; text: string; categoryId: string }[];
    categories?: { id: string; name: string }[];
}

export interface Module {
    id: string;
    title: string;
    slides: Slide[];
}

export interface Course {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    category: string;
    modules: Module[];
    isFeatured?: boolean;
    contentType?: 'course' | 'deck';
}

// =============================================================================
// Block-based Slide System (new)
// =============================================================================

// Block types - start minimal, add more as patterns emerge
export type Block =
    | HeadingBlock
    | TextBlock
    | ImageBlock
    | HtmlBlock;

export interface HeadingBlock {
    type: 'heading';
    level?: 1 | 2 | 3;
    text: string;
    className?: string;
}

export interface TextBlock {
    type: 'text';
    content: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export interface ImageBlock {
    type: 'image';
    src: string;
    alt?: string;
    caption?: string;
    size?: 'sm' | 'md' | 'lg' | 'full';
    className?: string;
}

export interface HtmlBlock {
    type: 'html';
    content: string;
    className?: string;
}

// Block-based slide (can coexist with legacy Slide)
export interface BlockSlide {
    id: string;
    layout?: SlideLayout;
    theme?: SlideTheme;
    blocks: Block[];
    // Optional: keep support for existing features
    tooltips?: TooltipDefinition[];
    details?: DetailModal[];
}
