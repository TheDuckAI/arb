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

export const mathNumericalStatsModel = mongoose.models.stats || mongoose.model("stats", statsSchema, "stats_numerical");

export const mathSymbolicStatsModel = mongoose.models.stats || mongoose.model("stats", statsSchema, "stats_symbolic");

export const physicsNumericalStatsModel = mongoose.models.stats || mongoose.model("stats", statsSchema, "stats_physics_numerical");

export const physicsSymbolicStatsModel = mongoose.models.stats || mongoose.model("stats", statsSchema, "stats_physics_symbolic");