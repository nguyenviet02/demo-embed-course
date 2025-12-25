import Link from 'next/link';
import { Course } from '../types';

interface CourseCardProps {
    course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
    return (
        <Link href={`/learn/${course.id}`} className="group block">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                {/* Thumbnail Placeholder */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    {/* In a real app, use Next.js Image here */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-4xl">📚</span>
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-2">
                        {course.category}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 flex-1">
                        {course.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-sm text-gray-500">
                        <span>{course.modules.length} Modules</span>
                        <span className="group-hover:translate-x-1 transition-transform">Start Learning →</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
