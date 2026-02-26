import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { guide } from "../data/guide";

export default function Setup() {
  const sections = guide.install.filter((s) => s.id >= 3 && s.id <= 4);

  return (
    <div className="page">
      <h1>Claude Code 설정</h1>
      <p className="page-desc">Claude Code를 설치하고 API 키를 등록합니다.</p>

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
