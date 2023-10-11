import mongoose from "mongoose";

const statsSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numberOfQuestions: {
        type: String,
        required: true,
    },
    percentage: {
        type: String,
        required: true,
    },
    subjectName: {
        type: String,
        required: true,
    }
});

export const mathNumericalStatsModel = mongoose.models.mathNumericalStats || mongoose.model("mathNumericalStats", statsSchema, "stats_numerical");

export const mathSymbolicStatsModel = mongoose.models.mathSymbolicStats || mongoose.model("mathSymbolicStats", statsSchema, "stats_symbolic");

export const physicsNumericalStatsModel = mongoose.models.physicsNumericalStats || mongoose.model("physicsNumericalStats", statsSchema, "stats_physics_numerical");

export const physicsSymbolicStatsModel = mongoose.models.physicsSymbolicStats || mongoose.model("physicsSymbolicStats", statsSchema, "stats_physics_symbolic");