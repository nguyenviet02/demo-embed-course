import { ImageBlock } from '../../types';
import NextImage from 'next/image';

const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    full: 'w-full',
};

export function Image({ src, alt = '', caption, size = 'md', className = '' }: ImageBlock) {
    return (
        <figure className={`${sizeStyles[size]} ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-auto rounded-lg"
            />
            {caption && (
                <figcaption className="mt-2 text-sm text-center opacity-70">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
