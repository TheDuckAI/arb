import {
    mathNumericalStatsModel,
    mathSymbolicStatsModel,
    physicsNumericalStatsModel,
    physicsSymbolicStatsModel
} from "../models/stats_models.js";

async function findOneByMongoId(model, id, projection) {
    if (!ObjectId.isValid(id)) {
        throw new Error("Invalid MongoDB ID format");
    }
    return await model.findById(id, projection);
}

async function getStatsForMathNumericalProblems() {
    return await mathNumericalStatsModel.find({}, {
        numberOfQuestions: 1,
        percentage: 1,
        subjectName: 1,
    });
}

async function getStatsForMathSymbolicProblems() {
    return await mathSymbolicStatsModel.find({}, {
        numberOfQuestions: 1,
        percentage: 1,
        subjectName: 1,
    });
}

async function getStatsForPhysicsNumericalProblems() {
    return await physicsNumericalStatsModel.find({}, {
        numberOfQuestions: 1,
        percentage: 1,
        subjectName: 1,
    });
}

async function getStatsForPhysicsSymbolicProblems() {
    return await physicsSymbolicStatsModel.find({}, {
        numberOfQuestions: 1,
        percentage: 1,
        subjectName: 1,
    });
}

async function findStatsForMathNumericalProblemsById(id) {
    return findOneByMongoId(mathNumericalStatsModel, id, {
        numberOfQuestions: 1,
        percentage: 1,
        subjectName: 1,
    });
}

async function findStatsForMathSymbolicProblemsById(id) {
    return findOneByMongoId(mathSymbolicStatsModel, id, {
        numberOfQuestions: 1,
        percentage: 1,
        subjectName: 1,
    });
}

async function findStatsForPhysicsNumericalProblemsById(id) {
    return findOneByMongoId(physicsNumericalStatsModel, id, {
        numberOfQuestions: 1,
        percentage: 1,
        subjectName: 1,
    });
}

async function findStatsForPhysicsSymbolicProblemsById(id) {
    return findOneByMongoId(physicsSymbolicStatsModel, id, {
        numberOfQuestions: 1,
        percentage: 1,
        subjectName: 1,
    });
}

export {
    findStatsForMathNumericalProblemsById,
    findStatsForMathSymbolicProblemsById,
    findStatsForPhysicsNumericalProblemsById,
    findStatsForPhysicsSymbolicProblemsById,
    getStatsForMathNumericalProblems,
    getStatsForMathSymbolicProblems,
    getStatsForPhysicsNumericalProblems,
    getStatsForPhysicsSymbolicProblems
};

