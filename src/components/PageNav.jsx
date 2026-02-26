import { Link } from "react-router-dom";

const PAGES = [
  { path: "/", title: "홈" },
  { path: "/install", title: "환경 준비" },
  { path: "/setup", title: "설정" },
  { path: "/usage", title: "사용법" },
  { path: "/first-project", title: "개발 실습" },
  { path: "/tips", title: "활용 팁" },
  { path: "/advanced", title: "심화 가이드" },
];

export default function PageNav({ current }) {
  const idx = PAGES.findIndex((p) => p.path === current);
  const prev = idx > 0 ? PAGES[idx - 1] : null;
  const next = idx < PAGES.length - 1 ? PAGES[idx + 1] : null;

  return (
    <nav className="page-nav">
      {prev ? (
        <Link to={prev.path}>
          <span className="nav-label">이전</span>
          <span className="nav-title">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to={next.path} className="next">
          <span className="nav-label">다음</span>
          <span className="nav-title">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
