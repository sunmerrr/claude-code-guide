import CopyCodeBlock from "./CopyCodeBlock";

function ScrollTable({ children, ...props }) {
  return (
    <div className="table-wrap">
      <table {...props}>{children}</table>
    </div>
  );
}

const mdComponents = {
  pre: CopyCodeBlock,
  table: ScrollTable,
};

export default mdComponents;
