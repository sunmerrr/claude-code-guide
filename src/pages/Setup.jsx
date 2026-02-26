import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { guide } from "../data/guide";
import CopyCodeBlock from "../components/CopyCodeBlock";
import PageNav from "../components/PageNav";

export default function Setup() {
  const sections = guide.install.filter((s) => s.id >= 3 && s.id <= 4);

  return (
    <div className="page">
      <h1>Claude Code 설정</h1>
      <p className="page-desc">Claude Code를 설치하고 API 키를 등록합니다.</p>

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

      <PageNav current="/setup" />
    </div>
  );
}
