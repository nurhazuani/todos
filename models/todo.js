module.exports = (sequelize, DataTypes) => {
	const Todos = sequelize.define('Todos', { //todos is a tag
        title: DataTypes.STRING,
        description: DataTypes.STRING
	});

	return Todos;
};