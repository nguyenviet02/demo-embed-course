import { Course } from '../../types';

export const jobInterviewing: Course = {
    id: 'job-interviewing',
    title: 'Phỏng vấn Tuyển dụng - Từ Cảm tính đến Chuyên nghiệp',
    description: 'Nâng tầm kỹ năng phỏng vấn từ "Cảm tính" lên "Chuyên nghiệp".',
    thumbnailUrl: '/images/learn/interview-course.jpg',
    category: 'Management',
    isFeatured: true,
    modules: [
      // =================================================================
      // MODULE 1: RAISE THE PROBLEM
      // =================================================================
      {
        id: 'module-problem',
        title: 'Module 1: Nêu Vấn đề',
        slides: [
          {
            id: 'slide-intro',
            type: 'text',
            layout: 'cover',
            title: '<span class="text-5xl font-normal inline-block mb-3">Phỏng vấn Tuyển dụng</span><br/>Từ <span class="bg-red-500/70 px-3 py-1 rounded">Cảm tính</span> đến <span class="bg-cyan-500/70 px-3 py-1 rounded">Chuyên nghiệp</span>',
            subtitle: 'DIGESTY LEARNING',
            content: `
              <div class="flex flex-col items-center justify-center h-full">
                <p class="text-3xl md:text-4xl font-light opacity-90 text-center leading-relaxed mb-8">
                  Học cách phỏng vấn hiệu quả.
                </p>
              </div>
            `,
            theme: 'dark',
            imageUrl: '/images/learn/interview_cover.png'
          },
          {
            id: 'section-problem',
            type: 'text',
            layout: 'section-header',
            title: 'Module 1: Nêu Vấn đề',
            subtitle: 'THE PROBLEM',
            content: 'Tại sao hầu hết các công ty đang phỏng vấn sai cách?',
            theme: 'purple'
          },
          {
            id: 'slide-opening-quote',
            type: 'text',
            layout: 'cover',
            title: '',
            content: `
              <div class="flex flex-col items-center justify-center h-full text-center px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl w-full">
                  <!-- 78% -->
                  <div class="bg-red-900/20 border border-red-500/30 p-8 md:p-10 lg:p-12 rounded-2xl relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
                    <div class="text-6xl md:text-7xl lg:text-7xl xl:text-7xl font-black text-red-400 mb-4 md:mb-6 relative z-10 leading-none tracking-tight">78%</div>
                    <p class="text-xl opacity-90 leading-relaxed relative z-10">
                      các nhà quản lý thừa nhận:<br/>
                      <em class="text-red-300">"Tôi chưa bao giờ được đào tạo<br/>cách phỏng vấn."</em>
                    </p>
                  </div>

                  <!-- 100% -->
                  <div class="bg-yellow-900/20 border border-yellow-500/30 p-8 md:p-10 lg:p-12 rounded-2xl relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
                    <div class="text-6xl md:text-7xl lg:text-7xl xl:text-7xl font-black text-yellow-400 mb-4 md:mb-6 relative z-10 leading-none tracking-tight">100%</div>
                    <p class="text-xl opacity-90 leading-relaxed relative z-10 mb-2">
                      trong số họ đang...<br/>
                      <strong class="text-yellow-300">phỏng vấn mỗi tháng.</strong>
                    </p>
                  </div>
                </div>

                <div class="max-w-3xl">
                  <p class="text-2xl italic opacity-70 mb-8 leading-relaxed">
                    Chúng ta đang giao phó tương lai công ty<br/>
                    vào kỹ năng mà hầu hết mọi người... <span class="text-blue-400">tự mò</span>.
                  </p>

                  <div class="text-sm opacity-40 mt-8">
                    — LinkedIn Talent Solutions, 2023
                  </div>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-business-impact',
            type: 'text',
            layout: 'default',
            title: '',
            contentHTML: `
              <div class="flex flex-col h-full w-full p-8 relative overflow-hidden">
                  <!-- Background Grid -->
                  <div class="absolute inset-0 bg-[#0a0f1c]" style="background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
                  
                  <!-- Title -->
                  <div class="relative z-10 text-center mb-8">
                      <h2 class="text-2xl md:text-3xl font-bold text-white tracking-wider">Tác hại của một quyết định tuyển dụng sai lầm</h2>
                  </div>

                  <!-- Main Content: Iceberg Visualization -->
                  <div class="relative z-10 flex-1 flex items-center justify-center">
                      
                      <!-- Iceberg Container -->
                      <div class="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
                          
                          <!-- The Iceberg Image -->
                          <div class="absolute inset-0 flex items-center justify-center">
                              <img src="/images/learn/iceberg_neon.png" alt="Iceberg Cost Model" class="max-h-full object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]" />
                          </div>

                          <!-- Water Line -->
                          <div class="absolute top-1/3 left-0 right-0 h-0.5 bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>

                          <!-- Labels: Direct Costs Title (Right Side) -->
                          <div class="absolute top-[10%] right-[5%] md:right-[15%] text-left">
                              <div class="flex items-center gap-2 mb-2">
                                  <div class="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                                  <h3 class="text-xl font-bold text-cyan-400">CHI PHÍ TRỰC TIẾP</h3>
                              </div>
                              <!-- Line connector -->
                              <div class="absolute top-4 -left-16 w-16 h-px bg-cyan-400/30"></div>
                              <div class="absolute top-4 -left-16 w-1 h-1 bg-cyan-400 rounded-full"></div>
                          </div>

                          <!-- Labels: Direct Costs List (Left Side) -->
                          <div class="absolute top-[15%] left-[5%] md:left-[15%] text-right">
                              <ul class="space-y-1 text-cyan-100/80">
                                  <li class="flex items-center justify-end gap-2">
                                      Phí tuyển dụng
                                      <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                                  </li>
                                  <li class="flex items-center justify-end gap-2">
                                      Lương & Phúc lợi
                                      <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                                  </li>
                                  <li class="flex items-center justify-end gap-2">
                                      Chi phí Onboarding
                                      <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                                  </li>
                              </ul>
                          </div>

                          <!-- Labels: Hidden Costs (Below Water) -->
                          <div class="absolute bottom-[20%] left-[5%] md:left-[15%] text-right">
                              <div class="flex items-center justify-end gap-2 mb-2">
                                  <h3 class="text-xl font-bold text-purple-400">CHI PHÍ ẨN</h3>
                                  <div class="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,1)]"></div>
                              </div>
                              <!-- Line connector -->
                              <div class="absolute top-4 -right-16 w-16 h-px bg-purple-400/30"></div>
                              <div class="absolute top-4 -right-16 w-1 h-1 bg-purple-400 rounded-full"></div>
                          </div>

                          <!-- Hidden Costs List (Right Side) -->
                          <div class="absolute bottom-[10%] right-[5%] md:right-[15%] text-left">
                              <ul class="space-y-3 text-purple-100/80">
                                  <li class="flex items-center gap-2">
                                      <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                      Năng suất đội ngũ giảm sút
                                  </li>
                                  <li class="flex items-center gap-2">
                                      <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                      Tinh thần & nhuệ khí đi xuống
                                  </li>
                                  <li class="flex items-center gap-2">
                                      <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                      Tổn hại thương hiệu tuyển dụng
                                  </li>
                                  <li class="flex items-center gap-2">
                                      <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                      Nguy cơ mất nhân tài giỏi
                                  </li>
                              </ul>
                          </div>

                      </div>
                  </div>

                  <!-- Footer Message -->
                  <div class="relative z-10 mt-4">
                      <div class="bg-gradient-to-r from-transparent via-cyan-900/30 to-transparent p-4 rounded-lg border border-cyan-500/20 text-center">
                          <p class="text-lg text-cyan-100">
                              Tuyển sai một người là <strong class="text-cyan-400">Chi phí</strong>. 
                              Tuyển sai có hệ thống là <strong class="text-red-400">Tử huyệt</strong>.
                          </p>
                      </div>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-transformation',
            type: 'text',
            layout: 'default',
            title: 'Lời giải: <br/>Phỏng vấn <span class="text-cyan-400">Có Cấu Trúc</span>',
            contentHTML: `
              <div class="flex flex-col items-center justify-center w-full mt-4">

                <!-- Before/After Comparison -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">

                  <!-- BEFORE (Red/Negative) -->
                  <div class="bg-red-900/10 border-2 border-red-500/40 rounded-2xl p-8 relative overflow-hidden backdrop-blur-sm opacity-60">
                    <!-- Background decoration -->
                    <div class="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
                    <div class="absolute bottom-0 left-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>

                    <div class="relative z-10">
                      <!-- Header -->
                      <div class="flex items-center gap-4 mb-6 pb-4 border-b border-red-500/30">
                        <div class="text-5xl">🎲</div>
                        <div>
                          <h3 class="text-3xl font-black text-red-400">PHI CẤU TRÚC</h3>
                          <p class="text-sm uppercase tracking-widest opacity-50">80% các công ty</p>
                        </div>
                      </div>

                      <!-- Content -->
                      <div class="space-y-4">
                        <div class="flex items-center gap-3">
                          <span class="text-red-500 text-2xl">✗</span>
                          <div>
                            <p class="font-bold text-lg text-red-300">Phỏng vấn Tự do</p>
                            <p class="text-sm opacity-70">Lướt qua CV rồi hỏi tùy hứng</p>
                          </div>
                        </div>

                        <div class="flex items-center gap-3">
                          <span class="text-red-500 text-2xl">✗</span>
                          <div>
                            <p class="font-bold text-lg text-red-300">Quyết định Cảm tính</p>
                            <p class="text-sm opacity-70">"Tôi cảm thấy bạn này ổn"</p>
                          </div>
                        </div>

                        <div class="flex items-center gap-3">
                          <span class="text-red-500 text-2xl">↘️</span>
                          <div>
                            <p class="font-bold text-lg text-red-300">Kết quả May rủi</p>
                            <p class="text-sm opacity-70">Như tung đồng xu</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- AFTER (Cyan/Positive) -->
                  <div class="bg-cyan-900/10 border-2 border-cyan-500/60 rounded-2xl p-8 relative overflow-hidden backdrop-blur-sm shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                    <!-- Background decoration -->
                    <div class="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
                    <div class="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl"></div>

                    <!-- 2X Badge -->
                    <div class="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-black text-4xl w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.6)] transform rotate-12 z-20">
                      2X
                    </div>

                    <div class="relative z-10">
                      <!-- Header -->
                      <div class="flex items-center gap-4 mb-6 pb-4 border-b border-cyan-500/30">
                        <div class="text-5xl">📊</div>
                        <div>
                          <h3 class="text-3xl font-black text-cyan-400">CÓ CẤU TRÚC</h3>
                          <p class="text-sm uppercase tracking-widest opacity-50">20% các công ty</p>
                        </div>
                      </div>

                      <!-- Content -->
                      <div class="space-y-4">
                        <div class="flex items-center gap-3">
                          <span class="text-cyan-400 text-2xl">✓</span>
                          <div>
                            <p class="font-bold text-lg text-cyan-300">Phỏng vấn Bài bản</p>
                            <p class="text-sm opacity-70">Chuẩn bị trước, có kịch bản</p>
                          </div>
                        </div>

                        <div class="flex items-center gap-3">
                          <span class="text-cyan-400 text-2xl">✓</span>
                          <div>
                            <p class="font-bold text-lg text-cyan-300">Quyết định Dựa trên Dữ liệu</p>
                            <p class="text-sm opacity-70">Scorecard & bằng chứng cụ thể</p>
                          </div>
                        </div>

                        <div class="flex items-center gap-3">
                          <span class="text-cyan-400 text-2xl">↗️</span>
                          <div>
                            <p class="font-bold text-lg text-cyan-300">Hiệu quả Tăng 2x</p>
                            <p class="text-sm opacity-70">Theo nghiên cứu của Schmidt & Hunter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <!-- Bottom Banner: Key Message -->
                <div class="mt-8 bg-gradient-to-r from-yellow-900/30 via-yellow-600/30 to-yellow-900/30 border border-yellow-500/40 rounded-xl px-8 py-4 text-center backdrop-blur-sm">
                  <div class="flex items-center justify-center gap-3">
                    <span class="text-3xl">🏆</span>
                    <p class="text-xl">
                      Chỉ <strong class="text-yellow-400 text-2xl">20%</strong> công ty chuyển hoá thành công
                    </p>
                    <span class="text-3xl">🏆</span>
                  </div>
                </div>

              </div>
            `,
            theme: 'dark'
          }
          // Mindset slide moved to Module 5: Best Practices
        ]
      },

      // =================================================================
      // MODULE 2: THE SOLUTION (TOOLKIT)
      // =================================================================
      {
        id: 'module-solution',
        title: 'Module 2: Giải pháp Có Cấu Trúc',
        slides: [
          {
            id: 'section-toolkit',
            type: 'text',
            layout: 'section-header',
            title: 'Module 2: The Toolkit',
            subtitle: 'THE SOLUTION',
            content: 'Công cụ cốt lõi để phỏng vấn có cấu trúc.',
            theme: 'blue'
          },
          {
            id: 'slide-frameworks-intro',
            type: 'text',
            layout: 'default',
            title: 'The Toolkit',
            contentHTML: `
              <div class="max-w-4xl mx-auto mt-8">
                <p class="text-center text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Để phỏng vấn hiệu quả, bạn cần 2 công cụ cốt lõi:<br/>
                  <strong class="text-blue-400 text-2xl">Ngôn ngữ chung & Thước đo chuẩn</strong>
                </p>
                <div class="grid md:grid-cols-2 gap-8">
                  <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8 hover:border-blue-400/60 transition-all">
                    <div class="text-center mb-6">
                      <div class="text-5xl mb-3">⭐</div>
                      <h3 class="text-2xl font-bold text-blue-400 mb-2">STAR Method</h3>
                      <p class="text-sm opacity-70">Ngôn ngữ của Bằng chứng</p>
                    </div>
                    <p class="text-center text-sm opacity-80">
                      Dùng để <strong>Design câu hỏi</strong> (Prep) và <strong>Đánh giá câu trả lời</strong> (During).
                    </p>
                  </div>
                  <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-2xl p-8 hover:border-green-400/60 transition-all">
                    <div class="text-center mb-6">
                      <div class="text-5xl mb-3">📏</div>
                      <h3 class="text-2xl font-bold text-green-400 mb-2">The Scorecard</h3>
                      <p class="text-sm opacity-70">Thước đo Khách quan</p>
                    </div>
                    <p class="text-center text-sm opacity-80">
                      Bộ tiêu chí & thang điểm để <strong>đo lường năng lực</strong> thay vì cảm tính.
                    </p>
                  </div>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-ksa-model',
            type: 'text',
            layout: 'split',
            title: 'Mô hình KSA',
            content: `
              <h3 class="text-2xl font-bold text-purple-400 mb-4">Chúng ta tìm gì?</h3>
              <p class="mb-6 opacity-80">
                Để đánh giá toàn diện một con người, hãy nhìn vào 3 chiều kích (Dimensions):
              </p>
              
              <div class="space-y-4">
                <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r">
                  <strong class="text-blue-400 block mb-1">Knowledge (Kiến thức)</strong>
                  <p class="text-sm opacity-80">"Họ biết gì?" - Lý thuyết, quy trình, công cụ. (Dễ đào tạo nhất)</p>
                </div>

                <div class="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                  <strong class="text-green-400 block mb-1">Skills (Kỹ năng)</strong>
                  <p class="text-sm opacity-80">"Họ làm được gì?" - Khả năng áp dụng kiến thức vào thực tế. (Cần thời gian rèn luyện)</p>
                </div>

                <div class="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r">
                  <strong class="text-yellow-400 block mb-1">Abilities (Năng lực/Phẩm chất)</strong>
                  <p class="text-sm opacity-80">"Họ là ai?" - Tư duy, tính cách, tiềm năng. (Khó thay đổi nhất)</p>
                </div>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="relative w-72 h-72">
                      <!-- Triangle/Pyramid Visualization -->
                      <div class="absolute inset-0 flex flex-col items-center justify-center">
                          <!-- Top: Knowledge -->
                          <div class="w-32 h-24 bg-blue-500/20 border border-blue-400 rounded-t-xl flex items-center justify-center mb-1 backdrop-blur-sm">
                              <div class="text-center">
                                  <div class="text-2xl">🧠</div>
                                  <div class="text-xs font-bold text-blue-300">KNOWLEDGE</div>
                              </div>
                          </div>
                          
                          <!-- Middle: Skills -->
                          <div class="w-48 h-24 bg-green-500/20 border border-green-400 flex items-center justify-center mb-1 backdrop-blur-sm">
                              <div class="text-center">
                                  <div class="text-2xl">🛠️</div>
                                  <div class="text-xs font-bold text-green-300">SKILLS</div>
                              </div>
                          </div>
                          
                          <!-- Bottom: Abilities -->
                          <div class="w-64 h-24 bg-yellow-500/20 border border-yellow-400 rounded-b-xl flex items-center justify-center backdrop-blur-sm">
                              <div class="text-center">
                                  <div class="text-2xl">❤️</div>
                                  <div class="text-xs font-bold text-yellow-300">ABILITIES</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="mt-8 text-center">
                      <p class="text-sm opacity-60">Iceberg Model: Những gì bạn thấy (Knowledge/Skills) chỉ là bề nổi.</p>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-question-types',
            type: 'text',
            layout: 'default',
            title: 'Các loại câu hỏi',
            details: [
              {
                id: 'question-types-toolkit',
                trigger: {
                  text: 'Behavioral vs Situational',
                  icon: '🆚'
                },
                content: {
                  title: '2 Loại câu hỏi cốt lõi',
                  size: 'xl',
                  html: '',
                  tabs: [
                    {
                      label: 'Behavioral (Quá khứ)',
                      content: `
                        <div class="space-y-4">
                          <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                            <h4 class="font-bold text-blue-300 mb-2">Behavioral Questions</h4>
                            <p class="text-sm opacity-90 mb-2">
                              "Hành vi quá khứ dự đoán tương lai."
                            </p>
                            <ul class="text-sm space-y-1 opacity-80 list-disc ml-4">
                              <li><strong>Dạng câu hỏi:</strong> "Kể về một lần bạn...", "Mô tả dự án mà..."</li>
                              <li><strong>Mục đích:</strong> Kiểm tra kinh nghiệm thực tế & Patterns.</li>
                              <li><strong>Công thức trả lời:</strong> STAR (Situation, Task, Action, Result).</li>
                            </ul>
                          </div>
                          <div class="bg-blue-500/10 p-3 rounded border border-blue-500/20 text-sm">
                            <strong>Ví dụ:</strong> "Kể về lần bạn bất đồng ý kiến với Tech Lead. Bạn đã làm gì?"
                          </div>
                        </div>
                      `
                    },
                    {
                      label: 'Situational (Tương lai)',
                      content: `
                        <div class="space-y-4">
                          <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
                            <h4 class="font-bold text-purple-300 mb-2">Situational Questions</h4>
                            <p class="text-sm opacity-90 mb-2">
                              "Giả định tình huống để test tư duy."
                            </p>
                            <ul class="text-sm space-y-1 opacity-80 list-disc ml-4">
                              <li><strong>Dạng câu hỏi:</strong> "Bạn sẽ làm gì nếu...", "Giả sử rằng..."</li>
                              <li><strong>Mục đích:</strong> Kiểm tra Problem Solving & Tư duy logic (đặc biệt với Junior chưa nhiều exp).</li>
                              <li><strong>Lưu ý:</strong> Cẩn thận ứng viên "chém gió" lý thuyết suông.</li>
                            </ul>
                          </div>
                          <div class="bg-purple-500/10 p-3 rounded border border-purple-500/20 text-sm">
                            <strong>Ví dụ:</strong> "Nếu Production sập vào 2h sáng và không liên lạc được với ai, bạn sẽ làm gì?"
                          </div>
                        </div>
                      `
                    }
                  ]
                }
              }
            ],
            contentHTML: `
              <div class="max-w-4xl mx-auto mt-8">
                <p class="text-center text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Để khai thác thông tin, bạn cần 2 mũi khoan chính:
                </p>

                <div class="grid md:grid-cols-2 gap-8 mb-10">
                  <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold text-blue-400 mb-4 text-center">1. Behavioral</h3>
                    <p class="text-sm opacity-80 text-center mb-4">Dựa trên Quá khứ</p>
                    <ul class="space-y-2 text-sm opacity-90">
                      <li class="flex gap-2"><span class="text-blue-400">✓</span> Kể về một lần...</li>
                      <li class="flex gap-2"><span class="text-blue-400">✓</span> Mô tả tình huống...</li>
                      <li class="flex gap-2"><span class="text-blue-400">✓</span> Bạn đã làm gì khi...</li>
                    </ul>
                  </div>

                  <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold text-purple-400 mb-4 text-center">2. Situational</h3>
                    <p class="text-sm opacity-80 text-center mb-4">Dựa trên Giả định</p>
                    <ul class="space-y-2 text-sm opacity-90">
                      <li class="flex gap-2"><span class="text-purple-400">✓</span> Bạn sẽ làm gì nếu...</li>
                      <li class="flex gap-2"><span class="text-purple-400">✓</span> Giả sử rằng...</li>
                      <li class="flex gap-2"><span class="text-purple-400">✓</span> Trong trường hợp...</li>
                    </ul>
                    <div class="mt-4 pt-4 border-t border-purple-500/30 text-xs text-center opacity-60 italic">
                      ⚠️ Khác với chữ "S" (Situation) trong STAR là chuyện đã xảy ra.
                    </div>
                  </div>
                </div>
                
                <div class="text-center">
                  <span data-detail="question-types-toolkit"></span>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-star-concept',
            type: 'text',
            layout: 'split',
            title: 'Mô hình STAR',
            content: `
              <p class="text-xl mb-6">Công thức vàng cho Phỏng vấn hành vi.</p>
              <p class="text-sm opacity-60 mb-4 italic">"Past behavior predicts future performance."</p>
              <ul class="space-y-3">
                <li class="p-3 bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <strong class="text-blue-400">Situation/Task</strong>: Bối cảnh & mục tiêu ngắn gọn (1-2 câu).
                </li>
                <li class="p-3 bg-green-900/20 rounded-lg border-l-4 border-green-500">
                    <strong class="text-green-400">Action</strong>: 3-5 hành động cá nhân, quyết định, trade-off; ai làm gì, dùng gì.
                </li>
                <li class="p-3 bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                    <strong class="text-yellow-400">Result</strong>: Kết quả <strong>đo lường</strong> (số liệu/feedback), học được gì.
                </li>
              </ul>
              <div class="mt-4 bg-white/5 p-3 rounded text-sm border border-white/10">
                <strong>Ứng dụng kép:</strong>
                <ul class="list-disc ml-4 mt-1 opacity-80">
                  <li><strong>Prep:</strong> Hỏi để kích hoạt STAR ("Kể về một lần...").</li>
                  <li><strong>During:</strong> Nghe để bắt STAR (Thiếu Action? Hỏi lại ngay).</li>
                </ul>
              </div>
            `,
            theme: 'dark',
            imageUrl: '/images/learn/star_method.png'
          },

          {
            id: 'slide-scorecard-concept',
            type: 'text',
            layout: 'split',
            title: 'The Scorecard',
            content: `
              <p class="text-xl mb-6">Không phải Checklist. Là <strong class="text-green-400">Ma trận ra quyết định</strong>.</p>
              <div class="space-y-4">
                <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h4 class="font-bold text-white mb-2">Cấu tạo 3 phần:</h4>
                  <ul class="space-y-2 text-sm">
                    <li class="flex gap-2 items-start">
                      <span class="text-green-400 font-bold">1. Criteria (Tiêu chí):</span>
                      <div class="opacity-80">
                        <p class="mb-1">Là những gì cần đánh giá. Gồm 2 phần:</p>
                        <ul class="text-xs space-y-1 ml-2 border-l border-white/20 pl-2">
                          <li>🔹 <strong>Role Skills:</strong> Hard Skills (Coding) + Soft Skills (Communication).</li>
                          <li>🔸 <strong>Culture Values:</strong> Traits cố định (Integrity, Ownership).</li>
                        </ul>
                      </div>
                    </li>
                    <li class="flex gap-2 items-start">
                      <span class="text-blue-400 font-bold">2. Rating (Thang điểm):</span>
                      <span class="opacity-80">Đo lường thế nào? (1-5, Pass/Fail).</span>
                    </li>
                    <li class="flex gap-2 items-start">
                      <span class="text-yellow-400 font-bold">3. Evidence (Bằng chứng):</span>
                      <span class="opacity-80">Dựa vào đâu để chấm? (STAR stories).</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-yellow-900/20 p-4 rounded-xl border border-yellow-500/30">
                  <strong class="text-yellow-400 block mb-1">⚠️ Nguyên tắc vàng: "No Evidence = No Score"</strong>
                  <p class="text-sm opacity-80">
                    Đừng chỉ khoanh số. Hãy bắt buộc bản thân viết ra <strong>lý do</strong>.
                    <br/>
                    <em>"Tại sao 4 mà không phải 3? Ứng viên đã nói/làm gì?"</em>
                    <br/>
                    <span class="text-xs mt-1 block opacity-60">👉 Việc này ép não bộ chuyển từ <strong>Cảm tính</strong> (System 1) sang <strong>Tư duy</strong> (System 2).</span>
                  </p>
                </div>

                <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
                  <strong class="text-purple-400 block mb-1">🤔 Chấm điểm Trait (Tính cách) kiểu gì?</strong>
                  <p class="text-sm opacity-80 mb-2">
                    Quy tắc: <strong>Trait ➡️ Behavior (Hành vi) ➡️ Score</strong>.
                  </p>
                  <div class="text-xs bg-black/20 p-2 rounded border border-white/10">
                    <p class="mb-1">VD: Trait <strong>"Integrity"</strong> (Chính trực)</p>
                    <ul class="space-y-1 opacity-70">
                      <li>✅ "Tự nhận lỗi sai dự án cũ" ➡️ <strong>Score 5</strong></li>
                      <li>❌ "Đổ lỗi cho team member" ➡️ <strong>Score 1</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            theme: 'dark',
            imageUrl: '/images/learn/scorecard_concept.png'
          }
        ]
      },

      // =================================================================
      // MODULE 3: THE PROCESS
      // =================================================================
      {
        id: 'module-process',
        title: 'Module 3: Quy trình 3 Giai đoạn',
        slides: [
          {
            id: 'section-process',
            type: 'text',
            layout: 'section-header',
            title: 'Module 3: The Process',
            subtitle: 'BEFORE / DURING / AFTER',
            content: 'Quy trình 3 bước: Chuẩn bị - Phỏng vấn - Đánh giá.',
            theme: 'purple'
          },
          {
            id: 'slide-process-overview',
            type: 'text',
            layout: 'default',
            title: 'Ba giai đoạn của quá trình phỏng vấn',
            nextItems: ['#phase-1-indicator'], // Clickable elements for navigation
            customTransition: {
              type: 'ripple',
              originSelector: '#phase-1-indicator' // Ripple always from phase 1
            },
            contentHTML: `
              <div class="flex flex-col items-center w-full h-full pt-20">
                <div class="relative w-full max-w-5xl">

                  <!-- Connection Line (behind circles) -->
                  <div class="absolute top-[5.5rem] left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500/30 to-gray-700/30 z-0"></div>

                  <!-- Three Phases -->
                  <div class="grid grid-cols-3 gap-8 relative">

                    <!-- Phase 1: BEFORE (HIGHLIGHTED - Clickable) -->
                    <div class="flex flex-col items-center relative cursor-pointer group/phase1" id="phase-1-indicator">
                      <div class="absolute -top-3 text-blue-400 font-bold text-xs cursor-pointer">Bấm để học</div>
                      <div class="relative z-10 w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)] mt-8 transition-transform group-hover/phase1:scale-110">
                        <div class="text-4xl font-black text-white">01</div>
                      </div>
                      <div class="mt-4 text-center">
                        <h3 class="text-2xl font-bold text-blue-400">Chuẩn bị</h3>
                        <p class="text-xs uppercase tracking-widest opacity-50 mt-1">Before</p>
                      </div>
                    </div>

                    <!-- Phase 2: DURING (Dimmed - Not Clickable) -->
                    <div class="flex flex-col items-center opacity-70 cursor-not-allowed">
                      <div class="relative z-10 w-24 h-24 bg-gray-900 border-2 border-purple-500/20 rounded-full flex items-center justify-center mt-10">
                        <div class="text-3xl font-black text-purple-400/50">02</div>
                      </div>
                      <div class="mt-4 text-center">
                        <h3 class="text-xl font-bold text-purple-400">Phỏng vấn</h3>
                        <p class="text-xs uppercase tracking-widest opacity-40 mt-1">During</p>
                      </div>
                    </div>

                    <!-- Phase 3: AFTER (Dimmed - Not Clickable) -->
                    <div class="flex flex-col items-center opacity-70 cursor-not-allowed">
                      <div class="relative z-10 w-24 h-24 bg-gray-900 border-2 border-green-500/20 rounded-full flex items-center justify-center mt-10">
                        <div class="text-3xl font-black text-green-400/50">03</div>
                      </div>
                      <div class="mt-4 text-center">
                        <h3 class="text-xl font-bold text-green-400">Đánh giá</h3>
                        <p class="text-xs uppercase tracking-widest opacity-40 mt-1">After</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'section-before',
            type: 'text',
            layout: 'section-header',
            title: 'Giai đoạn 1: Chuẩn bị',
            subtitle: 'BEFORE',
            content: 'Thành công trong tuyển dụng bắt đầu từ trước khi bạn gặp ứng viên.',
            theme: 'blue'
          },
          {
            id: 'slide-preparation-objectives',
            type: 'text',
            layout: 'default',
            title: 'Mục tiêu Giai đoạn 1',
            contentHTML: `
              <div class="max-w-4xl mx-auto mt-6">
                <p class="text-center text-lg opacity-80 mb-6">Chuẩn bị kỹ càng = Giảm 70% quyết định sai. Mục tiêu: <strong class="text-blue-400">Xây dựng bộ công cụ đánh giá rõ ràng</strong> trước khi gặp ứng viên.</p>
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                    <h3 class="text-lg font-bold text-blue-300 mb-2">🎯 Định nghĩa rõ</h3>
                    <p class="text-sm opacity-80">Liệt kê <strong>3-5 must-haves</strong> quan trọng nhất. Biết chính xác người cần tuyển phải có gì.</p>
                  </div>
                  <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
                    <h3 class="text-lg font-bold text-purple-300 mb-2">📋 Chuẩn bị câu hỏi</h3>
                    <p class="text-sm opacity-80">Thiết kế <strong>2-3 câu hỏi/skill</strong> để test từng must-have một cách cụ thể.</p>
                  </div>
                  <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h3 class="text-lg font-bold text-green-300 mb-2">✅ Scorecard sẵn sàng</h3>
                    <p class="text-sm opacity-80">Có <strong>bảng chấm điểm chuẩn</strong> để đánh giá khách quan, giảm bias.</p>
                  </div>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-preparation-process',
            type: 'text',
            layout: 'default',
            title: 'Chuẩn bị những gì?',
            nextItems: ['#step-1'],
            customTransition: {
              type: 'ripple',
              originSelector: '#step-1'
            },
            contentHTML: `
              <div class="w-full max-w-6xl mx-auto pt-16">
                  <!-- Timeline Line -->
                  <div class="absolute top-1/2 left-0 w-full h-2 bg-gray-700 z-0 transform -translate-y-1/2 rounded-full"></div>

                  <div class="grid grid-cols-4 gap-4 relative">
                      <!-- Step 1: CLICKABLE -->
                      <div id="step-1" class="flex flex-col items-center group cursor-pointer relative z-10">
                          <div class="absolute -top-4 text-blue-400 font-bold text-xs">Bấm để học</div>
                          <div class="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-black text-white shadow-[0_0_40px_rgba(59,130,246,0.6)] mt-8 group-hover:scale-110 transition-transform">
                              1
                          </div>
                          <div class="mt-6 text-center bg-blue-900/30 p-4 rounded-xl border border-blue-500/50 backdrop-blur-sm w-full">
                              <h3 class="text-xl font-bold text-blue-400 mb-1">Define Criteria</h3>
                              <p class="text-xs opacity-80">Xác định Tiêu chí</p>
                          </div>
                      </div>

                      <!-- Step 2: DIMMED -->
                      <div class="flex flex-col items-center opacity-50 cursor-not-allowed z-10">
                          <div class="w-24 h-24 bg-gray-900 border-2 border-purple-500/20 rounded-full flex items-center justify-center text-3xl font-black text-purple-400/50 mt-10">
                              2
                          </div>
                          <div class="mt-6 text-center w-full">
                              <h3 class="text-lg font-bold text-purple-400 mb-1">Persona</h3>
                              <p class="text-xs opacity-70">Chân dung ứng viên</p>
                          </div>
                      </div>

                      <!-- Step 3: DIMMED -->
                      <div class="flex flex-col items-center opacity-50 cursor-not-allowed z-10">
                          <div class="w-24 h-24 bg-gray-900 border-2 border-green-500/20 rounded-full flex items-center justify-center text-3xl font-black text-green-400/50 mt-10">
                              3
                          </div>
                          <div class="mt-6 text-center w-full">
                              <h3 class="text-lg font-bold text-green-400 mb-1">Scorecard</h3>
                              <p class="text-xs opacity-70">Bảng chấm điểm</p>
                          </div>
                      </div>

                      <!-- Step 4: DIMMED (NEW) -->
                      <div class="flex flex-col items-center opacity-50 cursor-not-allowed z-10">
                          <div class="w-24 h-24 bg-gray-900 border-2 border-yellow-500/20 rounded-full flex items-center justify-center text-3xl font-black text-yellow-400/50 mt-10">
                              4
                          </div>
                          <div class="mt-6 text-center w-full">
                              <h3 class="text-lg font-bold text-yellow-400 mb-1">CV Review</h3>
                              <p class="text-xs opacity-70">Soi hồ sơ</p>
                          </div>
                      </div>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-job-analysis',
            type: 'text',
            layout: 'default',
            title: '<span class="text-blue-400">①</span> Job Analysis',
            details: [

              {
                id: 'why-not-copy-jd',
                trigger: {
                  text: 'why?'
                },
                content: {
                  title: 'Tại sao không nên copy JD cũ?',
                  size: 'md',
                  html: `
                    <div class="space-y-4">
                      <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4">
                        <h4 class="font-bold text-yellow-300 mb-3">⚠️ 3 Rủi ro của "Zombie JD":</h4>
                        <div class="space-y-3 text-sm">
                          <div class="flex gap-2">
                            <span class="text-yellow-400 font-bold min-w-[20px]">1.</span>
                            <div>
                              <strong class="text-yellow-200">Lỗi thời (Outdated Context)</strong>
                              <p class="opacity-80 mt-1">Team đã đổi quy trình, tech stack đã nâng cấp, nhưng JD vẫn kẹt ở 2 năm trước. Bạn sẽ tuyển người giỏi... cho quá khứ.</p>
                            </div>
                          </div>
                          <div class="flex gap-2">
                            <span class="text-yellow-400 font-bold min-w-[20px]">2.</span>
                            <div>
                              <strong class="text-yellow-200">Lệch pha (Misalignment)</strong>
                              <p class="opacity-80 mt-1">JD template thường chung chung. Nó không phản ánh được <em>"Tại sao team lại cần người này NGAY LÚC NÀY?"</em> (để fix bug, để scale, hay để lead?).</p>
                            </div>
                          </div>
                          <div class="flex gap-2">
                            <span class="text-yellow-400 font-bold min-w-[20px]">3.</span>
                            <div>
                              <strong class="text-yellow-200">Yêu cầu ma (Phantom Requirements)</strong>
                              <p class="opacity-80 mt-1">Những dòng "thừa kế" từ người cũ nhưng thực tế không ai dùng đến. Nó làm loãng sự tập trung vào những Must-Haves thực sự.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                        <h4 class="font-bold text-green-300 mb-2">✅ Giải pháp: Reality Check</h4>
                        <p class="text-sm opacity-90">
                          Đừng thoả hiệp dùng JD cũ. Hãy hỏi team: <em class="text-green-200">"Thực tế 3 tháng tới, người này phải gánh vác việc gì cụ thể?"</em>
                        </p>
                      </div>
                    </div>
                  `
                }
              },
              {
                id: 'must-haves-combined',
                trigger: {
                  text: 'Giải thích & Ví dụ',
                  icon: '🎯'
                },
                content: {
                  title: 'Must-Haves',
                  size: 'xl',
                  html: '', // Empty because tabs are used
                  tabs: [
                    {
                      label: 'Thông tin',
                      content: `
                        <div class="space-y-4">
                          <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                            <h4 class="font-bold text-blue-300 mb-2">Định nghĩa</h4>
                            <p class="text-sm opacity-90">
                              Là những tiêu chí <strong>sống còn</strong> để làm được việc trong 3 tháng đầu.
                              <br/>
                              <span class="text-xs text-blue-200 block mt-1">👉 Bao gồm: Hard Skills, Soft Skills hoặc Culture Fit.</span>
                              <em class="text-xs text-red-300 block mt-0.5">Miễn là: Không có = Không tuyển (Deal Breaker).</em>
                            </p>
                          </div>

                          <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                            <h4 class="font-bold text-red-300 mb-2">Sai lầm thường gặp</h4>
                            <div class="space-y-3 text-sm">
                              <div class="flex gap-2">
                                <span class="text-red-400">❌</span>
                                <div>
                                  <strong>Kitchen Sink Syndrome</strong>
                                  <p class="text-xs opacity-70 mt-0.5">Liệt kê quá nhiều (React, Vue, Angular, Node, AWS...), không phân biệt chính phụ.</p>
                                </div>
                              </div>
                              <div class="flex gap-2">
                                <span class="text-red-400">❌</span>
                                <div>
                                  <strong>Mơ hồ, không đo được</strong>
                                  <p class="text-xs opacity-70 mt-0.5">"Cần người giỏi communication", "Chịu được áp lực" → Không thể verify cụ thể.</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
                            <h4 class="font-bold text-purple-300 mb-2">Template checklist</h4>
                            <div class="space-y-1 text-sm opacity-80">
                              <div class="flex items-center gap-2">
                                <span class="text-purple-400">□</span>
                                <span>Có thể test/verify skill này trong 30-45 phút?</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <span class="text-purple-400">□</span>
                                <span>Thiếu skill này → người này fail trong 3 tháng đầu?</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <span class="text-purple-400">□</span>
                                <span>Đã hỏi team: "Skill nào quan trọng nhất?"</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      `
                    },
                    {
                      label: 'Ví dụ',
                      content: `
                        <div class="grid md:grid-cols-2 gap-4">
                          <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                            <h4 class="font-bold text-blue-300 mb-3">Frontend Developer</h4>
                            <ul class="space-y-3 text-sm">
                              <li class="flex gap-2">
                                <span class="text-green-400">✓</span>
                                <div>
                                  <strong>React.js (Advanced)</strong>
                                  <p class="text-xs opacity-70">Hiểu sâu về hooks, performance optimization, context API.</p>
                                </div>
                              </li>
                              <li class="flex gap-2">
                                <span class="text-green-400">✓</span>
                                <div>
                                  <strong>Chuyển đổi Design → Code</strong>
                                  <p class="text-xs opacity-70">Pixel-perfect, responsive từ Figma.</p>
                                </div>
                              </li>
                              <li class="flex gap-2">
                                <span class="text-green-400">✓</span>
                                <div>
                                  <strong>API Integration</strong>
                                  <p class="text-xs opacity-70">Xử lý async, error handling, caching cơ bản.</p>
                                </div>
                              </li>
                              <li class="flex gap-2 opacity-60">
                                <span class="text-gray-400">?</span>
                                <div>
                                  <strong class="font-normal">Next.js / SSR</strong>
                                  <p class="text-xs">Nice-to-have (Có thể học sau)</p>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
                            <h4 class="font-bold text-purple-300 mb-3">Product Manager</h4>
                            <ul class="space-y-3 text-sm">
                              <li class="flex gap-2">
                                <span class="text-green-400">✓</span>
                                <div>
                                  <strong>Viết PRD/Specs</strong>
                                  <p class="text-xs opacity-70">Rõ ràng, chi tiết, dev đọc hiểu ngay.</p>
                                </div>
                              </li>
                              <li class="flex gap-2">
                                <span class="text-green-400">✓</span>
                                <div>
                                  <strong>Data Analysis</strong>
                                  <p class="text-xs opacity-70">Tự query SQL cơ bản hoặc dùng tool thành thạo.</p>
                                </div>
                              </li>
                              <li class="flex gap-2">
                                <span class="text-green-400">✓</span>
                                <div>
                                  <strong>Prioritization</strong>
                                  <p class="text-xs opacity-70">Biết framework (RICE/MoSCoW) để cắt scope hợp lý.</p>
                                </div>
                              </li>
                              <li class="flex gap-2 opacity-60">
                                <span class="text-gray-400">?</span>
                                <div>
                                  <strong class="font-normal">Technical Background</strong>
                                  <p class="text-xs">Nice-to-have (Hiểu logic là đủ)</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="mt-4 text-center">
                          <p class="text-xs text-yellow-200/80 italic bg-yellow-900/20 p-2 rounded-lg inline-block border border-yellow-500/20">
                            💡 <strong>Nice-to-have</strong> là điểm cộng, không phải điều kiện tiên quyết.
                          </p>
                        </div>
                      `
                    }
                  ]
                }
              },
            ],
            contentHTML: `
              <div class="max-w-4xl mx-auto mt-8">
                <p class="text-center text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Trước khi tuyển, hãy trả lời:<br/>
                  <strong class="text-blue-400 text-2xl">"Người mới cần làm được gì trong 3 tháng đầu?"</strong>
                </p>

                <div class="flex justify-center mb-10">
                  <!-- Must-have Card - Centered -->
                  <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8 hover:border-blue-400/60 transition-all max-w-lg w-full">
                      <div class="text-center mb-6">
                        <div class="text-5xl mb-3">📊</div>
                        <h3 class="text-2xl font-bold text-blue-400 mb-2">1. Define Criteria</h3>
                        <div class="text-sm opacity-90 text-left">
                          <p class="mb-2 text-center">Xác định rõ chân dung:</p>
                          <ul class="space-y-1">
                            <li><strong class="text-green-400">3-5 Must-Haves</strong> (Sống còn)</li>
                            <li class="pl-4 text-xs opacity-70 italic">- <strong>Knowledge</strong> (Kiến thức)</li>
                            <li class="pl-4 text-xs opacity-70 italic">- <strong>Skills</strong> (Kỹ năng)</li>
                            <li class="pl-4 text-xs opacity-70 italic">- <strong>Abilities</strong> (Phẩm chất/Thái độ)</li>
                            <li class="opacity-70 text-xs">+ Nice-to-haves (Điểm cộng)</li>
                          </ul>
                        </div>
                      </div>
                    <div class="text-center">
                      <span data-detail="must-haves-combined"></span>
                    </div>
                  </div>
                    </div>
                  </div>

                </div>

                <!-- Key Principle -->
                <div class="bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-cyan-900/30 border-2 border-cyan-400/40 rounded-2xl p-6">
                  <p class="text-base flex items-center justify-center gap-3 text-center">
                    <span class="text-2xl">💡</span>
                    <span class="opacity-90">
                      <strong class="text-cyan-300">Lưu ý:</strong>
                      Đừng copy JD cũ (<span data-detail="why-not-copy-jd"></span>). Hỏi team hiện tại để xác định Must-Haves.
                    </span>
                  </p>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-persona',
            type: 'text',
            layout: 'default',
            title: '<span class="text-purple-400">②</span> Candidate Persona',
            details: [],
            contentHTML: `
              <div class="max-w-4xl mx-auto mt-8">
                <p class="text-center text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Viết 1 đoạn mô tả <strong class="text-purple-400 text-2xl">người cụ thể</strong> bạn tìm<br/>
                  để dễ nhận diện khi gặp.
                </p>

                <!-- Single Template Card -->
                <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-8 mb-8">
                  <h3 class="text-2xl font-bold text-purple-400 mb-8 text-center flex items-center justify-center gap-3">
                    <span class="text-4xl">📝</span> Template Persona
                  </h3>
                  <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="space-y-4">
                      <div class="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                        <p class="font-bold text-purple-300 mb-2">1. Kinh nghiệm</p>
                        <p class="text-sm opacity-70 italic">"X năm làm [role], từng ship [scale]"</p>
                      </div>
                      <div class="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                        <p class="font-bold text-purple-300 mb-2">2. Motivation / Goals</p>
                        <p class="text-sm opacity-70 italic">Tại sao họ muốn job này? (Growth, Money, Impact...)</p>
                      </div>
                    </div>
                    <div class="space-y-4">
                      <div class="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                        <p class="font-bold text-purple-300 mb-2">3. Work Style / Mindset</p>
                        <p class="text-sm opacity-70 italic">2-3 đặc điểm văn hóa làm việc</p>
                      </div>
                      <div class="bg-red-500/10 rounded-xl p-4 border-l-4 border-red-500">
                        <p class="font-bold text-red-400 mb-2">4. Red Flags</p>
                        <p class="text-sm text-red-300 italic">2-3 dấu hiệu không phù hợp</p>
                      </div>
                    </div>
                  </div>
                  <div class="text-center pt-4 border-t border-purple-500/20">
                    <!-- Inlined Content to prevent Render Loop -->
                    <div class="text-left mt-4 bg-gray-900/50 p-6 rounded-xl border border-purple-500/30">
                      <h4 class="text-center font-bold text-purple-300 mb-6 text-xl">Ví dụ Candidate Persona</h4>
                      
                      <div class="space-y-6">
                        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-5">
                          <h4 class="font-bold text-blue-300 mb-4 text-lg flex items-center gap-2">
                            <span>💼</span> Marketing Executive
                          </h4>
                          <div class="space-y-3 text-sm">
                            <div class="bg-blue-500/10 p-3 rounded-lg">
                              <p class="font-bold text-blue-300 mb-1.5">Kinh nghiệm:</p>
                              <p class="opacity-80">1-2 năm content marketing, từng chạy campaign với budget 20M+/tháng</p>
                            </div>
                            <div class="bg-blue-500/10 p-3 rounded-lg">
                              <p class="font-bold text-blue-300 mb-1.5">Motivation:</p>
                              <ul class="opacity-80 space-y-0.5 ml-3">
                                <li>• Muốn học về Growth Hacking</li>
                                <li>• Thích môi trường startup (fast-paced)</li>
                                <li>• Muốn ownership cao</li>
                              </ul>
                            </div>
                            <div class="bg-blue-500/10 p-3 rounded-lg">
                              <p class="font-bold text-blue-300 mb-1.5">Mindset:</p>
                              <ul class="opacity-80 space-y-0.5 ml-3">
                                <li>• Test & learn (không sợ fail)</li>
                                <li>• Execution &gt; Lý thuyết</li>
                              </ul>
                            </div>
                            <div class="bg-red-500/10 p-3 rounded-lg border-l-2 border-red-500">
                              <p class="font-bold text-red-400 mb-1.5">Red Flags:</p>
                              <ul class="text-red-300 space-y-0.5 ml-3">
                                <li>• Chỉ biết lý thuyết, chưa làm thực tế</li>
                                <li>• Không quan tâm số liệu</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-5">
                          <h4 class="font-bold text-purple-300 mb-4 text-lg flex items-center gap-2">
                            <span>👨‍💻</span> Senior Backend Developer
                          </h4>
                          <div class="space-y-3 text-sm">
                            <div class="bg-purple-500/10 p-3 rounded-lg">
                              <p class="font-bold text-purple-300 mb-1.5">Kinh nghiệm:</p>
                              <p class="opacity-80">4+ năm backend, từng handle 100K+ concurrent users</p>
                            </div>
                            <div class="bg-purple-500/10 p-3 rounded-lg">
                              <p class="font-bold text-purple-300 mb-1.5">Motivation:</p>
                              <ul class="opacity-80 space-y-0.5 ml-3">
                                <li>• Chán làm outsource, muốn build product</li>
                                <li>• Thích giải bài toán High Concurrency</li>
                                <li>• Muốn mentor các bạn junior</li>
                              </ul>
                            </div>
                            <div class="bg-purple-500/10 p-3 rounded-lg">
                              <p class="font-bold text-purple-300 mb-1.5">Mindset:</p>
                              <ul class="opacity-80 space-y-0.5 ml-3">
                                <li>• Ownership end-to-end</li>
                                <li>• Tư duy scalability & maintainability</li>
                              </ul>
                            </div>
                            <div class="bg-red-500/10 p-3 rounded-lg border-l-2 border-red-500">
                              <p class="font-bold text-red-400 mb-1.5">Red Flags:</p>
                              <ul class="text-red-300 space-y-0.5 ml-3">
                                <li>• Chỉ làm theo ticket, không nghĩ big picture</li>
                                <li>• Blame tooling/team khi có issue</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Key Principle -->
                <div class="grid md:grid-cols-2 gap-4 mb-8">
                  <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 text-center">
                    <h4 class="font-bold text-blue-300 mb-1">Step 1: Criteria</h4>
                    <p class="text-sm opacity-80"><strong>Capability</strong> (Năng lực)</p>
                    <p class="text-xs opacity-60 mt-1">"Họ CÓ THỂ làm gì?" (Can do)</p>
                  </div>
                  <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 text-center">
                    <h4 class="font-bold text-purple-300 mb-1">Step 2: Persona</h4>
                    <p class="text-sm opacity-80"><strong>Nature</strong> (Bản chất)</p>
                    <p class="text-xs opacity-60 mt-1">"Họ LÀ người thế nào?" (Is)</p>
                  </div>
                </div>

                <div class="bg-gradient-to-r from-yellow-900/30 via-orange-900/30 to-yellow-900/30 border-2 border-yellow-400/40 rounded-2xl p-6 mb-4">
                  <p class="flex items-center justify-center gap-3 text-center text-base">
                    <span class="text-2xl">💡</span>
                    <span class="opacity-90">
                      <strong class="text-yellow-300">Nguyên tắc:</strong>
                      Đọc Persona phải thấy ra một "con người sống động", không phải một cái máy code.
                    </span>
                  </p>
                </div>

                <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-4 text-center">
                  <strong class="text-red-400 block mb-1">⚠️ Cẩn thận bẫy "Framing"</strong>
                  <p class="text-sm opacity-80">
                    Persona là <strong>Giả thuyết</strong> để bắt đầu, không phải cái lồng.
                    <br/>
                    Đừng từ chối ứng viên chỉ vì họ "không giống tưởng tượng".
                    <br/>
                    <span class="text-xs opacity-60 italic">Hãy tìm kiếm sự bất ngờ thú vị (Culture Add).</span>
                  </p>
                </div>

                <div class="mt-6 pt-6 border-t border-white/10 text-center">
                  <p class="text-xs uppercase tracking-widest text-white/40 mb-2">Industry Standard</p>
                  <p class="text-sm opacity-60">
                    Amazon/Netflix có bộ <strong>Culture Persona</strong> chung (Leadership Principles).
                    <br/>
                    Nhiệm vụ của bạn: Cộng thêm <strong>Role Persona</strong> (Đặc thù vị trí) để có chân dung hoàn chỉnh.
                  </p>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-standardized-questions',
            type: 'text',
            layout: 'default',
            title: '<span class="text-blue-400">②</span> Standardized Question Set',
            details: [
              {
                id: 'question-bank-link',
                trigger: {
                  text: 'Xem lại Toolkit: Các loại câu hỏi',
                  icon: '🛠️'
                },
                content: {
                  title: 'Toolkit Reminder',
                  size: 'md',
                  html: `
                    <div class="text-center p-4">
                      <p class="mb-4">Hãy nhớ phối hợp 2 mũi khoan:</p>
                      <div class="grid grid-cols-2 gap-4 text-sm">
                        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/30">
                          <strong class="text-blue-400 block">Behavioral</strong>
                          <span class="opacity-70">Quá khứ (STAR)</span>
                        </div>
                        <div class="bg-purple-900/20 p-3 rounded border border-purple-500/30">
                          <strong class="text-purple-400 block">Situational</strong>
                          <span class="opacity-70">Tương lai (Hypothetical)</span>
                        </div>
                      </div>
                    </div>
                  `
                }
              }
            ],
            contentHTML: `
              <div class="max-w-4xl mx-auto mt-8">
                <p class="text-center text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Đừng ứng biến. Hãy dùng bộ câu hỏi <strong class="text-blue-400">Chuẩn hóa</strong> cho mọi ứng viên.
                </p>

                <div class="grid md:grid-cols-2 gap-8 mb-10">
                  <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold text-blue-400 mb-4 text-center">1. Core Questions</h3>
                    <p class="text-sm opacity-80 text-center mb-4">Hỏi TẤT CẢ ứng viên giống nhau.</p>
                    <ul class="space-y-2 text-sm opacity-90">
                      <li class="flex gap-2"><span class="text-blue-400">✓</span> Tạo mặt bằng chung (Baseline).</li>
                      <li class="flex gap-2"><span class="text-blue-400">✓</span> Giảm thiên kiến (Bias).</li>
                      <li class="flex gap-2"><span class="text-blue-400">✓</span> So sánh táo với táo.</li>
                    </ul>
                  </div>

                  <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold text-purple-400 mb-4 text-center">2. Question Bank</h3>
                    <p class="text-sm opacity-80 text-center mb-4">Xây dựng từ Toolkit.</p>
                    <div class="text-center">
                      <span data-detail="question-bank-link"></span>
                    </div>
                  </div>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-cv-review',
            type: 'text',
            layout: 'default',
            title: '<span class="text-yellow-400">③</span> CV Review & Probing',
            details: [
              {
                id: 'cv-scanner-guide',
                trigger: {
                  text: 'Hướng dẫn soi CV nhanh',
                  icon: '🔍'
                },
                content: {
                  title: 'Kỹ thuật Scan CV trong 30s',
                  size: 'lg',
                  html: `
                    <div class="space-y-4">
                      <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4">
                        <h4 class="font-bold text-yellow-300 mb-2">Mục tiêu: Tìm "Mùi" (Smell Test)</h4>
                        <p class="text-sm opacity-90 mb-3">
                          Bạn không đọc tiểu thuyết. Bạn đang tìm bằng chứng để <strong>Confirm</strong> hoặc <strong>Deny</strong> giả thuyết về ứng viên.
                        </p>
                      </div>

                      <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                          <h4 class="font-bold text-red-400 mb-2">🚩 Red Flags (Cần hỏi kỹ)</h4>
                          <ul class="text-sm space-y-2 opacity-90">
                            <li>• <strong>Gaps:</strong> Khoảng trống > 6 tháng không giải thích.</li>
                            <li>• <strong>Job Hopping:</strong> 3 công ty trong 2 năm.</li>
                            <li>• <strong>Vague:</strong> "Tham gia dự án", "Hỗ trợ team" (Không có ownership).</li>
                            <li>• <strong>Typos/Format:</strong> Cẩu thả trong CV = Cẩu thả trong code.</li>
                          </ul>
                        </div>

                        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                          <h4 class="font-bold text-green-400 mb-2">✅ Green Flags (Tín hiệu tốt)</h4>
                          <ul class="text-sm space-y-2 opacity-90">
                            <li>• <strong>Numbers:</strong> "Tăng 20% performance", "Giảm 50% lỗi".</li>
                            <li>• <strong>Progression:</strong> Junior → Senior trong cùng 1 cty.</li>
                            <li>• <strong>Side Projects:</strong> Có đam mê ngoài giờ làm.</li>
                            <li>• <strong>Tailored:</strong> CV sửa riêng cho vị trí này.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  `
                }
              }
            ],
            contentHTML: `
              <div class="max-w-4xl mx-auto mt-8">
                <p class="text-center text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  CV Review không chỉ để "duyệt".<br/>
                  Nó dùng để tạo ra <strong class="text-yellow-400 text-2xl">Probing Questions</strong> (Câu hỏi đào sâu).
                </p>

                <div class="grid md:grid-cols-2 gap-8 mb-10">
                  <!-- Red Flags Card -->
                  <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 border-2 border-red-500/40 rounded-2xl p-8 hover:border-red-400/60 transition-all">
                    <div class="text-center mb-6">
                      <div class="text-5xl mb-3">🚩</div>
                      <h3 class="text-2xl font-bold text-red-400 mb-2">Red Flags</h3>
                      <p class="text-sm opacity-70">Dấu hiệu cảnh báo cần đào sâu</p>
                    </div>
                    <ul class="text-left space-y-3 text-sm opacity-80">
                      <li class="flex gap-2"><span class="text-red-400">✗</span> Job hopping liên tục</li>
                      <li class="flex gap-2"><span class="text-red-400">✗</span> Mô tả chung chung, thiếu số liệu</li>
                      <li class="flex gap-2"><span class="text-red-400">✗</span> Lỗi chính tả / Format cẩu thả</li>
                    </ul>
                  </div>

                  <!-- Green Flags Card -->
                  <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-2xl p-8 hover:border-green-400/60 transition-all">
                    <div class="text-center mb-6">
                      <div class="text-5xl mb-3">✅</div>
                      <h3 class="text-2xl font-bold text-green-400 mb-2">Green Flags</h3>
                      <p class="text-sm opacity-70">Tín hiệu tiềm năng</p>
                    </div>
                    <ul class="text-left space-y-3 text-sm opacity-80">
                      <li class="flex gap-2"><span class="text-green-400">✓</span> Thăng tiến rõ ràng (Promotion)</li>
                      <li class="flex gap-2"><span class="text-green-400">✓</span> Kết quả định lượng (Numbers)</li>
                      <li class="flex gap-2"><span class="text-green-400">✓</span> Relevant Side Projects</li>
                    </ul>
                  </div>
                </div>

                <!-- Interactive Trigger -->
                <div class="text-center mb-8">
                  <span data-detail="cv-scanner-guide"></span>
                </div>

                <!-- Key Principle -->
                <div class="bg-gradient-to-r from-yellow-900/30 via-orange-900/30 to-yellow-900/30 border-2 border-yellow-400/40 rounded-2xl p-6">
                  <p class="flex items-center justify-center gap-3 text-center text-base">
                    <span class="text-2xl">💡</span>
                    <span class="opacity-90">
                      <strong class="text-yellow-300">The "So What?" Test:</strong>
                      Đọc mỗi dòng kinh nghiệm và tự hỏi:
                      <em class="text-yellow-200">"Kinh nghiệm này chứng minh được Must-Have nào?"</em>
                    </span>
                  </p>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-interview-guide',
            type: 'text',
            layout: 'split',
            title: '<span class="text-purple-400">④</span> The Interview Guide',
            content: `
              <h3 class="text-2xl font-bold text-purple-400 mb-4">Kịch bản Phỏng vấn</h3>
              <p class="mb-6 opacity-80">
                Đừng vào phòng tay không. Hãy mang theo "Tấm bản đồ" của bạn.
              </p>
              
              <div class="space-y-4">
                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
                  <strong class="text-purple-400 block mb-1">1. Context</strong>
                  <p class="text-sm opacity-80">Tên ứng viên, Vị trí, Thời gian, Người phỏng vấn.</p>
                </div>
                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                  <strong class="text-blue-400 block mb-1">2. Standardized Questions</strong>
                  <p class="text-sm opacity-80">3-5 câu hỏi cốt lõi (Behavioral/Situational) đã chuẩn bị.</p>
                </div>
                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
                  <strong class="text-yellow-400 block mb-1">3. Probing Questions</strong>
                  <p class="text-sm opacity-80">Câu hỏi riêng cho ứng viên này (từ CV Review).</p>
                </div>
                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                  <strong class="text-green-400 block mb-1">4. Scorecard</strong>
                  <p class="text-sm opacity-80">Khung chấm điểm ngay bên cạnh câu hỏi.</p>
                </div>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md text-gray-900 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                      <div class="border-b-2 border-gray-200 pb-4 mb-4 flex justify-between items-center">
                          <h4 class="font-bold text-xl uppercase tracking-widest">Interview Guide</h4>
                          <div class="text-xs bg-gray-200 px-2 py-1 rounded">CONFIDENTIAL</div>
                      </div>
                      
                      <div class="space-y-4 font-mono text-sm">
                          <div class="flex justify-between border-b border-gray-100 pb-2">
                              <span class="text-gray-500">Candidate:</span>
                              <strong>Nguyen Van A</strong>
                          </div>
                          
                          <div class="bg-blue-50 p-3 rounded border border-blue-100">
                              <strong class="block text-blue-800 mb-1">Q1: Tell me about a time...</strong>
                              <div class="flex gap-2 mt-2">
                                  <div class="w-4 h-4 border border-gray-400 rounded-full"></div>
                                  <div class="w-4 h-4 border border-gray-400 rounded-full"></div>
                                  <div class="w-4 h-4 border border-gray-400 rounded-full"></div>
                                  <div class="w-4 h-4 border border-gray-400 rounded-full"></div>
                                  <div class="w-4 h-4 border border-gray-400 rounded-full"></div>
                              </div>
                          </div>

                          <div class="bg-yellow-50 p-3 rounded border border-yellow-100">
                              <strong class="block text-yellow-800 mb-1">Probe (CV): Gap 2022?</strong>
                              <p class="text-xs text-gray-500 italic">Verify reason for leaving Company X.</p>
                          </div>
                      </div>

                      <div class="mt-8 pt-4 border-t-2 border-gray-200 text-center text-xs text-gray-400">
                          DIGESTY RECRUITMENT SYSTEM
                      </div>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-scorecard',
            type: 'text',
            layout: 'default',
            title: '<span class="text-green-400">⑤</span> Scorecard',
            details: [
              {
                id: 'scorecard-example',
                trigger: {
                  text: 'Xem ví dụ Scorecard chi tiết',
                  icon: '📊'
                },
                content: {
                  title: 'Ví dụ Scorecard: Marketing Executive',
                  size: 'xl',
                  html: `
                    <div class="space-y-6">
                      <!-- Section 1: Must-Haves -->
                      <div class="bg-red-900/10 border border-red-500/30 rounded-xl overflow-hidden">
                        <div class="bg-red-900/30 px-4 py-2 border-b border-red-500/30 flex justify-between items-center">
                          <div>
                            <h4 class="font-bold text-red-300">1. Must-Haves (The Gatekeepers)</h4>
                            <p class="text-xs text-red-200/70 mt-0.5">Passing Bar: <strong>3/5</strong> (Mức độ cơ bản để làm được việc)</p>
                          </div>
                          <span class="text-xs bg-red-500/20 text-red-200 px-2 py-1 rounded">Hệ số: Vô cực (∞)</span>
                        </div>
                        <div class="overflow-x-auto">
                          <table class="w-full text-sm">
                            <thead class="bg-red-900/10 text-red-200/70 text-xs uppercase">
                              <tr>
                                <th class="text-left py-2 px-4">Tiêu chí</th>
                                <th class="text-center py-2 px-3 w-24">Điểm (1-5)</th>
                                <th class="text-left py-2 px-4">Evidence</th>
                              </tr>
                            </thead>
                            <tbody class="divide-y divide-red-500/10">
                              <tr>
                                <td class="py-3 px-4 font-medium">Content writing</td>
                                <td class="text-center py-3 px-3"><span class="text-green-400 font-bold">4</span> <span class="text-xs opacity-50">/5</span></td>
                                <td class="py-3 px-4 opacity-80">Good samples, clear voice</td>
                              </tr>
                              <tr>
                                <td class="py-3 px-4 font-medium">Data-driven</td>
                                <td class="text-center py-3 px-3"><span class="text-green-400 font-bold">5</span> <span class="text-xs opacity-50">/5</span></td>
                                <td class="py-3 px-4 opacity-80">Strong GA skills</td>
                              </tr>
                              <tr>
                                <td class="py-3 px-4 font-medium">Execution mindset</td>
                                <td class="text-center py-3 px-3"><span class="text-green-400 font-bold">3</span> <span class="text-xs opacity-50">/5</span></td>
                                <td class="py-3 px-4 opacity-80">Shipped 3 campaigns (Đạt yêu cầu)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="bg-red-900/20 px-4 py-2 text-xs text-red-300 italic text-center border-t border-red-500/20">
                          ⚠️ Bất kỳ tiêu chí nào <strong>&lt; 3 điểm</strong> = LOẠI NGAY (Fail)
                        </div>
                      </div>

                      <!-- Section 2: Nice-to-haves -->
                      <div class="bg-blue-900/10 border border-blue-500/30 rounded-xl overflow-hidden">
                        <div class="bg-blue-900/30 px-4 py-2 border-b border-blue-500/30 flex justify-between items-center">
                          <h4 class="font-bold text-blue-300">2. Nice-to-haves (The Bonus)</h4>
                          <span class="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">Hệ số: +1</span>
                        </div>
                        <div class="overflow-x-auto">
                          <table class="w-full text-sm">
                            <thead class="bg-blue-900/10 text-blue-200/70 text-xs uppercase">
                              <tr>
                                <th class="text-left py-2 px-4">Tiêu chí</th>
                                <th class="text-center py-2 px-3 w-24">Điểm (1-5)</th>
                                <th class="text-left py-2 px-4">Ghi chú</th>
                              </tr>
                            </thead>
                            <tbody class="divide-y divide-blue-500/10">
                              <tr>
                                <td class="py-3 px-4 font-medium">Ads (FB/Google)</td>
                                <td class="text-center py-3 px-3 font-bold text-blue-400">3</td>
                                <td class="py-3 px-4 opacity-80">Basic understanding</td>
                              </tr>
                              <tr>
                                <td class="py-3 px-4 font-medium">Design (Canva/Ps)</td>
                                <td class="text-center py-3 px-3 font-bold text-blue-400">4</td>
                                <td class="py-3 px-4 opacity-80">Good eye for design</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <!-- Summary -->
                      <div class="bg-gray-800/50 rounded-xl p-4 flex justify-between items-center border border-gray-700">
                        <div>
                          <div class="text-sm opacity-70">Kết quả chung cuộc</div>
                          <div class="font-bold text-green-400 text-lg">HIRE</div>
                        </div>
                        <div class="text-right">
                          <div class="text-sm opacity-70">Tổng điểm Bonus</div>
                          <div class="font-bold text-blue-400 text-lg">7/10</div>
                        </div>
                      </div>

                      <!-- Logic Guide -->
                      <div class="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-4">
                        <h4 class="font-bold text-yellow-500 mb-2 text-sm">💡 Quy trình & Logic:</h4>
                        <ul class="space-y-2 text-sm opacity-90">
                          <li class="flex gap-2">
                            <span class="text-blue-400 font-bold">1. Job Analysis:</span>
                            <span>List ra tất cả tiêu chí. Phân loại ngay: đâu là <strong>Must-Have</strong> (Sống còn), đâu là <strong>Nice-to-have</strong> (Điểm cộng).</span>
                          </li>
                          <li class="flex gap-2">
                            <span class="text-red-400 font-bold">2. Must-Haves:</span>
                            <span>Là Gatekeeper. Đặt ra "Passing Bar" (ví dụ: 3/5). Bất kỳ tiêu chí nào <strong>dưới mức này</strong> = Loại ngay.</span>
                          </li>
                          <li class="flex gap-2">
                            <span class="text-green-400 font-bold">3. Nice-to-haves:</span>
                            <span>Là Bonus. Dùng để so sánh/xếp hạng các ứng viên đã qua vòng Must-Haves.</span>
                          </li>
                        </ul>
                        <div class="mt-3 pt-3 border-t border-yellow-500/20 text-sm">
                          <strong class="text-yellow-200">⚖️ Quy tắc ra quyết định:</strong>
                          <ul class="list-disc ml-4 mt-1 opacity-80 space-y-1">
                            <li>Ưu tiên người có <strong>Must-Have Score cao hơn</strong> (Làm việc tốt hơn).</li>
                            <li>Chỉ dùng Bonus khi Must-Have Score <strong>ngang ngửa nhau</strong> (chênh lệch &lt; 0.5).</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  `
                }
              }
            ],
            contentHTML: `
              <div class="max-w-4xl mx-auto mt-8">
                <p class="text-center text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Bảng chấm điểm đơn giản:<br/>
                  <strong class="text-green-400 text-2xl">Điểm 1-5 cho mỗi skill</strong>
                </p>

                <!-- Scorecard Concept -->
                <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-2xl p-8 mb-8">
                  <div class="text-center mb-8">
                    <div class="text-5xl mb-4">📊</div>
                    <h3 class="text-2xl font-bold text-green-400 mb-3">Cách chấm điểm</h3>
                    <p class="text-sm opacity-70 max-w-md mx-auto">
                      Chấm 1-5 cho mỗi must-have skill dựa trên evidence trong phỏng vấn
                    </p>
                  </div>

                  <div class="text-center mb-6">
                    <span data-detail="scorecard-example"></span>
                  </div>
                </div>

                <!-- Decision Rules -->
                <div class="grid md:grid-cols-2 gap-6 mb-8">
                  <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6">
                    <h3 class="font-bold text-blue-400 mb-5 text-xl text-center flex items-center justify-center gap-2">
                      <span class="text-2xl">🎯</span> Quy tắc
                    </h3>
                    <div class="space-y-3">
                      <div class="flex items-center gap-3 bg-green-500/10 p-3 rounded-xl border border-green-500/20">
                        <span class="text-green-400 font-mono font-bold text-lg min-w-[60px]">≥4.0</span>
                        <span class="text-sm">→ <strong class="text-green-300">Hire ngay</strong></span>
                      </div>
                      <div class="flex items-center gap-3 bg-blue-500/10 p-3 rounded-xl border border-blue-500/20">
                        <span class="text-blue-400 font-mono font-bold text-lg min-w-[60px]">3.5-3.9</span>
                        <span class="text-sm">→ <strong class="text-blue-300">Hire</strong></span>
                      </div>
                      <div class="flex items-center gap-3 bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/20">
                        <span class="text-yellow-400 font-mono font-bold text-lg min-w-[60px]">3.0-3.4</span>
                        <span class="text-sm">→ Cân nhắc</span>
                      </div>
                      <div class="flex items-center gap-3 bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                        <span class="text-red-400 font-mono font-bold text-lg min-w-[60px]">&lt;3.0</span>
                        <span class="text-sm">→ <strong class="text-red-300">No Hire</strong></span>
                      </div>
                    </div>
                  </div>

                  <div class="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border-2 border-cyan-500/40 rounded-2xl p-6">
                    <h3 class="font-bold text-cyan-400 mb-5 text-xl text-center flex items-center justify-center gap-2">
                      <span class="text-2xl">💡</span> Lợi ích
                    </h3>
                    <ul class="space-y-3 text-sm opacity-90">
                      <li class="flex gap-2">
                        <span class="text-cyan-400">✓</span>
                        <span><strong>Khách quan:</strong> So sánh nhiều ứng viên</span>
                      </li>
                      <li class="flex gap-2">
                        <span class="text-cyan-400">✓</span>
                        <span><strong>Giải thích:</strong> Không "gut feeling"</span>
                      </li>
                      <li class="flex gap-2">
                        <span class="text-cyan-400">✓</span>
                        <span><strong>Giảm bias:</strong> Halo effect, recency...</span>
                      </li>
                      <li class="flex gap-2 pt-3 border-t border-cyan-500/20">
                        <span class="text-yellow-400">⚡</span>
                        <span class="text-yellow-300"><strong>Đơn giản.</strong> Dùng ngay!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            theme: 'dark'
          },

          {
            id: 'section-during',
            type: 'text',
            layout: 'section-header',
            title: 'Giai đoạn 2: Phỏng vấn',
            subtitle: 'DURING',
            content: 'Nghệ thuật đặt câu hỏi và khoa học của sự lắng nghe.',
            theme: 'purple'
          },
          {
            id: 'slide-during-objectives',
            type: 'text',
            layout: 'default',
            title: 'Mục tiêu Giai đoạn 2',
            contentHTML: `
              <div class="max-w-4xl mx-auto mt-6">
                <p class="text-center text-lg opacity-80 mb-6">Bạn vào phòng để <strong class="text-purple-400">thu thập bằng chứng</strong> cho Scorecard đã chuẩn, không ứng biến ngoài scope.</p>
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
                    <h3 class="text-lg font-bold text-purple-300 mb-2">🎯 Fit & Evidence</h3>
                    <p class="text-sm opacity-80">Lấy ví dụ hành vi/tech <strong>gắn với từng tiêu chí</strong> trong Scorecard.</p>
                  </div>
                  <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                    <h3 class="text-lg font-bold text-blue-300 mb-2">🧭 Theo Guide</h3>
                    <p class="text-sm opacity-80">Dùng <strong>Core Question Bank</strong> & follow-up đã chuẩn, tránh hỏi ngoài bối cảnh.</p>
                  </div>
                  <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h3 class="text-lg font-bold text-green-300 mb-2">🤝 Trải nghiệm tốt</h3>
                    <p class="text-sm opacity-80">Giữ tác phong chuyên nghiệp, kết thúc với <strong>next steps rõ</strong> và mở kênh liên lạc.</p>
                  </div>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-demeanor',
            type: 'text',
            layout: 'split',
            title: 'Tác phong & Trải nghiệm',
            content: `
              <h3 class="text-3xl font-bold text-blue-400 mb-6">Bạn là Gương mặt & Người bán</h3>
              <p class="text-lg opacity-80 mb-6">Tác phong tốt giúp vừa <strong>tăng trust</strong>, vừa tạo nền cho phần "sell" cuối buổi.</p>
              <div class="grid gap-3">
                <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p class="font-bold text-blue-300 mb-1">DO</p>
                  <ul class="text-sm opacity-80 space-y-1">
                    <li>• Ngồi thẳng, nhìn camera (online), giọng rõ ràng.</li>
                    <li>• Nói trước agenda & thời lượng, check thời gian.</li>
                    <li>• Phản hồi ấm áp: gật, paraphrase, cảm ơn câu trả lời.</li>
                  </ul>
                </div>
                <div class="bg-red-900/10 border-l-4 border-red-500/60 p-4 rounded-r-lg">
                  <p class="font-bold text-red-300 mb-1">DON'T</p>
                  <ul class="text-sm opacity-80 space-y-1">
                    <li>• Nhìn điện thoại, cắt lời, tỏ ra vội.</li>
                    <li>• "Pitch" dài đầu buổi → mất thời gian đào sâu.</li>
                    <li>• Hứa hẹn khi chưa kiểm tra policy (comp/offer).</li>
                  </ul>
                </div>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="relative w-64 h-64">
                      <!-- Central Figure (You) -->
                      <div class="absolute inset-0 flex items-center justify-center z-10">
                          <div class="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                              🫵
                          </div>
                      </div>

                      <!-- Orbiting Elements -->
                      <div class="absolute inset-0 animate-spin-slow">
                          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 px-3 py-1 rounded-full text-xs border border-white/20">Văn hóa</div>
                          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-800 px-3 py-1 rounded-full text-xs border border-white/20">Giá trị</div>
                          <div class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 px-3 py-1 rounded-full text-xs border border-white/20">Tầm nhìn</div>
                          <div class="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-gray-800 px-3 py-1 rounded-full text-xs border border-white/20">Uy tín</div>
                      </div>

                      <!-- Connection Lines -->
                      <svg class="absolute inset-0 w-full h-full -z-10 opacity-30">
                          <circle cx="50%" cy="50%" r="48%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                      </svg>
                  </div>
                  <div class="mt-8 text-center">
                      <h4 class="text-xl font-bold text-blue-400">The Face of Company</h4>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-during-flow',
            type: 'text',
            layout: 'default',
            title: 'Flow 45–60 phút',
            contentHTML: `
              <div class="max-w-5xl mx-auto mt-6">
                <div class="grid gap-3">
                  <div class="flex items-start gap-3 bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
                    <div class="w-16 h-16 rounded-full bg-purple-500/30 flex items-center justify-center text-xl font-bold">0-5'</div>
                    <div class="flex-1">
                      <p class="font-bold text-purple-300">Rapport + Agenda</p>
                      <p class="text-sm opacity-80">Warm-up 2', giới thiệu vai trò, thời lượng, quyền hỏi lại.</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                    <div class="w-16 h-16 rounded-full bg-blue-500/30 flex items-center justify-center text-xl font-bold">5-35'</div>
                    <div class="flex-1">
                      <p class="font-bold text-blue-300">STAR + Đào sâu (80/20)</p>
                      <p class="text-sm opacity-80">Lắng nghe STAR & Probing (hỏi xoáy) vào chi tiết thiếu sót. Bạn nói ~20%.</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-4">
                    <div class="w-16 h-16 rounded-full bg-cyan-500/30 flex items-center justify-center text-xl font-bold">35-50'</div>
                    <div class="flex-1">
                      <p class="font-bold text-cyan-300">Case/Tech mini & Culture</p>
                      <p class="text-sm opacity-80">1 bài ngắn hoặc tình huống văn hóa; ghi bằng chứng để chấm từng tiêu chí.</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <div class="w-16 h-16 rounded-full bg-green-500/30 flex items-center justify-center text-xl font-bold">50-60'</div>
                    <div class="flex-1">
                      <p class="font-bold text-green-300">Sell + Q&A + Close</p>
                      <p class="text-sm opacity-80">Share value thật (team/product/học hỏi), hỏi cảm nhận 1–10, lấy comp expectation, hẹn bước tiếp.</p>
                    </div>
                  </div>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-80-20',
            type: 'text',
            layout: 'default',
            title: 'Nguyên tắc 80/20',
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full mt-8">
                <div class="relative w-80 h-80">
                    <!-- Pie Chart CSS -->
                    <div class="w-full h-full rounded-full bg-blue-500 relative overflow-hidden shadow-2xl border-4 border-white/10" style={{ background: 'conic-gradient(#3B82F6 0% 20%, #1F2937 20% 100%)' }}></div>
                    
                    <!-- Inner Circle -->
                    <div class="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center flex-col">
                        <span class="text-6xl font-black text-white">80%</span>
                        <span class="text-sm uppercase tracking-widest opacity-60">Ứng viên nói</span>
                    </div>

                    <!-- Slice Label -->
                    <div class="absolute top-10 right-10 text-right">
                        <span class="text-2xl font-bold text-blue-400 block">20%</span>
                        <span class="text-xs opacity-60">Bạn nói</span>
                    </div>
                </div>
                <p class="mt-8 text-xl max-w-2xl text-center opacity-80">Áp dụng mạnh nhất ở block <strong class="text-blue-400">STAR + Đào sâu (5-35')</strong>. Bạn nói để dẫn dắt, không để thuyết trình.</p>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-star-application',
            type: 'text',
            layout: 'split',
            title: 'Áp dụng STAR',
            content: `
              <p class="text-xl mb-6">Lắng nghe & Đào sâu.</p>
              <div class="space-y-4">
                <div class="bg-blue-900/20 p-4 rounded-xl border border-blue-500/30">
                  <h4 class="font-bold text-blue-300 mb-2">👂 Lắng nghe (Active Listening)</h4>
                  <p class="text-sm opacity-80">
                    Khi ứng viên trả lời, hãy map ngay vào mô hình STAR trong đầu:
                  </p>
                  <ul class="mt-2 space-y-1 text-sm list-disc ml-4 opacity-70">
                    <li>Họ đã nói rõ <strong>Situation</strong> chưa?</li>
                    <li><strong>Action</strong> có phải là của họ không? (hay "chúng tôi")</li>
                    <li><strong>Result</strong> có số liệu không?</li>
                  </ul>
                </div>

                <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
                  <h4 class="font-bold text-purple-300 mb-2">⛏️ Đào sâu (Probing)</h4>
                  <p class="text-sm opacity-80">
                    Nếu thiếu mảnh ghép nào, hãy hỏi ngay vào đó:
                  </p>
                  <ul class="mt-2 space-y-1 text-sm list-disc ml-4 opacity-70">
                    <li>"Cụ thể <strong>bạn</strong> đã làm gì trong dự án đó?" (Missing Action)</li>
                    <li>"Kết quả cuối cùng đo lường thế nào?" (Missing Result)</li>
                  </ul>
                </div>
              </div>
            `,
            theme: 'dark',
            imageUrl: '/images/learn/star_method.png'
          },
          {
            id: 'slide-probing',
            type: 'text',
            layout: 'split',
            title: 'Kỹ năng Đào sâu',
            content: `
              <ul class="space-y-5 text-lg">
                <li class="flex gap-4 items-start">
                    <span class="text-3xl">⛏️</span>
                    <div>
                        <strong class="block text-white">Check-list đào sâu 2-3 lớp</strong>
                        <span class="opacity-70 text-sm">Why? How exactly? Ai tham gia? Dùng tool gì? Số liệu trước/sau? Cản trở lớn nhất? Làm khác gì lần sau?</span>
                    </div>
                </li>
                <li class="flex gap-4 items-start">
                    <span class="text-3xl">🤐</span>
                    <div>
                        <strong class="block text-white">Im lặng 3s & Paraphrase</strong>
                        <span class="opacity-70 text-sm">Nhắc lại ý chính để xác nhận, ngừng nói để họ tự bổ sung phần thật.</span>
                    </div>
                </li>
                <li class="flex gap-4 items-start">
                    <span class="text-3xl">🧭</span>
                    <div>
                        <strong class="block text-white">Luôn buộc vào tiêu chí</strong>
                        <span class="opacity-70 text-sm">Mỗi follow-up phải giúp bạn chấm 1 tiêu chí trong Scorecard (Tech/Comm/Culture...).</span>
                    </div>
                </li>
              </ul>
            `,
            theme: 'dark',
            imageUrl: '/images/learn/iceberg_model.png'
          },
          {
            id: 'slide-seller',
            type: 'text',
            layout: 'default',
            title: 'Interviewer = Seller',
            contentHTML: `
              <div class="max-w-4xl mx-auto mt-4 grid gap-4">
                <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                  <h3 class="text-blue-300 font-bold mb-2">Khi nào "sell"?</h3>
                  <p class="text-sm opacity-80">Sau khi đã khai thác fit (cuối block STAR/case), trước Q&A/close.</p>
                </div>
                <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                  <h3 class="text-green-300 font-bold mb-2">Sell bằng bằng chứng</h3>
                  <ul class="text-sm opacity-80 space-y-1">
                    <li>• 2-3 điểm khác biệt: team, sản phẩm, tốc độ ship, mentor.</li>
                    <li>• Ví dụ thật: release nào gần nhất? tác động gì?</li>
                  </ul>
                </div>
                <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
                  <h3 class="text-purple-300 font-bold mb-2">Test interest</h3>
                  <p class="text-sm opacity-80">"Nếu thang 1-10, bạn đang ở mức nào? Điều gì giúp lên 9?" → biết điểm cần giải tỏa.</p>
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-compensation',
            type: 'text',
            layout: 'split',
            title: 'Compensation & Closing',
            content: `
              <ul class="space-y-4 text-base">
                <li class="flex gap-3 items-start">
                  <span class="text-xl">🎯</span>
                  <div>
                    <strong>Mục tiêu:</strong> Hiểu kỳ vọng, <em>không thương lượng</em> trong phòng.
                  </div>
                </li>
                <li class="flex gap-3 items-start">
                  <span class="text-xl">❓</span>
                  <div>
                    <strong>Câu hỏi gợi ý:</strong> "Bạn kỳ vọng tổng thu nhập (gross/net) khoảng bao nhiêu cho vai trò này?"; "Bạn ưu tiên cố định hay biến số?"; "Benefit nào quan trọng nhất?"
                  </div>
                </li>
                <li class="flex gap-3 items-start">
                  <span class="text-xl">📝</span>
                  <div>
                    <strong>Phản hồi:</strong> Ghi lại nguyên văn, nhắc rõ <em>policy công ty quyết</em>, không hứa hẹn. Nếu lệch biên: nói phạm vi tham chiếu (nếu được phép) và chuyển HR xem xét.
                  </div>
                </li>
                <li class="flex gap-3 items-start">
                  <span class="text-xl">🔔</span>
                  <div>
                    <strong>Close:</strong> Tóm tắt nhanh, hỏi thêm gì không, nói bước tiếp và thời gian dự kiến, mở kênh liên lạc.
                  </div>
                </li>
              </ul>
            `,
            contentHTML: `
              <div class="flex flex-col h-full justify-center bg-gray-900/60 border border-white/10 rounded-xl p-5 text-sm space-y-3">
                <div class="flex items-center gap-2 text-green-300 font-semibold">
                  <span>✔</span><span>Trình tự cuối buổi</span>
                </div>
                <ol class="list-decimal list-inside space-y-2 opacity-85">
                  <li>Hỏi mức hứng thú (1–10) & điều cần giải tỏa.</li>
                  <li>Ghi nhận comp expectation (không hứa, nhắc policy).</li>
                  <li>Sell ngắn 2–3 điểm giá trị thật (team/product/learning).</li>
                  <li>Hỏi thêm gì không, tóm tắt, nêu bước tiếp và thời gian.</li>
                </ol>
                <div class="mt-2 text-xs opacity-60 bg-yellow-500/10 border border-yellow-500/20 rounded p-2">
                  Tip: gửi recap ngắn sau buổi để giữ ứng viên trong vòng.
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-biases',
            type: 'text',
            layout: 'default',
            title: 'Reset Bias trước khi chấm',
            contentHTML: `
              <div class="max-w-4xl mx-auto text-center text-sm opacity-80 mb-4">
                  Trước khi ghi điểm hoặc debrief, nhắc lại 4 bias hay gặp để giữ quyết định dựa trên bằng chứng.
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto mt-4">
                  <!-- Affinity Bias -->
                  <div class="bg-gray-800 p-5 rounded-xl border border-white/10 hover:border-pink-500 transition-colors group">
                      <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">🤝</div>
                      <h3 class="text-lg font-bold text-pink-400 mb-1">Affinity Bias</h3>
                      <p class="text-sm opacity-70 mb-2">"Bạn này giống mình quá!" (Cùng quê, cùng trường) => Dễ bỏ qua thiếu sót.</p>
                      <div class="text-xs bg-pink-500/20 px-2 py-1 rounded inline-block text-pink-300">Khắc phục: Focus on job criteria.</div>
                  </div>

                  <!-- Halo Effect -->
                  <div class="bg-gray-800 p-5 rounded-xl border border-white/10 hover:border-yellow-500 transition-colors group">
                      <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">😇</div>
                      <h3 class="text-lg font-bold text-yellow-400 mb-1">Halo Effect</h3>
                      <p class="text-sm opacity-70 mb-2">Thấy một điểm tốt (đẹp trai, trường xịn) => Nghĩ rằng mọi thứ khác đều tốt.</p>
                      <div class="text-xs bg-yellow-500/20 px-2 py-1 rounded inline-block text-yellow-300">Khắc phục: Evaluate each skill independently.</div>
                  </div>

                  <!-- Confirmation Bias -->
                  <div class="bg-gray-800 p-5 rounded-xl border border-white/10 hover:border-blue-500 transition-colors group">
                      <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">🔍</div>
                      <h3 class="text-lg font-bold text-blue-400 mb-1">Confirmation Bias</h3>
                      <p class="text-sm opacity-70 mb-2">Chỉ tìm kiếm thông tin để khẳng định ấn tượng ban đầu của mình.</p>
                      <div class="text-xs bg-blue-500/20 px-2 py-1 rounded inline-block text-blue-300">Khắc phục: Play Devil's Advocate.</div>
                  </div>

                  <!-- First Impression -->
                  <div class="bg-gray-800 p-5 rounded-xl border border-white/10 hover:border-purple-500 transition-colors group">
                      <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
                      <h3 class="text-lg font-bold text-purple-400 mb-1">First Impression</h3>
                      <p class="text-sm opacity-70 mb-2">Ra quyết định ngay trong 2 phút đầu, thời gian còn lại chỉ để hợp lý hóa nó.</p>
                      <div class="text-xs bg-purple-500/20 px-2 py-1 rounded inline-block text-purple-300">Khắc phục: Delay decision until the end.</div>
                  </div>
              </div>
              <div class="mt-6 text-center opacity-60 italic text-sm">
                  "Đọc lại tiêu chí & ghi điểm độc lập ngay sau phỏng vấn, rồi mới thảo luận để giảm bias."
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'section-after',
            type: 'text',
            layout: 'section-header',
            title: 'Giai đoạn 3: Quyết định',
            subtitle: 'AFTER',
            content: 'Đừng để cảm xúc chi phối. Hãy để dữ liệu lên tiếng.',
            theme: 'green'
          },
          {
            id: 'slide-debrief',
            type: 'text',
            layout: 'split',
            title: 'Debrief: Dữ liệu > Cảm xúc',
            content: `
              <h3 class="text-2xl font-bold text-green-400 mb-4">Cuộc họp quyết định</h3>
              <p class="mb-6 opacity-90">
                Debrief không phải là nơi để "bỏ phiếu" dựa trên cảm tính. Đó là nơi để <strong>đối chiếu bằng chứng</strong>.
              </p>
              <ul class="space-y-4">
                <li class="flex items-center gap-3">
                    <span class="text-green-500">✅</span>
                    <span>Dùng <strong>Scorecard</strong> làm kim chỉ nam.</span>
                </li>
                <li class="flex items-center gap-3">
                    <span class="text-green-500">✅</span>
                    <span>Mỗi người đưa ra đánh giá <strong>độc lập</strong> trước khi họp.</span>
                </li>
                <li class="flex items-center gap-3">
                    <span class="text-red-500">❌</span>
                    <span>Không nói: "Tôi cảm thấy bạn này ổn".</span>
                </li>
                <li class="flex items-center gap-3">
                    <span class="text-green-500">✅</span>
                    <span>Hãy nói: "Tôi đánh giá kỹ năng X đạt mức 4 vì bằng chứng Y".</span>
                </li>
              </ul>
              <div class="mt-6 bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                <strong class="text-green-400">Pro Tip:</strong>
                <p class="opacity-80 text-sm">Large score divergence = Signal to dig deeper.</p>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="bg-white/5 p-8 rounded-xl border border-white/10 w-full max-w-md relative">
                      <div class="absolute -top-4 -right-4 bg-green-500 text-black font-bold px-4 py-1 rounded-full transform rotate-12 shadow-lg">
                          EVIDENCE
                      </div>
                      <h4 class="text-lg font-bold mb-4 border-b border-white/10 pb-2">Scorecard Review</h4>
                      
                      <div class="space-y-3">
                          <div class="flex justify-between items-center">
                              <span class="text-sm opacity-70">Culture Fit</span>
                              <div class="flex gap-1">
                                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                                  <div class="w-4 h-4 rounded-full bg-gray-700"></div>
                              </div>
                          </div>
                          <div class="flex justify-between items-center">
                              <span class="text-sm opacity-70">Tech Skills</span>
                              <div class="flex gap-1">
                                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                              </div>
                          </div>
                          <div class="flex justify-between items-center">
                              <span class="text-sm opacity-70">Leadership</span>
                              <div class="flex gap-1">
                                  <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
                                  <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
                                  <div class="w-4 h-4 rounded-full bg-gray-700"></div>
                                  <div class="w-4 h-4 rounded-full bg-gray-700"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-bar-raiser',
            type: 'text',
            layout: 'split',
            title: 'Cơ chế Bar Raiser',
            content: `
              <h3 class="text-2xl font-bold text-green-400 mb-4">Người giữ cổng</h3>
              <p class="mb-4">Bar Raiser là người phỏng vấn độc lập (thường từ team khác), có quyền phủ quyết (Veto).</p>
              <div class="bg-white/5 p-4 rounded-lg mb-4">
                <strong class="block text-white mb-2">Mục tiêu:</strong>
                <p class="opacity-70">Đảm bảo ứng viên mới phải giỏi hơn 50% nhân sự hiện tại ở cùng vị trí.</p>
              </div>
              <div class="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                <strong class="text-green-400">Pro Tip:</strong>
                <p class="opacity-80 text-sm">Bắt đầu bằng cách mời một quản lý từ phòng ban khác tham gia vòng cuối.</p>
              </div>
            `,
            theme: 'dark',
            contentHTML: `
              <div class="flex items-end justify-center h-64 gap-4 px-8 pb-8 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden w-full">
                 <!-- Threshold Line -->
                 <div class="absolute top-[40%] left-0 w-full h-0.5 bg-green-500 z-10"></div>
                 <div class="absolute top-[35%] right-2 text-xs text-green-400 font-bold bg-gray-900 px-2">BAR (Tiêu chuẩn)</div>
                 
                 <!-- Columns -->
                 <div class="w-12 bg-gray-600 h-[30%] rounded-t opacity-50"></div>
                 <div class="w-12 bg-gray-600 h-[35%] rounded-t opacity-50"></div>
                 <div class="w-12 bg-gray-600 h-[40%] rounded-t opacity-50"></div>
                 
                 <!-- New Hire -->
                 <div class="w-16 bg-green-500 h-[60%] rounded-t relative shadow-[0_0_20px_rgba(34,197,94,0.5)] z-20">
                    <div class="absolute top-2 left-1/2 -translate-x-1/2 text-white font-bold text-xs">New</div>
                 </div>
              </div>
            `
          },
          {
            id: 'slide-decision',
            type: 'text',
            layout: 'default',
            title: 'Ra quyết định',
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full mt-8">
                <h3 class="text-4xl font-black mb-12 text-center">"If it's not a <span class="text-green-400">HELL YES</span>,<br/>it's a <span class="text-red-500">NO</span>."</h3>
                
                <div class="flex gap-12">
                    <div class="w-40 h-40 rounded-full border-4 border-red-500 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity cursor-not-allowed">
                        <span class="text-4xl font-bold text-red-500">NO</span>
                    </div>
                    
                    <div class="w-40 h-40 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.6)] transform scale-110 animate-pulse">
                        <span class="text-4xl font-bold text-white">YES</span>
                    </div>
                </div>
                
                <p class="mt-12 opacity-60 text-sm">Thà bỏ sót nhân tài còn hơn tuyển nhầm người.</p>
                <p class="mt-2 text-xs opacity-40 italic">(Lưu ý: Áp dụng linh hoạt tùy theo độ khan hiếm của thị trường. Chỉ HELL YES với các tiêu chí cốt lõi trong Scorecard.)</p>
              </div>
            `,
            theme: 'dark'
          }
        ]
      },

      // =================================================================
      // MODULE 4: TECH INTERVIEW
      // =================================================================
      {
        id: 'module-tech',
        title: 'Module 4: Phỏng vấn Tech',
        slides: [
          {
            id: 'slide-tech-hiring',
            type: 'text',
            layout: 'default',
            title: 'Phỏng vấn Tech: <span class="text-blue-400">3 Trụ cột</span>',
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                <p class="text-xl text-center opacity-80 mb-12 max-w-3xl">
                  Mỗi vị trí trong team Tech đòi hỏi một <strong class="text-white">Mindset</strong> và <strong class="text-white">Bộ câu hỏi</strong> hoàn toàn khác nhau.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                   <!-- Dev -->
                   <div class="bg-gray-800 p-8 rounded-2xl border border-blue-500/30 hover:bg-gray-700 transition-all group relative overflow-hidden">
                      <div class="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                      <div class="text-5xl mb-6">💻</div>
                      <h3 class="font-bold text-2xl text-blue-400 mb-2">Software Engineer</h3>
                      <p class="text-sm opacity-70 mb-4">Builders & Solvers</p>
                      <div class="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full inline-block">Coding & System Design</div>
                   </div>

                   <!-- QA -->
                   <div class="bg-gray-800 p-8 rounded-2xl border border-green-500/30 hover:bg-gray-700 transition-all group relative overflow-hidden">
                      <div class="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
                      <div class="text-5xl mb-6">🐞</div>
                      <h3 class="font-bold text-2xl text-green-400 mb-2">QA/QC Engineer</h3>
                      <p class="text-sm opacity-70 mb-4">Breakers & Protectors</p>
                      <div class="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full inline-block">Test Strategy & Automation</div>
                   </div>

                   <!-- BA -->
                   <div class="bg-gray-800 p-8 rounded-2xl border border-purple-500/30 hover:bg-gray-700 transition-all group relative overflow-hidden">
                      <div class="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
                      <div class="text-5xl mb-6">📊</div>
                      <h3 class="font-bold text-2xl text-purple-400 mb-2">Business Analyst</h3>
                      <p class="text-sm opacity-70 mb-4">Bridge & Clarifiers</p>
                      <div class="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full inline-block">Requirements & Process</div>
                   </div>
                </div>
                
                <div class="mt-12 opacity-50 text-sm animate-pulse">
                    👇 Đi sâu vào từng vị trí ở các slide tiếp theo
                </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-deep-dive-dev',
            type: 'text',
            layout: 'split',
            title: 'Dev 1: <span class="text-blue-400">The Coding Interview</span>',
            content: `
              <h3 class="text-2xl font-bold text-blue-400 mb-4">Quy trình 4 Bước</h3>
              <p class="mb-6 opacity-80">Đừng chỉ đưa bài toán rồi ngồi nhìn. Hãy biến nó thành một phiên <strong>Pair Programming</strong>.</p>
              
              <div class="space-y-6 relative">
                <!-- Connecting Line -->
                <div class="absolute left-[19px] top-4 bottom-4 w-0.5 bg-blue-500/30"></div>

                <!-- Step 1 -->
                <div class="flex gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-full bg-blue-900 border border-blue-500 flex items-center justify-center font-bold text-blue-400 shrink-0">1</div>
                    <div>
                        <strong class="text-blue-300 block">Clarify (Làm rõ)</strong>
                        <p class="text-sm opacity-70">Ứng viên hỏi lại yêu cầu, input/output, edge cases. <br/><em class="text-xs opacity-50">("Nếu input rỗng thì sao?")</em></p>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="flex gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-full bg-blue-900 border border-blue-500 flex items-center justify-center font-bold text-blue-400 shrink-0">2</div>
                    <div>
                        <strong class="text-blue-300 block">Plan (Lên kế hoạch)</strong>
                        <p class="text-sm opacity-70">Thảo luận giải pháp (Brute force -> Optimized). Đừng code vội!</p>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="flex gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-full bg-blue-900 border border-blue-500 flex items-center justify-center font-bold text-blue-400 shrink-0">3</div>
                    <div>
                        <strong class="text-blue-300 block">Code (Thực hiện)</strong>
                        <p class="text-sm opacity-70">Viết code. <span class="text-yellow-400">Whiteboard</span> (tư duy logic) hoặc <span class="text-yellow-400">IDE</span> (thực tế, debug).</p>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="flex gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-full bg-blue-900 border border-blue-500 flex items-center justify-center font-bold text-blue-400 shrink-0">4</div>
                    <div>
                        <strong class="text-blue-300 block">Review (Kiểm tra)</strong>
                        <p class="text-sm opacity-70">Dry run với ví dụ. Tự tìm bug trước khi người phỏng vấn chỉ ra.</p>
                    </div>
                </div>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 w-full max-w-md shadow-2xl">
                      <h4 class="text-lg font-bold text-center mb-6 border-b border-gray-700 pb-4">Whiteboard vs IDE</h4>
                      
                      <div class="grid grid-cols-2 gap-4">
                          <!-- Whiteboard -->
                          <div class="bg-blue-900/10 p-4 rounded-lg border border-blue-500/20 text-center">
                              <div class="text-3xl mb-2">🖍️</div>
                              <h5 class="font-bold text-blue-400 mb-1">Whiteboard</h5>
                              <ul class="text-xs text-left space-y-1 opacity-80 list-disc list-inside">
                                  <li>Focus: <strong>Logic & Algo</strong></li>
                                  <li>Bỏ qua Syntax lỗi</li>
                                  <li>High-level thinking</li>
                              </ul>
                          </div>

                          <!-- IDE -->
                          <div class="bg-purple-900/10 p-4 rounded-lg border border-purple-500/20 text-center">
                              <div class="text-3xl mb-2">💻</div>
                              <h5 class="font-bold text-purple-400 mb-1">Laptop/IDE</h5>
                              <ul class="text-xs text-left space-y-1 opacity-80 list-disc list-inside">
                                  <li>Focus: <strong>Practicality</strong></li>
                                  <li>Debug & Run code</li>
                                  <li>Quen thuộc, ít áp lực</li>
                              </ul>
                          </div>
                      </div>

                      <div class="mt-6 bg-yellow-900/20 p-3 rounded border border-yellow-500/30 text-xs text-center">
                          <strong class="text-yellow-400">Role của bạn:</strong> <br/>
                          Đừng làm "Giám thị". Hãy làm "Đồng nghiệp tương lai".<br/>
                          <span class="italic opacity-60">(Thấy họ bí? Hãy gợi ý nhẹ. Thấy họ đi sai hướng? Hãy đặt câu hỏi.)</span>
                      </div>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-deep-dive-dev-knowledge',
            type: 'text',
            layout: 'split',
            title: 'Dev 2: <span class="text-purple-400">System Design & Knowledge</span>',
            content: `
              <h3 class="text-2xl font-bold text-purple-400 mb-4">Beyond the Code</h3>
              <p class="mb-6 opacity-80">Code chạy được là chưa đủ. Senior Engineer cần hiểu <strong>Tại sao</strong> nó chạy và chạy <strong>như thế nào</strong>.</p>
              
              <div class="space-y-5">
                <!-- System Design -->
                <div class="bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                    <strong class="text-purple-300 text-lg block mb-2">🏗️ System Design</strong>
                    <p class="text-sm opacity-80 mb-2">Dành cho Senior+. Thiết kế hệ thống từ con số 0.</p>
                    <ul class="list-disc list-inside text-sm opacity-70">
                        <li>Database: SQL vs NoSQL?</li>
                        <li>Scalability: Load Balancer, Caching, Sharding.</li>
                        <li>Trade-offs: Consistency vs Availability (CAP theorem).</li>
                    </ul>
                </div>

                <!-- Deep Knowledge -->
                <div class="bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong class="text-blue-300 text-lg block mb-2">🧠 Deep Knowledge</strong>
                    <p class="text-sm opacity-80 mb-2">Hiểu sâu về công cụ mình dùng.</p>
                    <ul class="list-disc list-inside text-sm opacity-70">
                        <li>"Điều gì xảy ra khi gõ google.com?"</li>
                        <li>"Cơ chế Garbage Collection hoạt động thế nào?"</li>
                        <li>"Tại sao chọn React thay vì Vue cho dự án này?"</li>
                    </ul>
                </div>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="relative w-full max-w-md">
                      <!-- Iceberg Metaphor -->
                      <div class="flex flex-col items-center">
                          <!-- Tip of Iceberg -->
                          <div class="bg-blue-500 p-4 rounded-t-xl w-32 text-center relative z-10 shadow-lg">
                              <span class="font-bold text-white">Syntax</span>
                              <div class="text-[10px] opacity-80">Frameworks, APIs</div>
                          </div>
                          
                          <!-- Water Line -->
                          <div class="w-full h-1 bg-cyan-400/50 my-1 relative">
                              <span class="absolute right-0 -top-6 text-xs text-cyan-300 italic">Junior dừng ở đây</span>
                          </div>

                          <!-- Submerged -->
                          <div class="bg-blue-900/80 p-6 rounded-b-3xl w-64 text-center backdrop-blur-sm border border-blue-500/30">
                              <div class="space-y-3">
                                  <div class="bg-black/30 p-2 rounded text-sm font-bold text-purple-300">Architecture</div>
                                  <div class="bg-black/30 p-2 rounded text-sm font-bold text-green-300">Performance</div>
                                  <div class="bg-black/30 p-2 rounded text-sm font-bold text-yellow-300">Security</div>
                                  <div class="bg-black/30 p-2 rounded text-sm font-bold text-red-300">Trade-offs</div>
                              </div>
                              <div class="mt-4 text-xs opacity-60 italic">
                                  "Seniority nằm ở phần chìm."
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-deep-dive-qa',
            type: 'text',
            layout: 'split',
            title: 'Deep Dive: <span class="text-green-400">QA/QC Engineer</span>',
            content: `
              <h3 class="text-2xl font-bold text-green-400 mb-4">Destructive Mindset</h3>
              <p class="mb-6 opacity-80">Dev xây dựng (Build), QA phá vỡ (Break). Tìm kiếm người có tư duy <strong class="text-white">"Làm sao để hệ thống này chết?"</strong>.</p>
              
              <div class="space-y-4">
                <div class="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                    <strong class="text-green-400 block mb-1">Signal (Tín hiệu Tốt)</strong>
                    <ul class="list-disc list-inside text-sm opacity-80 space-y-1">
                        <li>Hỏi về Happy path VÀ Unhappy path.</li>
                        <li>Tư duy về Security & Performance.</li>
                        <li>Automation mindset (Lười một cách thông minh).</li>
                        <li>Đặt câu hỏi "Why?" khi thấy requirement vô lý.</li>
                    </ul>
                </div>

                <div class="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r">
                    <strong class="text-red-400 block mb-1">Red Flags</strong>
                    <ul class="list-disc list-inside text-sm opacity-80 space-y-1">
                        <li>Chỉ test đúng theo kịch bản (Clicking monkey).</li>
                        <li>"Trên máy em nó chạy được mà".</li>
                        <li>Sợ Dev, không dám log bug.</li>
                    </ul>
                </div>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="relative w-full max-w-md aspect-square flex items-center justify-center">
                      <!-- Central Object -->
                      <div class="w-32 h-48 bg-gray-700 rounded-lg border-4 border-gray-600 flex flex-col items-center justify-center relative z-10">
                          <div class="text-xs text-gray-400 mb-2">Vending Machine</div>
                          <div class="w-20 h-2 bg-black rounded mb-2"></div>
                          <div class="w-20 h-20 bg-black/50 rounded flex items-center justify-center text-2xl">🥤</div>
                      </div>

                      <!-- Attacks -->
                      <div class="absolute top-10 left-10 bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded border border-red-500/50 transform -rotate-12">
                          Insert fake coin?
                      </div>
                      <div class="absolute bottom-20 right-0 bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded border border-red-500/50 transform rotate-6">
                          Unplug power?
                      </div>
                      <div class="absolute top-1/2 right-10 bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded border border-red-500/50 transform rotate-12">
                          Press all buttons?
                      </div>
                      <div class="absolute bottom-10 left-10 bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded border border-red-500/50 transform -rotate-6">
                          Out of stock?
                      </div>
                      
                      <!-- Magnifying Glass -->
                      <div class="absolute -bottom-4 -right-4 text-6xl transform -rotate-45 drop-shadow-2xl filter brightness-125">
                          🔎
                      </div>
                  </div>
                  <div class="mt-4 text-center">
                      <p class="text-lg font-bold text-green-400">"Test to Break"</p>
                      <p class="text-xs opacity-60">Sample Q: "Làm sao để test một máy bán nước tự động?"</p>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-deep-dive-ba',
            type: 'text',
            layout: 'split',
            title: 'Deep Dive: <span class="text-purple-400">Business Analyst</span>',
            content: `
              <h3 class="text-2xl font-bold text-purple-400 mb-4">Ambiguity to Clarity</h3>
              <p class="mb-6 opacity-80">BA là cầu nối. Tìm kiếm người có khả năng biến những yêu cầu mơ hồ của Business thành tài liệu rõ ràng cho Tech.</p>
              
              <div class="space-y-4">
                <div class="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                    <strong class="text-green-400 block mb-1">Signal (Tín hiệu Tốt)</strong>
                    <ul class="list-disc list-inside text-sm opacity-80 space-y-1">
                        <li>Kỹ năng Elicitation (Khơi gợi yêu cầu).</li>
                        <li>Tư duy phản biện: "Tại sao cần tính năng này?".</li>
                        <li>Khả năng đơn giản hóa vấn đề phức tạp.</li>
                        <li>Quản lý Stakeholder (Say No khi cần).</li>
                    </ul>
                </div>

                <div class="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r">
                    <strong class="text-red-400 block mb-1">Red Flags</strong>
                    <ul class="list-disc list-inside text-sm opacity-80 space-y-1">
                        <li>"Order Taker" (Khách bảo gì làm nấy).</li>
                        <li>Viết tài liệu dài dòng nhưng thiếu logic.</li>
                        <li>Thiếu kiến thức nền tảng về hệ thống/tech.</li>
                    </ul>
                </div>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="w-full max-w-md">
                      <!-- Chaos -->
                      <div class="flex items-center gap-4 mb-6 opacity-50">
                          <div class="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-xl">🤯</div>
                          <div class="flex-1 bg-gray-800 p-3 rounded-lg text-xs italic">
                              "Chị muốn cái dashboard nó phải... wow, phải hiện hết số liệu nhưng mà đơn giản thôi..."
                          </div>
                      </div>

                      <!-- Process Arrow -->
                      <div class="flex justify-center mb-6">
                          <div class="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/50 flex items-center gap-2">
                              <span class="text-lg">⚙️</span> Analysis & Modeling
                          </div>
                      </div>

                      <!-- Clarity -->
                      <div class="flex items-center gap-4">
                          <div class="flex-1 bg-blue-900/20 border border-blue-500/30 p-3 rounded-lg text-xs">
                              <strong class="block text-blue-400 mb-1">User Story:</strong>
                              As a Manager, I want to view daily sales report so that I can track performance.
                          </div>
                          <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl shadow-lg shadow-blue-500/50">💎</div>
                      </div>
                  </div>
                  <div class="mt-8 text-center">
                      <p class="text-lg font-bold text-purple-400">"Order Taker" vs "Consultant"</p>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-tech-star',
            type: 'text',
            layout: 'split',
            title: 'Tech STAR: <span class="text-yellow-400">Chuyện nghề & Sự cố</span>',
            content: `
              <h3 class="text-2xl font-bold text-yellow-400 mb-4">Behavioral Tech</h3>
              <p class="mb-6 opacity-80">Kỹ thuật không chỉ là code. Nó là cách bạn <strong>hành xử</strong> khi hệ thống gặp sự cố.</p>
              
              <div class="space-y-4">
                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
                    <strong class="text-yellow-400 block mb-2">Situation (Bối cảnh)</strong>
                    <p class="text-sm opacity-80">"2h sáng, Production DB CPU spike 100%. Hệ thống tê liệt."</p>
                </div>

                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong class="text-blue-400 block mb-2">Task (Nhiệm vụ)</strong>
                    <p class="text-sm opacity-80">"Phải khôi phục dịch vụ trong vòng 15 phút để tránh mất khách hàng."</p>
                </div>

                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                    <strong class="text-green-400 block mb-2">Action (Hành động)</strong>
                    <ul class="list-disc list-inside text-sm opacity-80 space-y-1">
                        <li>Kiểm tra Slow Query Log.</li>
                        <li>Phát hiện query thiếu Index.</li>
                        <li>Apply Hotfix (thêm Index) thay vì Rollback (vì data migration).</li>
                    </ul>
                </div>

                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
                    <strong class="text-purple-400 block mb-2">Result (Kết quả)</strong>
                    <p class="text-sm opacity-80">"CPU giảm về 20%. Sau đó tôi viết Post-mortem và setup thêm Alert."</p>
                </div>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="relative w-full max-w-md h-[400px] flex items-center justify-center">
                      <!-- Timeline Line -->
                      <div class="absolute left-8 top-0 bottom-0 w-1 bg-gray-700"></div>

                      <!-- Events -->
                      <div class="absolute top-0 left-0 w-full">
                          <!-- Event 1 -->
                          <div class="flex items-center gap-4 mb-8">
                              <div class="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-2xl font-bold text-white shadow-[0_0_20px_rgba(239,68,68,0.6)] z-10">S</div>
                              <div class="bg-red-900/20 p-3 rounded border border-red-500/30 flex-1">
                                  <span class="text-red-400 font-bold text-xs">CRITICAL ALERT</span>
                                  <p class="text-xs opacity-80">CPU 100%</p>
                              </div>
                          </div>

                          <!-- Event 2 -->
                          <div class="flex items-center gap-4 mb-8">
                              <div class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold text-white z-10">T</div>
                              <div class="bg-blue-900/20 p-3 rounded border border-blue-500/30 flex-1">
                                  <span class="text-blue-400 font-bold text-xs">MISSION</span>
                                  <p class="text-xs opacity-80">Fix in 15m</p>
                              </div>
                          </div>

                          <!-- Event 3 -->
                          <div class="flex items-center gap-4 mb-8">
                              <div class="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-2xl font-bold text-white z-10">A</div>
                              <div class="bg-green-900/20 p-3 rounded border border-green-500/30 flex-1">
                                  <span class="text-green-400 font-bold text-xs">DEBUG & FIX</span>
                                  <p class="text-xs opacity-80">Found missing index</p>
                              </div>
                          </div>

                          <!-- Event 4 -->
                          <div class="flex items-center gap-4">
                              <div class="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-2xl font-bold text-white z-10">R</div>
                              <div class="bg-purple-900/20 p-3 rounded border border-purple-500/30 flex-1">
                                  <span class="text-purple-400 font-bold text-xs">RESOLVED</span>
                                  <p class="text-xs opacity-80">System stable</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
        ]
      },

      // =================================================================
      // MODULE 5: BEST PRACTICES & TIPS
      // =================================================================
      {
        id: 'module-best-practices',
        title: 'Module 5: Best Practices & Mẹo Vặt',
        slides: [
          {
            id: 'section-best-practices',
            type: 'text',
            layout: 'section-header',
            title: 'Module 5: Best Practices',
            subtitle: 'TIPS & FAQ',
            content: 'Những bí quyết thực tế và câu hỏi thường gặp.',
            theme: 'green'
          },
          {
            id: 'slide-interviewer-mindset',
            type: 'text',
            layout: 'split',
            title: 'Tâm thế Người phỏng vấn',
            content: `
              <h3 class="text-2xl font-bold text-blue-400 mb-4">Bạn là Đại sứ</h3>
              <p class="mb-6 opacity-80">
                Ứng viên có thể trượt, nhưng họ phải ra về với ấn tượng tốt về công ty.
              </p>
              
              <div class="space-y-4">
                <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r">
                  <strong class="text-blue-400 block mb-1">Mindfulness (Sự hiện diện)</strong>
                  <p class="text-sm opacity-80">Tắt Slack, úp điện thoại. Dành 100% sự chú ý cho ứng viên. Họ biết khi nào bạn đang check mail.</p>
                </div>

                <div class="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r">
                  <strong class="text-purple-400 block mb-1">Authority vs Approachability</strong>
                  <p class="text-sm opacity-80">Giữ quyền kiểm soát (Timekeeper) nhưng vẫn cởi mở. Đừng làm "Cảnh sát hỏi cung".</p>
                </div>

                <div class="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                  <strong class="text-green-400 block mb-1">Curiosity (Sự tò mò)</strong>
                  <p class="text-sm opacity-80">Hỏi vì muốn hiểu, không phải để bắt bẻ. "Tell me more" > "Why did you do that?"</p>
                </div>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="relative w-64 h-64">
                      <!-- Balance Scale Visual -->
                      <div class="absolute inset-0 flex items-center justify-center">
                          <div class="w-1 h-32 bg-gray-600"></div>
                          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-gray-600 rotate-12"></div>
                          
                          <!-- Left Pan (Authority) -->
                          <div class="absolute top-[40%] left-4 w-16 h-16 rounded-full bg-blue-900/50 border border-blue-500 flex items-center justify-center animate-bounce-slow">
                              <span class="text-2xl">👮</span>
                          </div>
                          
                          <!-- Right Pan (Empathy) -->
                          <div class="absolute bottom-[40%] right-4 w-16 h-16 rounded-full bg-green-900/50 border border-green-500 flex items-center justify-center animate-bounce-slow" style="animation-delay: 1s;">
                              <span class="text-2xl">🤝</span>
                          </div>
                      </div>
                  </div>
                  <div class="mt-8 text-center">
                      <h4 class="text-xl font-bold text-white">The Balanced Interviewer</h4>
                      <p class="text-sm opacity-60 mt-2">Professional yet Human.</p>
                  </div>
              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-faq',
            type: 'text',
            layout: 'default',
            title: 'Câu hỏi Thường Gặp (FAQ)',
            contentHTML: `
              <div class="max-w-4xl mx-auto space-y-4 mt-4">
                
                <!-- FAQ Item 1 -->
                <details class="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
                  <summary class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700/30 transition-all">
                    <span class="font-medium text-cyan-400">Nhiều người phỏng vấn - ai chuẩn bị Interview Guide?</span>
                    <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div class="px-4 pb-4 text-sm opacity-80">
                    <p><strong>Hiring Manager/Lead</strong> chịu trách nhiệm chính xây dựng và chốt Interview Guide.</p>
                    <p class="mt-2">HR đóng vai trò hỗ trợ coordinate (gửi tài liệu, sync lịch) nhưng không own về nội dung câu hỏi.</p>
                  </div>
                </details>

                <!-- FAQ Item 2 -->
                <details class="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
                  <summary class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700/30 transition-all">
                    <span class="font-medium text-cyan-400">CV dùng làm gì nếu ai cũng hỏi câu giống nhau?</span>
                    <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div class="px-4 pb-4 text-sm opacity-80">
                    <p>CV là nguồn cho <strong>Probing Questions</strong> (câu hỏi đào sâu cá nhân hóa).</p>
                    <ul class="list-disc ml-4 mt-2 space-y-1">
                      <li><strong>Core Questions</strong> giống nhau → Đảm bảo công bằng, so sánh được.</li>
                      <li><strong>Probing Questions</strong> khác nhau dựa trên CV → Cá nhân hóa, đào sâu.</li>
                    </ul>
                  </div>
                </details>

                <!-- FAQ Item 3 -->
                <details class="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
                  <summary class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700/30 transition-all">
                    <span class="font-medium text-cyan-400">Có cần bài test trước phỏng vấn không?</span>
                    <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div class="px-4 pb-4 text-sm opacity-80">
                    <ul class="space-y-2">
                      <li><strong>Coding test:</strong> Trước vòng Technical → Filter nhanh, tiết kiệm thời gian.</li>
                      <li><strong>Case study:</strong> Trước vòng Culture/Final → Đánh giá tư duy, cách làm việc.</li>
                    </ul>
                    <p class="mt-2 text-xs opacity-60">Lưu ý: Test chỉ là bổ trợ, không thay thế phỏng vấn trực tiếp.</p>
                  </div>
                </details>

                <!-- FAQ Item 4 -->
                <details class="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
                  <summary class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700/30 transition-all">
                    <span class="font-medium text-cyan-400">Thành tích quá khứ (trường xịn, giải thưởng) đánh giá thế nào?</span>
                    <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div class="px-4 pb-4 text-sm opacity-80">
                    <p>Đây là <strong>Nice-to-have</strong>, KHÔNG phải <strong>Must-have</strong>.</p>
                    <p class="mt-2">Vẫn cần verify bằng STAR:</p>
                    <p class="italic text-cyan-300 mt-1">"Cụ thể bạn đã làm gì để đạt được thành tích đó?"</p>
                    <p class="mt-2 text-xs opacity-60">⚠️ Tránh "Halo Effect" - đừng để một thành tích che khuất các warning signs khác.</p>
                  </div>
                </details>

                <!-- FAQ Item 5 -->
                <details class="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
                  <summary class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700/30 transition-all">
                    <span class="font-medium text-cyan-400">Ứng viên có profile khủng hơn người phỏng vấn?</span>
                    <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div class="px-4 pb-4 text-sm opacity-80">
                    <ul class="space-y-2">
                      <li>✅ <strong>Acknowledge</strong> thành tích của họ - đừng phớt lờ.</li>
                      <li>✅ Giữ tư thế <strong>tò mò học hỏi</strong>, không cạnh tranh ego.</li>
                      <li>✅ Focus vào <strong>FIT với role & team</strong>, không phải ai giỏi hơn.</li>
                    </ul>
                    <p class="mt-2 text-xs opacity-60">Tip: Nếu bạn sợ họ giỏi hơn mình → Đó là dấu hiệu tốt! Tuyển người giỏi hơn mình = team mạnh hơn.</p>
                  </div>
                </details>

                <!-- FAQ Item 6 -->
                <details class="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
                  <summary class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700/30 transition-all">
                    <span class="font-medium text-cyan-400">Đến giờ phỏng vấn nhưng đang bận việc quan trọng?</span>
                    <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div class="px-4 pb-4 text-sm opacity-80">
                    <ul class="space-y-2">
                      <li>📢 <strong>Báo sớm 15 phút</strong> nếu cần delay - đừng để ứng viên chờ "treo".</li>
                      <li>❌ <strong>KHÔNG phỏng vấn nửa vời</strong> - vừa họp vừa interview = fail cả hai.</li>
                      <li>✅ Tốt hơn là <strong>reschedule</strong> nếu không thể tập trung 100%.</li>
                    </ul>
                    <p class="mt-2 text-xs opacity-60">Nhớ: Ứng viên cũng đang đánh giá bạn và công ty.</p>
                  </div>
                </details>

              </div>
            `,
            theme: 'dark'
          },
          {
            id: 'slide-summary',
            type: 'text',
            layout: 'cover',
            title: 'Tổng kết',
            subtitle: 'NEXT STEPS',
            content: `
              <div class="max-w-2xl mx-auto mt-8 text-left">
                <ul class="space-y-4 text-xl">
                    <li class="flex items-center gap-3">
                        <span class="text-green-500">✅</span>
                        <span>Xây dựng <strong>Scorecard</strong> cho vị trí đang tuyển.</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="text-green-500">✅</span>
                        <span>Luyện tập hỏi và nghe theo <strong>STAR</strong>.</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="text-green-500">✅</span>
                        <span>Áp dụng cơ chế <strong>Bar Raiser</strong>.</span>
                    </li>
                </ul>
              </div>
            `,
            theme: 'dark',
            imageUrl: '/images/learn/cover-bg.jpg'
          },
          {
            id: 'slide-closing-quote',
            type: 'text',
            layout: 'cover',
            title: 'Lời kết',
            content: `
              <div class="flex flex-col items-center justify-center h-full text-center px-4">
                  <div class="text-6xl mb-8">✨</div>
                  <blockquote class="text-2xl md:text-3xl font-serif italic leading-relaxed max-w-4xl mx-auto opacity-90">
                      "Mỗi buổi phỏng vấn không chỉ là cơ hội để tuyển người, mà là cơ hội để khẳng định <span class="text-blue-400">Văn hóa</span> và <span class="text-blue-400">Vị thế</span> của công ty trên thị trường."
                  </blockquote>
                  <div class="mt-12 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </div>
            `,
            theme: 'dark'
          }
        ]
      },

      // =================================================================
      // APPENDIX: ĐỌC THÊM
      // =================================================================
      {
        id: 'module-appendix',
        title: '📚 Đọc thêm',
        slides: [
          {
            id: 'slide-remote-interview',
            type: 'text',
            layout: 'split',
            title: 'Phỏng vấn Online',
            content: `
              <h3 class="text-2xl font-bold text-cyan-400 mb-4">Những điểm khác biệt</h3>
              <p class="mb-6 opacity-80">
                Phỏng vấn qua video đòi hỏi điều chỉnh kỹ thuật và giao tiếp.
              </p>
              
              <div class="space-y-4">
                <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r">
                  <strong class="text-blue-400 block mb-1">Thiết lập Kỹ thuật</strong>
                  <p class="text-sm opacity-80">Camera ngang tầm mắt, ánh sáng phía trước, background gọn gàng. Test mic/speaker trước 5 phút.</p>
                </div>

                <div class="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r">
                  <strong class="text-purple-400 block mb-1">Giao tiếp qua Video</strong>
                  <p class="text-sm opacity-80">Nhìn vào camera (không phải vào màn hình). Cường điệu gật đầu và tín hiệu phi ngôn ngữ.</p>
                </div>

                <div class="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                  <strong class="text-green-400 block mb-1">Xử lý độ trễ (Latency)</strong>
                  <p class="text-sm opacity-80">Dừng lâu hơn sau khi hỏi. Nói chậm hơn, rõ ràng hơn. Cho phép overlap khi cần.</p>
                </div>
              </div>
            `,
            contentHTML: `
              <div class="flex flex-col items-center justify-center h-full">
                  <div class="relative">
                      <!-- Laptop Frame -->
                      <div class="w-64 h-44 bg-gray-800 rounded-lg border-4 border-gray-700 flex items-center justify-center relative overflow-hidden">
                          <!-- Screen Content -->
                          <div class="grid grid-cols-2 gap-2 p-2 w-full h-full">
                              <div class="bg-blue-900/50 rounded flex items-center justify-center text-2xl">👤</div>
                              <div class="bg-green-900/50 rounded flex items-center justify-center text-2xl">👨‍💼</div>
                          </div>
                          
                          <!-- Video Call UI Elements -->
                          <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                              <div class="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">🎤</div>
                              <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs">📞</div>
                              <div class="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">🎥</div>
                          </div>
                      </div>
                      
                      <!-- Laptop Base -->
                      <div class="w-72 h-4 bg-gray-700 rounded-b-xl mt-1 mx-auto"></div>
                  </div>
                  
                  <div class="mt-8 text-center">
                      <p class="text-sm opacity-60">Tip: Record lại (với consent) để review sau.</p>
                  </div>
              </div>
            `,
            theme: 'dark'
          }
        ]
      }
    ]
};
