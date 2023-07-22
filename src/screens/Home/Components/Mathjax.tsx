import React, { useEffect, useState } from "react";

interface MathJaxProps {
  problemStatement: string;
}

const MathJaxComponent: React.FC<MathJaxProps> = ({ problemStatement }) => {
  const [parsedContent, setParsedContent] = useState<string>("");

  useEffect(() => {
    const regex = /\$(.*?)\$|\\\((.*?)\\\)|\\\[(.*?)\\\]/g;
    let result;

    let parsedString = problemStatement;

    while ((result = regex.exec(problemStatement)) !== null) {
      if (result[1]) {
        parsedString = parsedString.replace(result[0], `\\(${result[1]}\\)`);
      }
    }

    setParsedContent(parsedString);
  }, [problemStatement]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.MathJax && parsedContent) {
      window.MathJax.typesetPromise()
        .then(() => {
          console.log("Typesetting complete.");
        })
        .catch((err) => {
          console.warn("MathJax typesetting failed:", err);
        });
    }
  }, [parsedContent]);

  return <span dangerouslySetInnerHTML={{ __html: parsedContent }} />;
};

export default MathJaxComponent;
