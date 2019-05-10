module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define("Burger",{
    name: {
      // type, alllowNull, validate
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    } ,
    //eaten BOOLEAN false
    eaten: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    timestamps: false
   });

  return Burger;
};