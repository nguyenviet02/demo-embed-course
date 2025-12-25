import { HeadingBlock } from '../../types';

const levelStyles = {
    1: 'text-4xl md:text-5xl font-bold',
    2: 'text-2xl md:text-3xl font-bold',
    3: 'text-xl md:text-2xl font-semibold',
};

export function Heading({ level = 1, text, className = '' }: HeadingBlock) {
    const styles = `${levelStyles[level]} ${className}`;

    if (level === 1) return <h1 className={styles}>{text}</h1>;
    if (level === 2) return <h2 className={styles}>{text}</h2>;
    return <h3 className={styles}>{text}</h3>;
}
