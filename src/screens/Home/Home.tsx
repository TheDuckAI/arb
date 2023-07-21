import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import MathJaxComponent from "./Components/Mathjax";

interface LawProblem {
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

interface numericalProblem {
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

function isNumericalProblem(
  problem: LawProblem | numericalProblem
): problem is numericalProblem {
  return (problem as numericalProblem).Problem_Statement !== undefined;
}

export default function Home() {
  const [problem, setProblem] = useState<LawProblem | numericalProblem | null>(
    null
  );
  const [randomEndpoint, setRandomEndpoint] = useState("");
  const [problemType, setProblemType] = useState("");
  const [problemStatement, setProblemStatement] = useState<string>("");
  const [finalAnswer, setFinalAnswer] = useState<string>("");
  const [answerCandidates, setAnswerCandidates] = useState<string[]>([]);

  const endpoints = {
    "Law Problem": "/api/lawProblem",
    "Math Problem": "/api/mathProblem",
    "MCAT Reading Problem": "/api/mcatReadingProblem",
    "MCAT Science Problem": "/api/mcatScienceProblem",
    "MCAT Science Image Problem": "/api/mcatScienceImageProblem",
    "Physics Problem": "/api/physicsProblem",
    "Physics Image Problem": "/api/physicsImgProblem",
  };

  const fetchProblem = (endpoint: string) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProblem(data["randomProblem"]);
      });
  };
  useEffect(() => {
    if (problem) {
      if (isNumericalProblem(problem)) {
        setProblemStatement(problem.Problem_Statement);
        setFinalAnswer(problem["Final Answer"]);
      } else {
        setProblemStatement(problem["Problem Statement"]);
        setAnswerCandidates(problem["Answer Candidates"]);
        setFinalAnswer(problem["Final Answer"]);
      }
    }
  }, [problem]);

  useEffect(() => {
    const randomProblemType =
      Object.keys(endpoints)[
        Math.floor(Math.random() * Object.keys(endpoints).length)
      ];
    setProblemType(randomProblemType);
    const randomEndpoint = (endpoints as { [key: string]: string })[
      randomProblemType
    ];
    setRandomEndpoint(randomEndpoint);
    fetchProblem(randomEndpoint);
  }, []);

  const handleProblemTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedProblemType = event.target.value;
    setProblemType(selectedProblemType);
    const selectedEndpoint = (endpoints as { [key: string]: string })[
      selectedProblemType
    ];
    setRandomEndpoint(selectedEndpoint);
    fetchProblem(selectedEndpoint);
  };
  if (!problem) {
    return <div>Loading...</div>;
  }

  console.log("Problem Statement:", problemStatement);

  console.log("Final Answer:", finalAnswer);

  return (
    <div className={styles.container}>
      <h1>Select Problem Type</h1>
      <select value={problemType} onChange={handleProblemTypeChange}>
        {Object.keys(endpoints).map((problemType, index) => (
          <option key={index} value={problemType}>
            {problemType}
          </option>
        ))}
      </select>

      <h1>{problemType}</h1>
      <div className={styles.problem}>
        <div className={styles.problemStatement}>
          {<MathJaxComponent problemStatement={problemStatement} />}
        </div>
        <br />
        <br />
        <div>
          {!isNumericalProblem(problem) && <strong>Answer Candidates:</strong>}
          {!isNumericalProblem(problem) &&
            answerCandidates &&
            answerCandidates.map((answer, index) => {
              let prefix;
              switch (index) {
                case 0:
                  prefix = "A";
                  break;
                case 1:
                  prefix = "B";
                  break;
                case 2:
                  prefix = "C";
                  break;
                case 3:
                  prefix = "D";
                  break;
                default:
                  prefix = String.fromCharCode(index + 65);
              }
              return <div key={index}>{`${prefix}. ${answer}`}</div>;
            })}
        </div>

        <br />
        <br />
        <div>
          <strong>Final Answer:</strong> {finalAnswer}
        </div>
      </div>
    </div>
  );
}
