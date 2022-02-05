module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("Employee", {
    employeeId: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.NUMBER,
    address: DataTypes.TEXT,
    mobileNumber: DataTypes.BOOLEAN,
  });

  return Employee;
};
