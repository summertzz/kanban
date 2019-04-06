module.exports = (sequelize, DataTypes) => {
  class Card extends sequelize.Model {}

  Card.init({
    id: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    timeStamps: true,
    tableName: 'card',
    sequelize,
  })

  return Card
}