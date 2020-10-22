module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
        comment: DataTypes.STRING,
    });

    Comments.associate = function(models) {
        Comments.belongsTo(models.Todos)
        
    }

    return Comments;
}