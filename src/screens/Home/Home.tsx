import { useEffect, useState } from "react";
import styles from './Home.module.css';


interface LawProblem {
    "Problem Statement": string;
    "Problem Number": string;
    "Topic": string;
    "Source": string;
    "Answer Candidates": string[];
    "Output Format Instructions": string;
    "Solution": string;
    "Final Answer": string;
    "Images": string[];
    "Problem Type": string;
    "_id": string;
  }
  

  
// export default function Home({ problem } : {problem: LawProblem}) {
//   if (!problem) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <h1>Law Problem</h1>
//       <div className={styles.problem}>
//         <div className={styles.problemStatement}>{problem.problemStatement}</div>
//         <div><strong>Answer Candidates:</strong> {problem.answerCandidates.join(', ')}</div>
//         <div><strong>Final Answer:</strong> {problem.finalAnswer}</div>
//         {/* Display other fields as needed */}
//       </div>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   // Fetch data from API
//   const response = await fetch('http://localhost:3000/api/lawProblem'); 
//   const data = await response.json();

//   return {
//     props: {
//       problem: data.randomProblem,
//     },
//   };
// }

export default function Home() {
  const [problem, setProblem] = useState<LawProblem | null>(null);


  useEffect(() => {
    fetch('/api/lawProblem') 
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 

        setProblem(data.randomProblem);
      });
  }, []);
  
  if (!problem) {
    return <div></div>;
  }

  return (
    <div className={styles.container}>
      <h1>Law Problem</h1>
      <div className={styles.problem}>
      <div className={styles.problemStatement}>{problem["Problem Statement"]}</div>
      <br/>
      <br/>
      <div><strong>Answer Candidates:</strong>
        {problem["Answer Candidates"].map((answer, index) => {
            let prefix;
            switch (index) {
            case 0:
                prefix = 'A';
                break;
            case 1:
                prefix = 'B';
                break;
            case 2:
                prefix = 'C';
                break;
            case 3:
                prefix = 'D';
                break;
            default:
                prefix = String.fromCharCode(index + 65);
            }
            return (
            <div key={index}>
                {`${prefix}. ${answer}`}
            </div>
            );
        })}
        </div>
        <br/>
        <br/>
        <div><strong>Final Answer:</strong> {problem["Final Answer"]}</div>

        {/* Display other fields as needed */}
      </div>
    </div>
  );
}
