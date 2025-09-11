let a = {
    id : 18,
    nam : "Virat"
}
// console.log(a.id); //we cannt access id without the reference of a

let { nam :  nickName, id} = a
console.log(id);
console.log(nickName);


let skill = {
    lang : {
        frontend : {
            library : "react"
        }
    }
}
console.log(skill.lang.frontend.library);

let {library} = skill.lang.frontend
console.log(library);

let ob1 = {
    id:17,
    team:"RCB",
    class : {
        Quality : "World class"
    }
}
console.log(ob1.id, ob1.team, ob1.class.Quality);

// or 

let {id : i, team, class : c} = ob1
console.log(i, team, c.Quality);

// or

let {id : i, team, class : {Quality : q}} = ob1
console.log(i, team, q);
