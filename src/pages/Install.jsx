import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { guide } from "../data/guide";

export default function Install() {
  const sections = guide.install.filter((s) => s.id <= 2);

  return (
    <div className="page">
      <h1>환경 준비</h1>
      <p className="page-desc">Node.js 설치와 터미널 기본 사용법을 익힙니다.</p>

      {sections.map((section) => (
        <section key={section.id} className="section">
          <h2>
            <span className="step-num">{section.id}</span>
            {section.title}
          </h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {section.content}
          </ReactMarkdown>
        </section>
      ))}
    </div>
  );
}
