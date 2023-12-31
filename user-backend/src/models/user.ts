import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../../db/db";

interface UserAttributes {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  createdAt!: Date;
  updatedAt!: Date;

}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
  },
  {
    sequelize,
    modelName: "users",
  }
);

export default User;