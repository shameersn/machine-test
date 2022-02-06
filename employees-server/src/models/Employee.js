module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("Employee", {
    employeeId:
    {
      type: DataTypes.STRING,
      unique: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.NUMBER,
    address: DataTypes.TEXT,
    mobileNumber: DataTypes.STRING,
  });

  return Employee;
};
