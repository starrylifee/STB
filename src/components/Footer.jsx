import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-logo">🌸 봄·봄·봄</span>
                        <p className="footer-desc">
                            AI 융합 미술 감상 프로그램
                            <br />
                            살펴봄 · 생각해봄 · 피워봄
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>프로그램</h4>
                            <ul>
                                <li><a href="/program">SEED - 살펴봄</a></li>
                                <li><a href="/program">THINK - 생각해봄</a></li>
                                <li><a href="/program">BLOOM - 피워봄</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>자료</h4>
                            <ul>
                                <li><a href="/research">연구 결과</a></li>
                                <li><a href="/resources">수업 자료</a></li>
                                <li><a href="/tools">AI 도구</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024-2026 봄·봄·봄 프로젝트. AI 융합 미술 감상 연구.</p>
                    <p className="footer-quote">
                        "예술과 기술의 교차점, 우리가 항상 서 있고 싶은 곳입니다." - Steve Jobs
                    </p>
                </div>
            </div>

            {/* Decorative petals */}
            <div className="footer-petals">
                <span className="petal">🌸</span>
                <span className="petal">🌷</span>
                <span className="petal">🌺</span>
            </div>
        </footer>
    )
}

export default Footer
