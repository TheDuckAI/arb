import { mcatReadingValModel, mcatScienceValModel, mcatScienceImgModel} from "../models/mcat_problem"

async function getRandomReadingProblem() {
    const count = await mcatReadingValModel.countDocuments();
    const random = Math.floor(Math.random() * count);
    return mcatReadingValModel.findOne().skip(random);
}

async function getRandomScienceProblem() {
    const count = await mcatScienceValModel.countDocuments();
    const random = Math.floor(Math.random() * count);
    return mcatScienceValModel.findOne().skip(random);
}

async function getRandomScienceImagesProblem() {
    const count = await mcatScienceImgModel.countDocuments();
    const random = Math.floor(Math.random() * count);
    return mcatScienceImgModel.findOne().skip(random);
}

export {
    getRandomReadingProblem,
    getRandomScienceProblem,
    getRandomScienceImagesProblem
}