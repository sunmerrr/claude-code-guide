import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import ClaudeIcon from "./ClaudeIcon";

const NAV_MAIN = [
  { to: "/install", label: "환경 준비" },
  { to: "/setup", label: "설정" },
  { to: "/usage", label: "사용법" },
];

const NAV_PRACTICE = [
  { to: "/first-project", label: "개발 실습" },
];

const NAV_EXTRA = [
  { to: "/tips", label: "활용 팁" },
  { to: "/advanced", label: "심화" },
];

function NavLinks({ items }) {
  return items.map((n) => (
    <NavLink key={n.to} to={n.to} className={({ isActive }) => isActive ? "active" : ""}>
      {n.label}
    </NavLink>
  ));
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
      <header className="top-nav">
        <div className="top-nav-inner">
          <NavLink to="/" end className="logo" onClick={() => setMenuOpen(false)}>
            <ClaudeIcon size={22} color="#d4a574" />
            Claude Code 가이드
          </NavLink>
          <div className="nav-links nav-links-desktop">
            <NavLinks items={NAV_MAIN} />
            <span className="nav-divider" />
            <NavLinks items={NAV_PRACTICE} />
            <span className="nav-divider" />
            <NavLinks items={NAV_EXTRA} />
          </div>
          <button
            className="hamburger"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="nav-links nav-links-mobile">
            <span className="nav-section-label">시작</span>
            <NavLinks items={NAV_MAIN} />
            <span className="nav-divider" />
            <span className="nav-section-label">실습</span>
            <NavLinks items={NAV_PRACTICE} />
            <span className="nav-divider" />
            <span className="nav-section-label">심화</span>
            <NavLinks items={NAV_EXTRA} />
          </div>
        )}
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <p>비개발자를 위한 Claude Code 가이드</p>
        <p>더 자세한 내용은 <a href="https://code.claude.com/docs" target="_blank" rel="noopener noreferrer">공식 문서</a>에서 확인할 수 있습니다.</p>
      </footer>

      <ScrollRestoration />
    </>
  );
}
