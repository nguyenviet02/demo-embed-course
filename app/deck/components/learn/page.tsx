import { courses } from './data/courses';
import CourseCard from './components/CourseCard';
import Link from 'next/link';

export default function LearnPage() {
    const featuredCourse = courses.find((c) => c.isFeatured) || courses[0];
    const otherCourses = courses.filter((c) => c.id !== featuredCourse.id);

    // Group by category
    const categories = Array.from(new Set(otherCourses.map((c) => c.category)));

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Digesty
                        </Link>
                        <span className="text-gray-300 dark:text-gray-600">|</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-200">Learn</span>
                    </div>
                    <div className="text-sm text-gray-500">
                        Enterprise Learning Portal
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

                {/* Featured Section */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Course</h2>
                    <div className="relative rounded-2xl overflow-hidden bg-indigo-900 text-white shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80 z-0" />
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0" />

                        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1 space-y-4">
                                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-semibold tracking-wide uppercase border border-blue-400/30">
                                    {featuredCourse.category}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                                    {featuredCourse.title}
                                </h1>
                                <p className="text-lg text-indigo-100 max-w-2xl">
                                    {featuredCourse.description}
                                </p>
                                <div className="pt-4">
                                    <Link
                                        href={`/learn/${featuredCourse.id}`}
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-indigo-900 bg-white hover:bg-indigo-50 transition-colors"
                                    >
                                        Start Learning Now
                                    </Link>
                                </div>
                            </div>
                            {/* Visual decoration */}
                            <div className="hidden md:block w-64 h-64 bg-white/10 rounded-full blur-3xl absolute -right-10 -top-10" />
                        </div>
                    </div>
                </section>

                {/* Categories */}
                {categories.map(category => (
                    <section key={category}>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h2>
                            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherCourses.filter(c => c.category === category).map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    </section>
                ))}

                {/* All Courses Fallback (if no categories or just to show list) */}
                {categories.length === 0 && otherCourses.length > 0 && (
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">All Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherCourses.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    </section>
                )}

            </main>
        </div>
    );
}
