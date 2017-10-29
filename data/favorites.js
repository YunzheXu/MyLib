const favorites=[];

/*

{name:"",
distance:"",
flowrate:"",
intro:"",
Classification:[""]
}



 */

let exportedMethods={

addFavoriteLib(lib) {
    favorites.push(lib);
},

getAllFavoriteLibs(){
    return favorites;
}
};

 module.exports = exportedMethods;