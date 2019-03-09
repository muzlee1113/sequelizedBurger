
// Set up burgers module
module.exports = function(sequelize, DataTypes) {
    var SequelizeOwners = sequelize.define("SequelizeOwners", {
      // Giving the Author model a name of type STRING
      owner_name: {
          type: DataTypes.STRING,
          allowNull: false,
      }
    });
    SequelizeOwners.associate = function(models) {
        models.SequelizeOwners.hasMany(models.SequelizeBurgers);
    };

    return SequelizeOwners;
  };
  