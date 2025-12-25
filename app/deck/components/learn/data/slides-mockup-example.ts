// Mock-up example for slide-job-analysis with tooltips and detail modals
import { Slide } from '../types';

export const slideJobAnalysisMockup: Slide = {
  id: 'slide-job-analysis',
  type: 'text',
  layout: 'default',
  title: '<span class="text-blue-400">①</span> Job Analysis',

  // Tooltips for term definitions
  tooltips: [
    {
      term: 'Must-Haves',
      definition: 'Những kỹ năng thiếu 1 là fail ngay. Chỉ 3-5 items quan trọng nhất.',
      position: 'top'
    },
    {
      term: 'Nice-to-have',
      definition: 'Kỹ năng bonus, không bắt buộc nhưng là điểm cộng.',
      position: 'top'
    },
    {
      term: 'Production',
      definition: 'Môi trường thực tế với users thật, không phải demo/pet project.',
      position: 'top'
    }
  ],

  // Detail modals for long-form content
  details: [
    {
      id: 'must-have-deep-dive',
      trigger: {
        text: 'Chi tiết về Must-Haves',
        icon: '📖',
        className: 'text-blue-400 underline decoration-dotted cursor-pointer hover:text-blue-300'
      },
      content: {
        title: 'Must-Haves: Hướng dẫn chi tiết',
        size: 'lg',
        html: `
          <div class="space-y-4">
            <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
              <h4 class="font-bold text-blue-300 mb-2">Tại sao chỉ 3-5 items?</h4>
              <p class="text-sm opacity-80">Nhiều hơn = bạn chưa rõ mình cần gì. Mỗi must-have phải đáp ứng:</p>
              <ul class="mt-2 space-y-1 text-sm opacity-80 ml-4">
                <li>• <strong>Critical:</strong> Thiếu nó → không làm được việc</li>
                <li>• <strong>Measurable:</strong> Có thể test/verify trong phỏng vấn</li>
                <li>• <strong>Specific:</strong> Rõ ràng, không mơ hồ</li>
              </ul>
            </div>

            <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
              <h4 class="font-bold text-red-300 mb-2">Sai lầm thường gặp</h4>
              <div class="space-y-2 text-sm">
                <div class="flex gap-2">
                  <span class="text-red-400">❌</span>
                  <div>
                    <strong>"Cần người giỏi communication"</strong>
                    <p class="text-xs opacity-70 mt-0.5">→ Quá mơ hồ, không đo được</p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <span class="text-green-400">✅</span>
                  <div>
                    <strong>"Trình bày technical concept cho non-tech stakeholders"</strong>
                    <p class="text-xs opacity-70 mt-0.5">→ Cụ thể, test được bằng case study</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
              <h4 class="font-bold text-purple-300 mb-2">Template checklist</h4>
              <div class="space-y-1 text-sm opacity-80">
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="rounded" />
                  <span>Có thể test/verify skill này trong 30-45 phút?</span>
                </div>
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="rounded" />
                  <span>Thiếu skill này → người này fail trong 3 tháng đầu?</span>
                </div>
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="rounded" />
                  <span>Đã hỏi team: "Skill nào quan trọng nhất?"</span>
                </div>
              </div>
            </div>
          </div>
        `
      }
    },
    {
      id: 'question-bank-examples',
      trigger: {
        text: 'Xem ví dụ câu hỏi theo role',
        icon: '💡',
        className: 'text-purple-400 underline decoration-dotted cursor-pointer hover:text-purple-300'
      },
      content: {
        title: 'Question Bank - Ví dụ theo Role',
        size: 'xl',
        html: `
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
              <h4 class="font-bold text-blue-300 mb-3">Frontend Developer</h4>
              <div class="space-y-3 text-sm">
                <div>
                  <p class="font-semibold text-blue-200">React (2+ years)</p>
                  <ul class="mt-1 space-y-0.5 text-xs opacity-80 ml-3">
                    <li>• "Dự án React lớn nhất? Bao nhiêu users?"</li>
                    <li>• "Performance issue gặp phải? Fix thế nào?"</li>
                    <li>• "Hooks & state management nào bạn dùng?"</li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold text-blue-200">Responsive Design</p>
                  <ul class="mt-1 space-y-0.5 text-xs opacity-80 ml-3">
                    <li>• "Mobile-first vs Desktop-first approach?"</li>
                    <li>• "Debug responsive bug trên device nào?"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
              <h4 class="font-bold text-purple-300 mb-3">Product Manager</h4>
              <div class="space-y-3 text-sm">
                <div>
                  <p class="font-semibold text-purple-200">Prioritization</p>
                  <ul class="mt-1 space-y-0.5 text-xs opacity-80 ml-3">
                    <li>• "Feature requests nhiều hơn capacity - quyết thế nào?"</li>
                    <li>• "Framework nào dùng? (RICE, MoSCoW...)"</li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold text-purple-200">Stakeholder Management</p>
                  <ul class="mt-1 space-y-0.5 text-xs opacity-80 ml-3">
                    <li>• "Sales đòi feature ngay - Dev cần 2 sprints. Xử lý?"</li>
                    <li>• "C-level disagree với roadmap - approach?"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `
      }
    }
  ],

  contentHTML: `
    <div class="max-w-5xl mx-auto mt-6">
      <p class="text-center text-lg opacity-80 mb-10 max-w-3xl mx-auto">
        Trước khi tuyển, hãy trả lời: <strong class="text-blue-400">"Người này cần làm gì để team thành công?"</strong>
      </p>

      <div class="grid md:grid-cols-2 gap-6">

        <!-- Must-have: 3-5 items MAX -->
        <div class="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/30 rounded-2xl p-6">
          <h3 class="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
            <span class="text-2xl">🎯</span> Liệt kê 3-5 Must-Haves
          </h3>

          <!-- Detail trigger inline -->
          <div class="mb-4">
            <span data-detail="must-have-deep-dive"></span>
          </div>

          <div class="space-y-4">
            <div class="bg-red-500/10 border-l-4 border-red-500 p-3 rounded-r">
              <p class="font-bold text-red-400 text-sm mb-1">❌ Sai lầm:</p>
              <p class="text-xs opacity-80">"Cần người biết React, Vue, Angular, Node, Python, SQL, NoSQL, AWS, Docker..."</p>
            </div>
            <div class="bg-green-500/10 border-l-4 border-green-500 p-3 rounded-r">
              <p class="font-bold text-green-400 text-sm mb-2">✅ Đúng (VD: Frontend Dev):</p>
              <ul class="text-xs space-y-1 opacity-90">
                <li>1. React (2+ years Production)</li>
                <li>2. API integration</li>
                <li>3. Responsive design</li>
                <li><span class="opacity-60">→ Nice-to-have: TypeScript, Tailwind</span></li>
              </ul>
            </div>
            <p class="text-[10px] italic opacity-60 bg-yellow-500/10 p-2 rounded border border-yellow-500/20">
              <strong>Nguyên tắc:</strong> Nếu thiếu 1 trong 3-5 Must-Haves → fail ngay. Phần còn lại chỉ là bonus.
            </p>
          </div>
        </div>

        <!-- Simple Question Template -->
        <div class="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/30 rounded-2xl p-6">
          <h3 class="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <span class="text-2xl">❓</span> Chuẩn bị 2-3 câu hỏi/skill
          </h3>

          <!-- Detail trigger inline -->
          <div class="mb-4">
            <span data-detail="question-bank-examples"></span>
          </div>

          <div class="space-y-3">
            <div class="bg-purple-500/10 rounded-lg p-3">
              <p class="font-bold text-purple-300 text-xs mb-1.5">VD: Skill "React Production"</p>
              <ul class="text-[11px] space-y-1 opacity-90">
                <li><strong>Q1:</strong> "Dự án React lớn nhất bạn làm? Bao nhiêu users?"</li>
                <li><strong>Q2:</strong> "Performance issue nào bạn gặp? Fix thế nào?"</li>
                <li><strong>Q3:</strong> "Explain hooks & state management bạn dùng"</li>
              </ul>
            </div>
            <div class="border-t border-purple-500/20 pt-3">
              <p class="font-bold text-purple-300 text-xs mb-2">Thang điểm đơn giản (1-5):</p>
              <div class="space-y-1 text-[10px]">
                <div class="flex gap-2"><span class="font-mono text-green-400">5</span> = Answer chi tiết, depth, real examples</div>
                <div class="flex gap-2"><span class="font-mono text-blue-400">3</span> = Đáp ứng yêu cầu cơ bản</div>
                <div class="flex gap-2"><span class="font-mono text-red-400">1</span> = Mơ hồ, không có exp thực tế</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Warning -->
      <div class="mt-6 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-cyan-900/20 border border-cyan-500/30 rounded-xl p-5">
        <p class="text-sm flex items-center justify-center gap-2">
          <span class="text-xl">💡</span>
          <strong class="text-cyan-300">Lưu ý:</strong>
          <span class="opacity-80">Đừng copy JD cũ. Nói với team hiện tại: "Người mới cần làm được gì trong 3 tháng đầu?"</span>
        </p>
      </div>
    </div>
  `,
  theme: 'dark'
};
