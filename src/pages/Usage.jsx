import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { guide } from "../data/guide";

export default function Usage() {
  return (
    <div className="page">
      <h1>사용 가이드</h1>
      <p className="page-desc">Claude Code로 할 수 있는 일과 유용한 명령어를 알아봅니다.</p>

      {guide.usage.map((section) => (
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
