import React, { useEffect, useRef, useState } from "react";

interface MathJaxProps {
   problemStatement: string;
}

const MathJaxComponent: React.FC<MathJaxProps> = ({ problemStatement }) => {
   const mathEl = useRef<HTMLSpanElement | null>(null);
   const [parsedContent, setParsedContent] = useState<string>('');

   useEffect(() => {
      let content = problemStatement;

      const regex = /\$(.*?)\$|\\(iint|int|lim)\{(.*?)\}/g;
      let result;
      let lastIndex = 0;

      let parsedString = "";

      while ((result = regex.exec(problemStatement)) !== null) {
         parsedString += problemStatement.slice(lastIndex, result.index);

         if (result[1]) {
            parsedString += `\\(${result[1]}\\)`;
         } else {
            parsedString += result[0];
         }

         lastIndex = result.index + result[0].length;
      }

      parsedString += problemStatement.slice(lastIndex);

      setParsedContent(parsedString);
   }, [problemStatement]);

   useEffect(() => {
      if (typeof window !== 'undefined' && window.MathJax && parsedContent) {
         window.MathJax.typesetPromise().then(() => {
            console.log('Typesetting complete.');
         }).catch((err) => {
            console.warn('MathJax typesetting failed:', err);
         });
      }
   }, [parsedContent]);

   return <span ref={mathEl} dangerouslySetInnerHTML={{ __html: parsedContent }} />;
};

export default MathJaxComponent;
