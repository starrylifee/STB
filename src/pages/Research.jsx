import './Research.css'

function Research() {
    const researchData = [
        { area: '관찰 및 요소 발견', before: 3.95, after: 4.79, change: '+21%', significant: true },
        { area: '해석 및 정서 표현', before: 3.74, after: 4.37, change: '+17%', significant: false },
        { area: '분석 및 탐구 전략', before: 3.00, after: 3.84, change: '+28%', significant: true },
        { area: '종합 및 가치 판단', before: 2.79, after: 3.84, change: '+38%', significant: true },
    ]

    const totalBefore = 13.47
    const totalAfter = 16.84
    const improvement = ((totalAfter - totalBefore) / totalBefore * 100).toFixed(1)

    return (
        <div className="research-page">
            {/* Hero */}
            <section className="research-hero">
                <div className="container">
                    <span className="research-badge">2025-2026 연구 결과</span>
                    <h1>
                        <span className="text-gradient">연구 결과</span>
                    </h1>
                    <p>
                        인공지능 융합 봄·봄·봄 프로그램의
                        <br />미술 감상 역량 향상 효과
                    </p>
                </div>
            </section>

            {/* Key Finding */}
            <section className="key-finding section">
                <div className="container">
                    <div className="finding-card">
                        <div className="finding-stat">
                            <span className="finding-number">+{improvement}%</span>
                            <span className="finding-label">전체 감상 역량 향상</span>
                        </div>
                        <div className="finding-detail">
                            <div className="finding-score">
                                <span className="score-label">사전</span>
                                <span className="score-value">{totalBefore}점</span>
                            </div>
                            <span className="finding-arrow">→</span>
                            <div className="finding-score">
                                <span className="score-label">사후</span>
                                <span className="score-value highlight">{totalAfter}점</span>
                            </div>
                        </div>
                        <p className="finding-note">p &lt; .005 (통계적으로 매우 유의미)</p>
                    </div>
                </div>
            </section>

            {/* Data Table */}
            <section className="research-data section">
                <div className="container">
                    <div className="section-title">
                        <h2>영역별 분석 결과</h2>
                        <p>4가지 평가 영역에서 측정한 감상 역량 변화</p>
                    </div>

                    <div className="data-table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>평가 영역</th>
                                    <th>사전 평균</th>
                                    <th>사후 평균</th>
                                    <th>변화율</th>
                                    <th>유의성</th>
                                </tr>
                            </thead>
                            <tbody>
                                {researchData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="area-name">{item.area}</td>
                                        <td>{item.before.toFixed(2)}</td>
                                        <td className="after-score">{item.after.toFixed(2)}</td>
                                        <td className="change-rate">{item.change}</td>
                                        <td>
                                            <span className={`badge ${item.significant ? 'significant' : 'trending'}`}>
                                                {item.significant ? '✓ 유의미' : '향상 경향'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Visual Chart */}
            <section className="visual-chart section">
                <div className="container">
                    <div className="section-title">
                        <h2>영역별 점수 비교</h2>
                    </div>

                    <div className="chart-container">
                        {researchData.map((item, index) => (
                            <div key={index} className="chart-row">
                                <div className="chart-label">{item.area}</div>
                                <div className="chart-bars">
                                    <div className="bar-group">
                                        <div
                                            className="bar bar-before"
                                            style={{ width: `${(item.before / 5) * 100}%` }}
                                        >
                                            <span className="bar-value">{item.before}</span>
                                        </div>
                                        <div
                                            className="bar bar-after"
                                            style={{ width: `${(item.after / 5) * 100}%` }}
                                        >
                                            <span className="bar-value">{item.after}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="chart-legend">
                        <span className="legend-item">
                            <span className="legend-color before"></span> 사전
                        </span>
                        <span className="legend-item">
                            <span className="legend-color after"></span> 사후
                        </span>
                    </div>
                </div>
            </section>

            {/* Key Insights */}
            <section className="insights section">
                <div className="container">
                    <div className="section-title">
                        <h2>주요 발견</h2>
                    </div>

                    <div className="grid grid-2">
                        <div className="card insight-card">
                            <div className="insight-icon">📈</div>
                            <h3>가장 큰 향상: 가치 판단</h3>
                            <p>
                                '종합 및 가치 판단' 영역에서 <strong>38% 향상</strong>으로
                                가장 두드러진 성장을 보였습니다. 학생들이 작품에 대한
                                자신만의 관점을 형성하게 되었습니다.
                            </p>
                        </div>

                        <div className="card insight-card">
                            <div className="insight-icon">🔍</div>
                            <h3>분석력 향상</h3>
                            <p>
                                '분석 및 탐구 전략' 영역에서 <strong>28% 향상</strong>.
                                AI 도구를 활용한 심층적 탐구 경험이 비평적 사고력
                                함양에 효과적이었습니다.
                            </p>
                        </div>

                        <div className="card insight-card">
                            <div className="insight-icon">💬</div>
                            <h3>질적 변화</h3>
                            <p>
                                사전 검사에서 '답변 못함'으로 일관하던 학생들이
                                사후에는 자신만의 언어로 작품의 가치를 설명하려는
                                태도를 보였습니다.
                            </p>
                        </div>

                        <div className="card insight-card">
                            <div className="insight-icon">🎯</div>
                            <h3>체계적 감상</h3>
                            <p>
                                단순 관찰 중심에서 '해석과 비평' 중심으로
                                감상 방식이 질적으로 변화했습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Background */}
            <section className="background section">
                <div className="container">
                    <div className="section-title">
                        <h2>연구 배경</h2>
                    </div>

                    <div className="background-content">
                        <div className="background-quote">
                            <blockquote>
                                "예술과 기술의 교차점, 우리가 항상 서 있고 싶은 곳입니다."
                                <cite>— 스티브 잡스</cite>
                            </blockquote>
                        </div>

                        <div className="background-text">
                            <h3>연구의 필요성</h3>
                            <p>
                                현대 사회는 소셜 미디어를 통해 수많은 시각 이미지가
                                생산·공유되는 '이미지의 시대'입니다. 이러한 환경에서
                                이미지를 단순히 보는 것을 넘어 사회·문화적 맥락 안에서
                                비판적으로 해석하고 소통하는 '감상 역량'은 필수적입니다.
                            </p>
                            <p>
                                2022 개정 미술과 교육과정은 학생들이 단순한 관찰·분석을
                                넘어 자신의 관점으로 해석하고 타당한 근거에 기반한
                                판단을 수행하도록 강조하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Research
