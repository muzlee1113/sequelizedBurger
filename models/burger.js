
// Set up burgers module
module.exports = function(sequelize, DataTypes) {
    var SequelizeBurgers = sequelize.define("SequelizeBurgers", {
      // Giving the Author model a name of type STRING
      burger_name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false,
      }
    });

    SequelizeBurgers.associate = function (models) {
        models.SequelizeBurgers.belongsTo(models.SequelizeOwners, {
            onDelete: "CASCADE",
            // foreignKey: {
            //     allowNull: false
            // }
        });
    };
  
  
    return SequelizeBurgers;
  };
  