module.exports = (sequelize, DataTypes) => {
  class Column extends sequelize.Model {}

  Column.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {
    timeStamps: true,
    tableName: 'column',
    sequelize,
  })

  return Column
}