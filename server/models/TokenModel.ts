import database from "../mysql";
import {DataTypes} from "sequelize";

const TokenModel = database.define("token", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    userId: DataTypes.TEXT,
    refreshToken: DataTypes.TEXT
})

export default TokenModel