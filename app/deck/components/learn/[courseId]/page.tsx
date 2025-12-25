import { courses } from '../data/courses';
import SlideViewer from '../components/SlideViewer';
import { notFound } from 'next/navigation';

// In Next.js 13+ App Router, params is a Promise or object depending on version.
// Assuming standard usage:
interface PageProps {
    params: Promise<{ courseId: string }>;
}

export default async function CoursePlayerPage({ params }: PageProps) {
    const { courseId } = await params;
    const course = courses.find((c) => c.id === courseId);

    if (!course) {
        notFound();
    }

    return <SlideViewer course={course} />;
}
