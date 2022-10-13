#Sequelize
##Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, 
It features solid transaction support, relations, eager
##Object Relation Mapping (ORM)
where objects are used to connect the programming language on to the database systems, with the facility to work SQL and object-oriented programming concepts. It is feasible for ORM to be implemented on any type of database management system where object mapping to the table can be achieved in the virtual system
##Model
    A model is an abstraction that represents a table in your database. 

The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

##Modle Instances
    An instance of the class represents one object from that model (which maps to one row of the table in the database)

##Associations
one to one 
one to many 
many to many

    Creating associations in sequelize is done by calling one of the belongsTo / hasOne / hasMany / belongsToMany functions on a model (the source), and providing another model as the first argument to the function (the target).

hasOne - adds a foreign key to the target and singular association mixins to the source.
belongsTo - add a foreign key and singular association mixins to the source.
hasMany - adds a foreign key to target and plural association mixins to the source.
belongsToMany - creates an N:M association with a join table and adds plural association mixins to the source. The junction table is created with sourceId and targetId.
Creating an association will add a foreign key constraint to the attributes. All associations use CASCADE on update and SET NULL on delete, except for n:m, which also uses CASCADE on delete.

hasOne
let if a user model consists of user data such as name, age, gender and activity contains user activity data such user posts, likes chats,

if let suppose one user will create only one post then we call one to one 
with the help of user id we can get user posts data


##note did associate for customer hasone to customerUserAccount it thrown error as customerUserAccount not associated to customer
https://sebhastian.com/sequelize-hasone/#:~:text=The%20Sequelize%20hasOne%20%28%29%20association%20method%20is%20used,an%20example%20of%20creating%20an%20association%20in%20Sequelize.

##note id we not as in include it will through below error
  data.result=await Customer.findOne({
            where:{customerEmail:"khaleel@gamil.com"},
            include:{
                model: CustomerUserAccount,
                as:'CustomerUserAccount'
            }

error-> EagerLoadingError [SequelizeEagerLoadingError]: CustomerUserAccount is associated to Customer using an alias. You must use the 'as' keyword to specify the alias within your include statement.

##
 the Left OUTER JOIN is the same as the LEFT JOIN where we can combine two tables on a certain condition. By definition, SQL Left Outer Join keyword executes to fetch all the rows from the left table (suppose Table A) along with some common rows if matched from the right table (Suppose Table B) form the two tables.


 ##issue1
     sql: `SELECT "CustomerUserAccount"."id", "CustomerUserAccount"."customerEmail", "CustomerUserAccount"."customerAccountId", "CustomerUserAccount"."customerAccount", "Customer"."id" AS "Customer.id", "Customer"."customerName" AS "Customer.customerName", "Customer"."customerEmail" AS "Customer.customerEmail", "Customer"."customerMobile" AS "Customer.customerMobile" FROM "CustomerUserAccount" AS "CustomerUserAccount" LEFT OUTER JOIN "Customer" AS "Customer" ON "CustomerUserAccount"."customerEmail" = "Customer"."id" WHERE "CustomerUserAccount"."customerEmail" = 'khaleel@gamil.com';`,
    parameters: undefined
  },
  original: error: operator does not exist: character varying = integer

  can be resolved by mentioning sourcekey in hasOne and targetkey in belongsto

  #issue2
  error-Cannot set headers after they are sent to the client
   can be resolved by providing proper key names & values of records

context
  sequelize intro   
  association types
  define models &  defining assocaitions

  eager loading-https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/

  ##issue
    parent: error: duplicate key value violates unique constraint "pg_class_relname_nsp_index"
    resolved by removing duplicate sync 
options:
https://dba.stackexchange.com/questions/74627/difference-between-on-delete-cascade-on-update-cascade-in-mysql#:~:text=ON%20UPDATE%20CASCADE%20ON%20DELETE%20CASCADE%20means%20that,ing%20the%20outcomes%20of%20first%20two%20statements.%20RESTRICT