import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { guide } from "../data/guide";
import mdComponents from "../components/mdComponents";
import PageNav from "../components/PageNav";

export default function Tips() {
  return (
    <div className="page">
      <h1>활용 팁</h1>
      <p className="page-desc">AI에게 잘 요청하는 법과 자주 쓰는 요청 예시를 알아봅니다.</p>

      {guide.tips.map((section) => (
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

      <PageNav current="/tips" />
    </div>
  );
}
