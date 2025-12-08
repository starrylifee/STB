import './Program.css'

function Program() {
    const stages = [
        {
            id: 'seed',
            image: '/seed.png',
            title: 'S.E.E.D',
            subtitle: '살펴봄',
            color: 'green',
            description: '감상의 씨앗을 뿌리는 관찰 단계',
            steps: [
                { letter: 'S', word: 'Sweep', desc: '전체 훑어보기 - 작품의 첫인상과 분위기 파악' },
                { letter: 'E', word: 'Explore', desc: '요소 탐색하기 - 색, 선, 형 등 조형 요소 찾기' },
                { letter: 'E', word: 'Examine', desc: '자세히 들여다보기 - 관심 있는 부분 집중 관찰' },
                { letter: 'D', word: 'Describe', desc: '짧게 적어보기 - 관찰한 사실을 기록' }
            ]
        },
        {
            id: 'think',
            image: '/think.png',
            title: 'T.H.I.N.K',
            subtitle: '생각해봄',
            color: 'blue',
            description: 'AI를 활용하여 사고를 확장하는 단계',
            steps: [
                { letter: 'T', word: 'Trigger', desc: 'AI 질문으로 생각 열기' },
                { letter: 'H', word: 'Hook', desc: '작품과 나의 경험/감정 연결하기' },
                { letter: 'I', word: 'Imagine', desc: '작품 속 상황이나 감정 상상하기' },
                { letter: 'N', word: 'Narrate', desc: '상상한 내용을 이야기로 구성' },
                { letter: 'K', word: 'Kindle', desc: '다른 관점 받아들이기' }
            ]
        },
        {
            id: 'bloom',
            image: '/bloom.png',
            title: 'B.L.O.O.M',
            subtitle: '피워봄',
            color: 'pink',
            description: '감상의 꽃을 피우는 창작 단계',
            steps: [
                { letter: 'B', word: 'Build', desc: '판단과 자기 생각 세우기' },
                { letter: 'L', word: 'Lift', desc: '작품 재구성·창작으로 끌어올리기' },
                { letter: 'O', word: 'Output', desc: 'AI 도구로 결과물 만들기' },
                { letter: 'O', word: 'Open', desc: '다른 사람과 나누고 공유하기' },
                { letter: 'M', word: 'Mirror', desc: '되돌아보고 성찰하기' }
            ]
        }
    ]

    return (
        <div className="program-page">
            {/* Hero */}
            <section className="program-hero">
                <div className="container">
                    <span className="program-badge">3단계 감상 모형</span>
                    <h1>
                        <span className="text-gradient">봄·봄·봄</span> 프로그램
                    </h1>
                    <p>
                        체계적인 3단계 접근으로 단순한 '보기'를 넘어
                        <br />깊이 있는 '비평적 사고'로 발전시킵니다
                    </p>
                </div>
            </section>

            {/* Flow Diagram */}
            <section className="program-flow section">
                <div className="container">
                    <div className="flow-diagram">
                        <div className="flow-step">
                            <img src="/seed.png" alt="살펴봄" className="flow-image" />
                            <span className="flow-label">살펴봄</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                            <img src="/think.png" alt="생각해봄" className="flow-image" />
                            <span className="flow-label">생각해봄</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                            <img src="/bloom.png" alt="피워봄" className="flow-image" />
                            <span className="flow-label">피워봄</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stages Detail */}
            <section className="program-stages">
                {stages.map((stage, index) => (
                    <div key={stage.id} className={`stage stage-${stage.color}`}>
                        <div className="container">
                            <div className="stage-header">
                                <div className="stage-number">Stage {index + 1}</div>
                                <img src={stage.image} alt={stage.subtitle} className="stage-image" />
                                <h2>{stage.title}</h2>
                                <h3>{stage.subtitle}</h3>
                                <p>{stage.description}</p>
                            </div>

                            <div className="stage-steps">
                                {stage.steps.map((step, stepIndex) => (
                                    <div
                                        key={stepIndex}
                                        className="step-card"
                                        style={{ animationDelay: `${stepIndex * 0.1}s` }}
                                    >
                                        <div className="step-letter">{step.letter}</div>
                                        <div className="step-content">
                                            <h4>{step.word}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* AI Role */}
            <section className="ai-role section">
                <div className="container">
                    <div className="section-title">
                        <h2>AI의 역할</h2>
                        <p>인공지능을 두 가지 비계(Scaffolding)로 활용합니다</p>
                    </div>

                    <div className="grid grid-2">
                        <div className="card ai-card">
                            <img src="/ai_brain.png" alt="인지적 비계" className="ai-card-image" />
                            <h3>인지적 비계</h3>
                            <p>
                                AI가 학생의 감상에 반응하여 추가 질문을 던지거나
                                놓친 관점을 제시해 깊이 있는 해석을 유도합니다
                            </p>
                            <ul>
                                <li>맞춤형 발문 제공</li>
                                <li>새로운 관점 제시</li>
                                <li>사고 확장 지원</li>
                            </ul>
                        </div>

                        <div className="card ai-card">
                            <img src="/ai_heart.png" alt="정의적 비계" className="ai-card-image" />
                            <h3>정의적 비계</h3>
                            <p>
                                학생의 해석을 시각적 결과물로 변환하여
                                표현 효능감을 높이고 능동적 태도를 이끌어냅니다
                            </p>
                            <ul>
                                <li>이미지 생성 지원</li>
                                <li>창작물 시각화</li>
                                <li>흥미와 자신감 향상</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Program
