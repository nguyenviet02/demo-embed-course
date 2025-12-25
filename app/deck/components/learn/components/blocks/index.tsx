import { Block } from '../../types';
import { Heading } from './Heading';
import { Text } from './Text';
import { Image } from './Image';
import { Html } from './Html';

export function renderBlock(block: Block) {
    switch (block.type) {
        case 'heading':
            return <Heading key={block.text} {...block} />;
        case 'text':
            return <Text key={block.content.slice(0, 20)} {...block} />;
        case 'image':
            return <Image key={block.src} {...block} alt={block.alt || ''} />;
        case 'html':
            return <Html key={block.content.slice(0, 20)} {...block} />;
        default:
            // TypeScript exhaustive check
            const _exhaustive: never = block;
            return null;
    }
}

export function renderBlocks(blocks: Block[]) {
    return blocks.map((block, index) => (
        <div key={index} className="mb-4">
            {renderBlock(block)}
        </div>
    ));
}

// Re-export individual components for direct use
export { Heading } from './Heading';
export { Text } from './Text';
export { Image } from './Image';
export { Html } from './Html';
