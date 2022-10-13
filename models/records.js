 // user
response.userData=await User.bulkCreate([{name:"captain", age:"51", email:"captain@gamil.com", gender:'male'},
    {name:"natasha", age:"51", email:"natasha@gamil.com", gender:'female'},
    {name:"hulk", age:"51", email:"hulk@gamil.com", gender:'male'}]);

 // Post
response.postData=await Post.bulkCreate([
  {title:'real', content:'blackWidow', UserId:'2'},
  {title:'story', content:'captainAmerica',UserId:'1' },
  {title:'post', content:'hulk',UserId:'3'},
])

    //UserEmail & UserAccount one to one
    response.result1=await UserEmail.bulkCreate([{name:"shaik1", mobileNo:'1234567890'},
    {name:"shaik2", mobileNo:'9876543210'},
    {name:"shaik3", mobileNo:'5432109876'}]);

    response.result2=await UserAccount.bulkCreate([
    {email:"shaik1@gamil.com", accountType:'googleAccount', password:'shaik1', mobileNo:'1234567890'},
    {email:"shaik2@gmail.com", accountType:'googleAccount', password:'shaik2',mobileNo:'9876543210'},
    {email:"shaik3@gmail.com", accountType:'googleAccount', password:'shaik3',mobileNo:'5432109876'}]);


        //UserEmail & UserAccount one to many
    response.result2=await UserAccount.bulkCreate([
    {email:"shaik1@yahoo.com", accountType:'yahooAccount', password:'shaik1', mobileNo:'1234567890'},
    {email:"shaik2@yahoo.com", accountType:'yahooAccount', password:'shaik2',mobileNo:'9876543210'},
    {email:"shaik3@outlook.com", accountType:'outlookAccount', password:'shaik3',mobileNo:'5432109876'}]);
    

    // Parent & child
    // response.result1 =await Parent.bulkCreate([{parentName:"6p", parentAge:50, mobileNo:123},
    //                                         {parentName:"7p", parentAge:55, mobileNo:1234}])
    // response.result2 =await Child.bulkCreate([{childName:"6c", childAge:25, mobileNo:123},
    //                                         {childName:"7c", childAge:30, mobileNo:1234}])


    //Team & Player
//     response.result=await Team.bulkCreate([{teamname:"HyderabadTeam", teamNo:1},
//     {teamname:"BangloreTeam", teamNo:2},
//     {teamname:"KarnatakaTeam", teamNo:3]
// );
// // response.result=await Player.bulkCreate([{playerName:'Messi',teamNo:'1}, 
// {playerName:'Ronaldo',teamNo:'2}, 
// {playerName:'Neymar',teamNo:'3}, 
// {playerName:'SubrataPal',teamNo:'1}, 
// {playerName:'SunilChhetr1',teamNo:'1}, 
// }]);


           //Moves & Actors MAny to many
        //    response.result1=await Movies.bulkCreate([{name:'Avengers'},{name:'Ragnorok'}]);
        //    response.result2=await Actors.bulkCreate([{name:'thor'},{name:'ironman'}, {name:'hulk'}, {name:'captainamerica'}]);

        // response.result=await ActorMovies.bulkCreate([{MovieId:1,ActorId:1},{MovieId:1,ActorId:2},{MovieId:1,ActorId:3},{MovieId:1,ActorId:4},{MovieId:2,ActorId:1},{MovieId:2,ActorId:3}]);