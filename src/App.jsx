import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Install from "./pages/Install";
import Setup from "./pages/Setup";
import Usage from "./pages/Usage";
import Tips from "./pages/Tips";
import FirstProject from "./pages/FirstProject";
import Advanced from "./pages/Advanced";
import ClaudeIcon from "./components/ClaudeIcon";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const NAV_LINKS = [
  { to: "/install", label: "환경 준비" },
  { to: "/setup", label: "설정" },
  { to: "/usage", label: "사용법" },
  { to: "/tips", label: "활용 팁" },
  { to: "/first-project", label: "첫 프로젝트" },
  { to: "/advanced", label: "심화" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // 경로 변경 시 메뉴 닫기
  useState(() => setOpen(false), [pathname]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" end className="nav-brand" onClick={() => setOpen(false)}>
          <ClaudeIcon size={22} color="#d4a574" />
          Claude Code 가이드
        </NavLink>
        <div className="nav-links nav-links-desktop">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))}
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="nav-links-mobile">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/install" element={<Install />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/first-project" element={<FirstProject />} />
          <Route path="/advanced" element={<Advanced />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>비개발자를 위한 Claude Code 가이드</p>
        <p>더 자세한 내용은 <a href="https://code.claude.com/docs" target="_blank" rel="noopener noreferrer">공식 문서</a>에서 확인할 수 있습니다.</p>
      </footer>
    </BrowserRouter>
  );
}
