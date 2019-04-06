const Sequelize = require('sequelize')

let {
  DataTypes
} = Sequelize

const sequelize = new Sequelize('kanban', 'root', 'tzz', {
  host: 'localhost',
  port: 32769,
  dialect: 'mysql'
})

class Column extends Sequelize.Model {}

Column.init({
  title: DataTypes.STRING
}, {
  timeStamps: true,
  tableName: 'column',
  sequelize,
})

class Card extends Sequelize.Model {}

Card.init({
  content: DataTypes.STRING
}, {
  timeStamps: true,
  tableName: 'card',
  sequelize,
})

Column.cards = Column.hasMany(Card)
Card.belongsTo(Column)

// 获取所有 column 列表
async function GET_COLUMNS() {
  const columns = await Column.findAll()

  return columns
}

// 添加 column
function ADD_COLUMN(title) {
  return Column.create({
    title
  }).then(column => {
    console.log('成功添加 column: ' + column.title)
    return column
  }).catch(e => {
    console.error('添加 column 失败')
  })
}

// 删除 column
function DELETE_COLUMN(id) {
  return Column.findOne({
    where: {
      id
    }
  }).then(res => {
    if (res !== null) {
      let temp = res
      res.destroy()
      return temp
    }
  })
}

// 编辑 column
function UPDATE_COLUMN({
  id,
  title
}) {
  return Column.findOne({
    where: {
      id
    }
  }).then(res => {
    if (res !== null) {
      res.title = title

      res.save()

      return res
    }
  })
}

// 获取所有 column 列表
async function GET_CARDS() {
  const cards = await Card.findAll()

  return cards
}

// 添加 card
async function ADD_CARD({
  columnId,
  content
}) {
  return Card.create({
    content,
    ColumnId: columnId
  })

}

// 删除 card
async function DELETE_CARD(id) {
  const card = await Card.findOne({
    where: {
      id
    }
  })

  let temp = card

  card.destroy()

  return temp
}

// 编辑 card
async function UPDATE_CARD({
  id,
  content
}) {
  let card = await Card.findOne({
    where: {
      id
    }
  })

  card.content = content
  card.save()
  return card
}

// sequelize.sync().then(() => {
//   console.log('数据库同步成功')
// }).catch(e => {
//   console.log('数据库同步失败', e)
// })

module.exports = {
  GET_COLUMNS,
  ADD_COLUMN,
  DELETE_COLUMN,
  UPDATE_COLUMN,
  GET_CARDS,
  ADD_CARD,
  DELETE_CARD,
  UPDATE_CARD
}