import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Install from "./pages/Install";
import Setup from "./pages/Setup";
import Usage from "./pages/Usage";
import Tips from "./pages/Tips";
import ClaudeIcon from "./components/ClaudeIcon";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <nav className="nav">
        <NavLink to="/" end className="nav-brand">
          <ClaudeIcon size={22} color="#d4a574" />
          Claude Code 가이드
        </NavLink>
        <div className="nav-links">
          <NavLink to="/install">환경 준비</NavLink>
          <NavLink to="/setup">설정</NavLink>
          <NavLink to="/usage">사용법</NavLink>
          <NavLink to="/tips">활용 팁</NavLink>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/install" element={<Install />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>비개발자를 위한 Claude Code 가이드</p>
        <p>더 자세한 내용은 <a href="https://code.claude.com/docs" target="_blank" rel="noopener noreferrer">공식 문서</a>에서 확인할 수 있습니다.</p>
      </footer>
    </BrowserRouter>
  );
}
