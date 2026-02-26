import { Link } from "react-router-dom";
import { guide } from "../data/guide";
import ClaudeIcon from "../components/ClaudeIcon";

export default function Home() {
  return (
    <div className="page home">
      <div className="hero">
        <ClaudeIcon size={64} />
        <h1>{guide.title}</h1>
        <p className="subtitle">{guide.subtitle}</p>
      </div>

      <div className="card-grid">
        <Link to="/install" className="card">
          <span className="card-icon">
            <ClaudeIcon size={36} color="#d4a574" />
          </span>
          <h2>환경 준비</h2>
          <p>Node.js 설치와 터미널 기본 사용법</p>
          <ul>
            {guide.install.filter((s) => s.id <= 2).map((s) => (
              <li key={s.id}>{s.title}</li>
            ))}
          </ul>
        </Link>

        <Link to="/setup" className="card">
          <span className="card-icon">
            <ClaudeIcon size={36} color="#d4a574" />
          </span>
          <h2>Claude Code 설정</h2>
          <p>Claude Code 설치와 API 키 등록</p>
          <ul>
            {guide.install.filter((s) => s.id >= 3).map((s) => (
              <li key={s.id}>{s.title}</li>
            ))}
          </ul>
        </Link>

        <Link to="/usage" className="card">
          <span className="card-icon">
            <ClaudeIcon size={36} color="#d4a574" />
          </span>
          <h2>사용 가이드</h2>
          <p>할 수 있는 일과 유용한 명령어</p>
          <ul>
            {guide.usage.map((s) => (
              <li key={s.id}>{s.title}</li>
            ))}
          </ul>
        </Link>

        <Link to="/tips" className="card">
          <span className="card-icon">
            <ClaudeIcon size={36} color="#d4a574" />
          </span>
          <h2>활용 팁</h2>
          <p>AI에게 잘 요청하는 법과 슬래시 명령어 심화</p>
          <ul>
            {guide.tips.map((s) => (
              <li key={s.id}>{s.title}</li>
            ))}
          </ul>
        </Link>

        <Link to="/first-project" className="card">
          <span className="card-icon">
            <ClaudeIcon size={36} color="#d4a574" />
          </span>
          <h2>첫 프로젝트</h2>
          <p>Claude Code로 실제 웹페이지를 만들어 보는 실습</p>
          <ul>
            {guide.firstProject.map((s) => (
              <li key={s.id}>{s.title}</li>
            ))}
          </ul>
        </Link>
      </div>
    </div>
  );
}
