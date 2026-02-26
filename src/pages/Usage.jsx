import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { guide } from "../data/guide";
import mdComponents from "../components/mdComponents";
import PageNav from "../components/PageNav";

export default function Usage() {
  return (
    <div className="page">
      <h1>사용 가이드</h1>
      <p className="page-desc">Claude Code로 할 수 있는 일과 유용한 명령어를 알아봅니다.</p>

      {guide.usage.map((section) => (
        <section key={section.id} id={section.slug} className="section">
          <h2>
            <a href={`#${section.slug}`} className="section-link">
              <span className="step-num">{section.id}</span>
              {section.title}
            </a>
          </h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {section.content}
          </ReactMarkdown>
        </section>
      ))}

      <PageNav current="/usage" />
    </div>
  );
}
