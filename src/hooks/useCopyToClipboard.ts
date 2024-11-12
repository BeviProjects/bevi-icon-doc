import { useState } from "react";

const useCopyToClipboard = (): [(text: string) => void, boolean] => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return [copyToClipboard, isCopied];
};

export default useCopyToClipboard;
