function TextHighlight({ input, label }: { input: string; label: string }) {
  if (input.length === 0) return label;

  const pattern = new RegExp(`(${input})`, "gi");
  const parts = label.split(pattern);

  return parts.map((part, index) =>
    pattern.test(part) ? <strong key={index}>{part}</strong> : part
  );
}

export default TextHighlight;
