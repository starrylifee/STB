import './Resources.css'

function Resources() {
    const programs = [
        {
            title: '감상 프로그램 (기본)',
            icon: '🎨',
            description: '자신의 작품을 관찰하고 AI 평가를 통해 개선점 찾기',
            stages: ['SEED: 작품 특징 관찰', 'THINK: AI 피드백 분석', 'BLOOM: 다음 작품 계획'],
            subject: '미술'
        },
        {
            title: '명화 감상 프로그램',
            icon: '🖼️',
            description: '명화를 감상하고 AI와 대화하며 나만의 해석 만들기',
            stages: ['SEED: 명화 요소 탐색', 'THINK: AI 질문으로 해석', 'BLOOM: 명화 재창작'],
            subject: '미술'
        },
        {
            title: '보훈 프로그램',
            icon: '🎖️',
            description: '역사 속 영웅을 이해하고 AI 영상으로 이야기 만들기',
            stages: ['SEED: 사진 속 특징 발견', 'THINK: 영웅의 상황 상상', 'BLOOM: AI 영상 생성'],
            subject: '사회연계'
        },
        {
            title: '찰흙 감상 프로그램',
            icon: '🏺',
            description: '입체 작품의 특징을 관찰하고 캐릭터 스토리 만들기',
            stages: ['SEED: 형태와 질감 관찰', 'THINK: 캐릭터 성격 해석', 'BLOOM: 스토리 영상화'],
            subject: '미술'
        },
        {
            title: '캐릭터 재구성 프로그램',
            icon: '✨',
            description: '캐릭터를 분석하고 AI로 새로운 이야기 창작하기',
            stages: ['SEED: 캐릭터 요소 분석', 'THINK: 목표와 감정 해석', 'BLOOM: 스토리보드 영상화'],
            subject: '미술·국어'
        }
    ]

    const crossCurricular = [
        {
            subject: '국어',
            icon: '📝',
            standard: '[4국05-04] 감각적 표현에 유의하여 작품을 감상하고, 감각적 표현을 활용하여 자신의 생각이나 감정을 표현한다.',
            activity: '감상한 미술 작품에서 느낀 점을 시 또는 짧은 에세이 형태로 써 보기'
        },
        {
            subject: '음악',
            icon: '🎵',
            standard: '[4음03-01] 느낌과 상상을 즉흥적으로 표현하며 음악에 대한 흥미를 갖는다.',
            activity: '미술 작품(추상화 등)을 보고 떠오르는 멜로디/리듬을 즉흥 창작'
        },
        {
            subject: '사회',
            icon: '🌍',
            standard: '[4사06-01] 지역의 문화유산을 통해 문화유산의 의미와 유형을 알아보고, 문화유산의 가치를 탐색한다.',
            activity: '지역 미술관 방문, 전통 미술품(민화, 공예 등) 감상 및 조사'
        },
        {
            subject: '체육',
            icon: '🤸',
            standard: '[4체03-04] 기본 움직임 기술을 활용하여 느낌이나 생각을 표현한다.',
            activity: '감상한 미술 작품 속 장면을 동작으로 재연하기'
        }
    ]

    return (
        <div className="resources-page">
            {/* Hero */}
            <section className="resources-hero">
                <div className="container">
                    <span className="resources-badge">수업 자료</span>
                    <h1>
                        <span className="text-gradient">프로그램 자료</span>
                    </h1>
                    <p>
                        다양한 주제와 교과에 적용할 수 있는
                        <br />봄·봄·봄 프로그램 예시
                    </p>
                </div>
            </section>

            {/* Programs */}
            <section className="programs section">
                <div className="container">
                    <div className="section-title">
                        <h2>프로그램 예시</h2>
                        <p>SEED-THINK-BLOOM 단계가 적용된 수업 모델</p>
                    </div>

                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="program-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="program-header">
                                    <span className="program-icon">{program.icon}</span>
                                    <span className="program-subject">{program.subject}</span>
                                </div>
                                <h3>{program.title}</h3>
                                <p>{program.description}</p>
                                <div className="program-stages">
                                    {program.stages.map((stage, i) => (
                                        <div key={i} className="stage-item">
                                            <span className="stage-dot"></span>
                                            <span>{stage}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross-curricular */}
            <section className="cross-curricular section">
                <div className="container">
                    <div className="section-title">
                        <h2>교과 연계 활동</h2>
                        <p>미술 감상과 연계할 수 있는 타 교과 성취기준</p>
                    </div>

                    <div className="curriculum-grid">
                        {crossCurricular.map((item, index) => (
                            <div key={index} className="curriculum-card">
                                <div className="curriculum-header">
                                    <span className="curriculum-icon">{item.icon}</span>
                                    <h3>{item.subject}</h3>
                                </div>
                                <div className="curriculum-standard">
                                    <strong>성취기준</strong>
                                    <p>{item.standard}</p>
                                </div>
                                <div className="curriculum-activity">
                                    <strong>연계 활동</strong>
                                    <p>{item.activity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download CTA */}
            <section className="download-cta section">
                <div className="container">
                    <div className="cta-box">
                        <div className="cta-content">
                            <h2>교수·학습 자료가 필요하신가요?</h2>
                            <p>
                                자세한 지도안과 활동지는 연구 완료 후
                                <br />자료 공유 플랫폼을 통해 제공될 예정입니다.
                            </p>
                        </div>
                        <div className="cta-icon">📚</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resources
