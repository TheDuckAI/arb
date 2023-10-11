import {
    mathNumericalStatsModel,
    mathSymbolicStatsModel,
    physicsNumericalStatsModel,
    physicsSymbolicStatsModel
} from "../models/stats_models.js";

async function getStatsForMathNumericalProblems() {
    return await mathNumericalStatsModel.find({}, {
        "Number of Questions": 1,
        "Percentage (%)": 1,
        "Subject Name": 1,
    });
}

async function getStatsForMathSymbolicProblems() {
    return await mathSymbolicStatsModel.find({}, {
        "Number of Questions": 1,
        "Percentage (%)": 1,
        "Subject Name": 1,
    });
}

async function getStatsForPhysicsNumericalProblems() {
    return await physicsNumericalStatsModel.find({}, {
        "Number of Questions": 1,
        "Percentage (%)": 1,
        "Subject Name": 1,
    });
}

async function getStatsForPhysicsSymbolicProblems() {
    return await physicsSymbolicStatsModel.find({}, {
        "Number of Questions": 1,
        "Percentage (%)": 1,
        "Subject Name": 1,
    });
}

export {
    getStatsForMathNumericalProblems,
    getStatsForMathSymbolicProblems,
    getStatsForPhysicsNumericalProblems,
    getStatsForPhysicsSymbolicProblems
};
