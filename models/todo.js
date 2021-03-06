module.exports = (sequelize, DataTypes) => {
	const Todos = sequelize.define('Todos', { //todos is a tag
        title: DataTypes.STRING,
        description: DataTypes.STRING
	});

	Todos.associate = function(models) {
		Todos.hasMany(models.Comments)
	}

	return Todos;
};