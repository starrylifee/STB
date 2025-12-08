import './Tools.css'

function Tools() {
    const tools = [
        {
            id: 'activity-code',
            image: '/tool_code.png',
            title: '활동코드 기반 접속',
            subtitle: '간편하고 안전한 접속',
            description: '복잡한 로그인 없이 교사가 부여한 활동코드만으로 학습 도구에 접속합니다.',
            features: [
                '회원가입 불필요',
                '개인정보 입력 최소화',
                '교사별 코드 관리',
                '디지털 격차 해소'
            ],
            color: 'green'
        },
        {
            id: 'image-gen',
            image: '/tool_image.png',
            title: '교사 승인 이미지 생성',
            subtitle: '안전한 AI 이미지 생성',
            description: '학생이 입력한 프롬프트와 생성된 이미지를 교사가 승인하는 이중 안전 시스템입니다.',
            features: [
                '프롬프트 1차 승인',
                '이미지 2차 확인',
                '유해 콘텐츠 차단',
                '실시간 모니터링'
            ],
            color: 'pink'
        },
        {
            id: 'ai-docent',
            image: '/tool_docent.png',
            title: 'AI 도슨트',
            subtitle: '맞춤형 감상 안내',
            description: '학습자의 감상에 반응하여 사고를 확장하는 맞춤형 발문을 제공합니다.',
            features: [
                '개인 맞춤 질문',
                '관점 확장 유도',
                '인지적 비계 제공',
                '깊이 있는 해석 지원'
            ],
            color: 'blue'
        },
        {
            id: 'artwork-regen',
            image: '/tool_regen.png',
            title: '작품 재구성 도구',
            subtitle: '창의적 표현 지원',
            description: '학생의 해석을 바탕으로 명화를 재창조하거나 캐릭터를 새롭게 구성합니다.',
            features: [
                '명화 재해석',
                '캐릭터 재구성',
                '정의적 비계 역할',
                '표현 효능감 향상'
            ],
            color: 'purple'
        }
    ]

    const safetyFeatures = [
        {
            icon: '🛡️',
            title: '교사 승인 시스템',
            description: '모든 AI 생성 콘텐츠는 교사의 승인을 거쳐야 학생에게 노출됩니다.'
        },
        {
            icon: '👁️',
            title: '실시간 모니터링',
            description: '교사가 학생들의 활동을 실시간으로 확인하고 관리할 수 있습니다.'
        },
        {
            icon: '🔒',
            title: '개인정보 보호',
            description: '활동코드 기반으로 최소한의 정보만 수집하여 개인정보를 보호합니다.'
        },
        {
            icon: '📋',
            title: '교육청 지침 준수',
            description: '서울시교육청의 생성형 AI 활용 지침을 준수하여 개발되었습니다.'
        }
    ]

    return (
        <div className="tools-page">
            {/* Hero */}
            <section className="tools-hero">
                <div className="container">
                    <span className="tools-badge">자체 개발 도구</span>
                    <h1>
                        <span className="text-gradient">AI 교육 도구</span>
                    </h1>
                    <p>
                        초등학생을 위한 안전하고 교육적인
                        <br />맞춤형 AI 활용 도구
                    </p>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="tools-section section">
                <div className="container">
                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <div
                                key={tool.id}
                                className={`tool-card tool-${tool.color}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <img src={tool.image} alt={tool.title} className="tool-image" />
                                <div className="tool-content">
                                    <h3>{tool.title}</h3>
                                    <span className="tool-subtitle">{tool.subtitle}</span>
                                    <p>{tool.description}</p>
                                    <ul className="tool-features">
                                        {tool.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety Section */}
            <section className="safety-section section">
                <div className="container">
                    <div className="section-title">
                        <h2>안전한 AI 활용</h2>
                        <p>교육청 지침을 준수한 안전 시스템</p>
                    </div>

                    <div className="safety-grid">
                        {safetyFeatures.map((feature, index) => (
                            <div key={index} className="safety-card">
                                <span className="safety-icon">{feature.icon}</span>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="how-it-works section">
                <div className="container">
                    <div className="section-title">
                        <h2>이렇게 작동해요</h2>
                        <p>교사 승인 기반 이미지 생성 프로세스</p>
                    </div>

                    <div className="process-flow">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <h4>학생 입력</h4>
                            <p>학생이 프롬프트 작성</p>
                        </div>
                        <div className="process-arrow">→</div>
                        <div className="process-step">
                            <div className="process-number">2</div>
                            <h4>교사 1차 승인</h4>
                            <p>프롬프트 내용 확인</p>
                        </div>
                        <div className="process-arrow">→</div>
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <h4>AI 생성</h4>
                            <p>이미지 생성 진행</p>
                        </div>
                        <div className="process-arrow">→</div>
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <h4>교사 2차 확인</h4>
                            <p>생성 결과 검토</p>
                        </div>
                        <div className="process-arrow">→</div>
                        <div className="process-step highlight">
                            <div className="process-number">5</div>
                            <h4>학생 확인</h4>
                            <p>안전한 결과물 전달</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Philosophy */}
            <section className="philosophy section">
                <div className="container">
                    <div className="philosophy-content">
                        <div className="philosophy-text">
                            <h2>AI는 도구가 아닌 비계(Scaffolding)입니다</h2>
                            <p>
                                본 연구에서 AI는 단순한 기술적 도구가 아니라,
                                학생의 감상 사고를 확장하고 몰입을 돕는
                                <strong>인지적·정의적 도구</strong>로 활용됩니다.
                            </p>
                            <div className="philosophy-points">
                                <div className="point">
                                    <span className="point-icon">🧠</span>
                                    <div>
                                        <strong>인지적 비계</strong>
                                        <p>맞춤형 발문으로 깊이 있는 해석 유도</p>
                                    </div>
                                </div>
                                <div className="point">
                                    <span className="point-icon">❤️</span>
                                    <div>
                                        <strong>정의적 비계</strong>
                                        <p>시각적 표현으로 효능감과 흥미 향상</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="philosophy-visual">
                            <div className="visual-card">
                                <span className="visual-emoji">🌱</span>
                                <span className="visual-arrow">→</span>
                                <span className="visual-emoji">🤖</span>
                                <span className="visual-arrow">→</span>
                                <span className="visual-emoji">🌸</span>
                            </div>
                            <p className="visual-caption">
                                학생의 초기 감상이 AI의 도움으로 꽃피웁니다
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tools
