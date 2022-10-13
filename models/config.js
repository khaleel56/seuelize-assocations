const {Sequelize,DataTypes}= require('sequelize');
const sequelize= new Sequelize('postgres', 'postgres','postgres',{
    host: 'localhost',
    dialect: 'postgres',
    pool:{max:5,min:0,idle:10000}
  });

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db={};
db.sequelize=sequelize;

// user & post one to one options new table
// db.User=require('./User')(sequelize,DataTypes)
// db.Post=require('./Post')(sequelize,DataTypes)
// db.User.hasOne(db.Post);


// // UserEmail & UserAccount one to one ->hasOne & belongsTo 
// db.UserEmail=require('./UserEmail')(sequelize,DataTypes)
// db.UserAccount=require('./UserAccount')(sequelize,DataTypes)
// db.UserEmail.hasOne(db.UserAccount,{
//   as:'AccountDetails',
//   sourceKey:'mobileNo',
//   foreignKey:'mobileNo',
//   onDelete:'CASCADE',
//   onUpdate:'CASCADE',
//   hooks:true
// })
// db.UserAccount.belongsTo(db.UserEmail,{
//   as:'UserEmailDetails',
//   targetKey:'mobileNo',
//   foreignKey:'mobileNo',
// })

// db.UserEmail.hasMany(db.UserAccount,{




// // // Many to Many relationship
// db.Movies = sequelize.define('Movies', { name: DataTypes.STRING });
// db.Actors = sequelize.define('Actors', { name: DataTypes.STRING });
// db.ActorMovies = sequelize.define('ActorMovies', {
//   MovieId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: db.Movies, 
//       key: 'id'
//     }
//   },
//   ActorId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: db.Actors, 
//       key: 'id'
//     }
//   }
// });
// db.Movies.belongsToMany(db.Actors, {
//    through: 'ActorMovies', 
//    as:'ActorDetails',
//    onUpdate:'SET NULL'
//   });
// db.Actors.belongsToMany(db.Movies, {
//    through: 'ActorMovies',
//     onUpdate:'SET NULL' 
// });


db.VoucherMapping=require('./VoucherMapping')(sequelize,DataTypes)
{}

db.sequelize.sync({alter:true})    
.then(()=>{
   console.log('yes re-sync')
})
 module.exports=db;          









































 // parent & child table one to one existing table
// db.Parent=require('./Parent')(sequelize,DataTypes)
// db.Child=require('./Child')(sequelize,DataTypes)
// db.Parent.hasOne(db.Child,{
//   as:'ChildDetails',
//   sourceKey:'mobileNo',
//   foreignKey:'mobileNo',
//   onUpdate:'SET NULL',
//   onDelete:'NO ACTION'
// })




// Team & player HasMany
// db.Teams=require('./Teams')(sequelize,DataTypes)
// db.Players=require('./Players')(sequelize,DataTypes)
// db.Teams.hasOne(db.Players,{
//   as:'PlayerDetails',
//   sourceKey:'teamNo',
//   foreignKey:'teamNo',
//   onUpdate:'NO ACTION',
//   onDelete:'NO ACTION'
// })
// db.Players.belongsTo(db.Teams,{
//   as:'TeamDetails',
//   foreignKey:'teamNo',
//   targetKey:'teamNo',
// })
