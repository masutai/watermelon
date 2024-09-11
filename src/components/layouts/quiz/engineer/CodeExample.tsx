interface CodeExampleProps {
  code: string;
}

export default function CodeExample({ code }: CodeExampleProps) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">コード例：</h3>
      <pre className="p-2 rounded">{code}</pre>
    </div>
  );
}
