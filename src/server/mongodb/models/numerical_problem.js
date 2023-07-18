import mongoose from "mongoose";



const numericalProblemSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Problem_Statement: { 
        type: String, 
        required: true 
    },
    Topic: { 
        type: String, 
        required: true 
    },
    Source: String,
    Answer_Candidates: [String],
    Images: [String],
    Output_Format_Instructions: String,
    Solution: { 
        type: String, 
        required: true 
    },
    Final_Answer: { 
        type: String, 
        required: true 
    },
    Problem_Type: { 
        type: String, 
        required: true 
    },
    Answer_Choices: [String],
    rubric: { 
        type: String, 
        required: true 
    },
    rubric_template: { 
        type: String, 
        required: true 
    }
});


export const mathNumericalModel = mongoose.models.mathNumericalProblem || mongoose.model('mathNumericalProblem', numericalProblemSchema, 'math_numerical');
export const physicsNumericalModel = mongoose.models.physicsNumericalProblem || mongoose.model('physicsNumericalProblem', numericalProblemSchema, 'physics_numerical');
