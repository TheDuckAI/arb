import { useEffect, useRef } from "react";

interface MathJaxProps {
   latex: string;
}

const MathJaxComponent: React.FC<MathJaxProps> = ({ latex }) => {
   const mathEl = useRef<HTMLSpanElement | null>(null);

   useEffect(() => {
      if (typeof window !== 'undefined' && window.MathJax) {
         window.MathJax.typesetPromise().then(() => {
            console.log('Typesetting complete.');
         }).catch((err) => {
            console.warn('MathJax typesetting failed:', err);
         });
      }
   }, [latex]);

   return <span ref={mathEl} dangerouslySetInnerHTML={{ __html: `\\(${latex}\\)` }} />;
};

export default MathJaxComponent;
