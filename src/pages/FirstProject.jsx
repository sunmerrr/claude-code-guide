import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { guide } from "../data/guide";
import mdComponents from "../components/mdComponents";
import PageNav from "../components/PageNav";

export default function FirstProject() {
  return (
    <div className="page">
      <h1>개발 실습</h1>
      <p className="page-desc">Claude Code로 실제 웹페이지를 만들어 보는 실습입니다.</p>

      {guide.firstProject.map((section) => (
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

      <PageNav current="/first-project" />
    </div>
  );
}
