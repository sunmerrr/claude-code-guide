import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { guide } from "../data/guide";
import mdComponents from "../components/mdComponents";
import PageNav from "../components/PageNav";

export default function Advanced() {
  return (
    <div className="page">
      <h1>심화 가이드</h1>
      <p className="page-desc">Claude Code를 더 강력하게 활용하는 고급 기능을 알아봅니다.</p>

      {guide.advanced.map((section) => (
        <section key={section.id} id={section.slug} className="section">
          <h2>
            <a href={`#${section.slug}`} className="section-link">
              {section.title}
            </a>
          </h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {section.content}
          </ReactMarkdown>
        </section>
      ))}

      <PageNav current="/advanced" />
    </div>
  );
}
