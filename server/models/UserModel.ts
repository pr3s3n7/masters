import database from "../mysql";
import {DataTypes} from "sequelize";

const UserModel = database.define("suser", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: DataTypes.TEXT,
    login: DataTypes.TEXT,
    email: {
        unique: true,
        type: DataTypes.STRING
    },
    about: DataTypes.TEXT,
    isActivated: DataTypes.BOOLEAN,
    activationLink: DataTypes.TEXT,
    password: DataTypes.TEXT,
    phone: DataTypes.STRING
})

export default UserModel