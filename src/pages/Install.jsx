import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { guide } from "../data/guide";
import CopyCodeBlock from "../components/CopyCodeBlock";

export default function Install() {
  const sections = guide.install.filter((s) => s.id <= 2);

  return (
    <div className="page">
      <h1>환경 준비</h1>
      <p className="page-desc">Node.js 설치와 터미널 기본 사용법을 익힙니다.</p>

      {sections.map((section) => (
        <section key={section.id} id={section.slug} className="section">
          <h2>
            <a href={`#${section.slug}`} className="section-link">
              <span className="step-num">{section.id}</span>
              {section.title}
            </a>
          </h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ pre: CopyCodeBlock }}>
            {section.content}
          </ReactMarkdown>
        </section>
      ))}
    </div>
  );
}
