import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    const features = [
        {
            image: '/seed.png',
            title: 'SEED - 살펴봄',
            description: '작품을 관찰하고 조형 요소를 발견하는 첫 단계',
            color: 'green'
        },
        {
            image: '/think.png',
            title: 'THINK - 생각해봄',
            description: 'AI와 함께 작품의 의미를 분석하고 해석하기',
            color: 'blue'
        },
        {
            image: '/bloom.png',
            title: 'BLOOM - 피워봄',
            description: '창의적 표현으로 감상의 꽃을 피우기',
            color: 'pink'
        }
    ]


    const stats = [
        { value: '3단계', label: '체계적 감상 모형' },
        { value: '25%↑', label: '감상 역량 향상' },
        { value: '5가지', label: 'AI 도구 활용' },
        { value: '21명', label: '참여 학생' }
    ]

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="petal petal-1">🌸</div>
                    <div className="petal petal-2">🌷</div>
                    <div className="petal petal-3">🌺</div>
                    <div className="petal petal-4">🌼</div>
                    <div className="petal petal-5">🌸</div>
                </div>

                <div className="hero-content">
                    <span className="hero-badge">AI 융합 미술 감상 프로그램</span>
                    <h1 className="hero-title">
                        <span className="text-gradient">봄·봄·봄</span>
                        <br />
                        미술 감상의 꽃을 피우다
                    </h1>
                    <p className="hero-description">
                        인공지능과 함께하는 3단계 미술 감상 여정
                        <br />
                        <strong>살펴봄 → 생각해봄 → 피워봄</strong>
                    </p>
                    <div className="hero-actions">
                        <Link to="/program" className="btn btn-primary">
                            프로그램 알아보기 →
                        </Link>
                        <Link to="/research" className="btn btn-secondary">
                            연구 결과 보기
                        </Link>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-card">
                        <img src="/hero.png" alt="미술 감상" className="hero-card-image" />
                        <div className="hero-card-text">
                            미술 작품을 보고<br />
                            <span className="text-gradient">AI와 대화하며</span><br />
                            나만의 해석을 만들어요
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features section">
                <div className="container">
                    <div className="section-title">
                        <h2>3단계 감상 프로그램</h2>
                        <p>
                            체계적인 단계를 통해 단순 관찰을 넘어
                            깊이 있는 비평적 사고력을 키웁니다
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`feature-card feature-${feature.color}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <img src={feature.image} alt={feature.title} className="feature-image" />
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <div className="feature-step">Step {index + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="quote-section section">
                <div className="container">
                    <blockquote className="quote">
                        <p>"사물을 보는 방식은 무엇을 알고, 믿고 있느냐에 따라 달라진다."</p>
                        <cite>— 존 버거 (John Berger)</cite>
                    </blockquote>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta section">
                <div className="container">
                    <div className="cta-content">
                        <h2>미술 감상의 새로운 경험을 시작하세요</h2>
                        <p>AI와 함께하는 체계적인 미술 감상 프로그램</p>
                        <div className="cta-actions">
                            <Link to="/resources" className="btn btn-primary">
                                수업 자료 보기 →
                            </Link>
                            <Link to="/tools" className="btn btn-secondary">
                                AI 도구 체험하기
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
