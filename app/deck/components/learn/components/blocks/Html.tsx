'use client';

import DOMPurify from 'isomorphic-dompurify';
import { HtmlBlock } from '../../types';

export function Html({ content, className = '' }: HtmlBlock) {
    const sanitized = DOMPurify.sanitize(content);

    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{ __html: sanitized }}
        />
    );
}
