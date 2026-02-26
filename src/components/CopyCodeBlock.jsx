import { useState } from "react";

export default function CopyCodeBlock({ children, ...props }) {
  const [copied, setCopied] = useState(false);

  // pre > code 구조에서 텍스트 추출
  const code = typeof children === "string"
    ? children
    : children?.props?.children || "";

  const lang = children?.props?.className?.replace("language-", "") || "";

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span>{lang}</span>
        <button className="code-block-copy" onClick={copy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre {...props}>{children}</pre>
    </div>
  );
}
