const {
  Employee,
  Sequelize: { Op }
} = require("../models");

async function getEmployees(req, res) {
  let where = {};
  const { search } = req.query;
  if (search) {
    where = {
      [Op.or]: [
        {
          employeeId: {
            [Op.like]: `%${search}%`
          }
        },
        {
          name: {
            [Op.like]: `%${search}%`
          }
        },
        {
          email: {
            [Op.like]: `%${search}%`
          }
        },
        {
          mobileNumber: {
            [Op.like]: `%${search}%`
          }
        },
        {
          address: {
            [Op.like]: `%${search}%`
          }
        },
        {
          age: {
            [Op.like]: `%${search}%`
          }
        }
      ]
    };
  }

  const Employees = await Employee.findAll({ where, limit: 10 });

  res.status(200).json(Employees);
}

async function createEmployee(req, res) {
  const employee = await Employee.create(req.body);

  res.status(201).json(employee);
}

async function getEmployee(req, res) {
  const { employeeId } = req.params;
  const employee = await Employee.findOne({
    where: {
      id: employeeId
    }
  });

  res.status(200).json(employee);
}

async function updateEmployee(req, res) {
  const { employeeId } = req.params;
  const employee = await Employee.update(req.body, {
    where: {
      id: employeeId
    }
  });

  res.status(200).json(employee);
}

async function deleteEmployee(req, res) {
  const { employeeId } = req.params;
  const employee = await Employee.destroy({
    where: {
      id: employeeId
    }
  });

  res.status(200).json(employee);
}

module.exports = {
  getEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee
};
