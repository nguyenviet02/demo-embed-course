import { Course } from '../../types';

export const leadership101: Course = {
  id: 'leadership-101',
  title: 'Leadership 101',
  description: 'Fundamental leadership skills for new managers.',
  thumbnailUrl: '/images/learn/leadership.jpg',
  category: 'Management',
  modules: [
    {
      id: 'module-intro',
      title: 'Introduction',
      slides: [
        {
          id: 'slide-cover',
          type: 'text',
          layout: 'cover',
          theme: 'dark',
          blocks: [
            { type: 'heading', level: 1, text: 'Leadership 101' },
            { type: 'text', content: 'Fundamental skills for new managers', size: 'xl', className: 'opacity-80' },
          ],
        },
        {
          id: 'slide-what-is-leadership',
          type: 'text',
          layout: 'default',
          theme: 'dark',
          blocks: [
            { type: 'heading', level: 2, text: 'What is Leadership?' },
            { type: 'text', content: 'Leadership is not about titles or positions. It\'s about influence and impact.' },
            {
              type: 'html',
              content: `
                <div class="grid grid-cols-2 gap-6 mt-8">
                  <div class="bg-blue-900/30 border border-blue-500/40 rounded-xl p-6">
                    <div class="text-3xl mb-3">🎯</div>
                    <h3 class="text-xl font-bold text-blue-400 mb-2">Vision</h3>
                    <p class="text-sm opacity-80">Set direction and inspire others to follow</p>
                  </div>
                  <div class="bg-green-900/30 border border-green-500/40 rounded-xl p-6">
                    <div class="text-3xl mb-3">🤝</div>
                    <h3 class="text-xl font-bold text-green-400 mb-2">Trust</h3>
                    <p class="text-sm opacity-80">Build relationships and empower your team</p>
                  </div>
                </div>
              `,
            },
          ],
        },
      ],
    },
  ],
};
