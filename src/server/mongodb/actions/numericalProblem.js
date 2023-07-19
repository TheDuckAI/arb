import { mathNumericalModel, physicsNumericalModel, physicsImgModel } from "../models/numerical_problem";

async function getRandomMathProblem() {
    const count = await mathNumericalModel.countDocuments();
    const random = Math.floor(Math.random() * count);
    return mathNumericalModel.findOne().skip(random);
}

async function getRandomPhysicsProblem() {
    const count = await physicsNumericalModel.countDocuments();
    const random = Math.floor(Math.random() * count);
    return physicsNumericalModel.findOne().skip(random);
}

async function getRandomPhysicsImgProblem() {
    const count = await physicsImgModel.countDocuments();
    const random = Math.floor(Math.random() * count);
    return physicsImgModel.findOne().skip(random);
}

export {
    getRandomMathProblem,
    getRandomPhysicsImgProblem,
    getRandomPhysicsProblem
}