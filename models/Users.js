module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "members",
    {
      userid: {
        type: Sequelize.STRING(16),
        allowNull: false,
        unique: true //고유값
      },
      userpw: {
        type: Sequelize.STRING(255),
        allowNull: false //기본값 true  = //null허용
      },
      username: {
        type: Sequelize.STRING(255)
      }
    },
    {
      timestamps: true
    }
  );
  
};
