interface MathJax {
    typesetPromise: () => Promise<void>;
  }
  
  interface Window {
    MathJax?: MathJax;
  }
  