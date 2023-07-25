export interface LawProblem {
  "Problem Statement": string;
  "Problem Number": string;
  Topic: string;
  Source: string;
  "Answer Candidates": string[];
  "Output Format Instructions": string;
  Solution: string;
  "Final Answer": string;
  Images: string[];
  "Problem Type": string;
  _id: string;
}

export interface numericalProblem {
  Problem_Statement: string;
  "Problem Type": string;
  Topic: string;
  Solution: string;
  "Final Answer": string;
  Images: string[];
  "Output Format Instructions": string;
  rubric: string;
  rubric_template: string;
  _id: string;
}
