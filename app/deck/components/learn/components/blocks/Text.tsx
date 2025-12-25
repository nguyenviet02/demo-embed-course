import { TextBlock } from '../../types';

const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
};

export function Text({ content, size = 'md', className = '' }: TextBlock) {
    return (
        <p className={`${sizeStyles[size]} ${className}`}>
            {content}
        </p>
    );
}
