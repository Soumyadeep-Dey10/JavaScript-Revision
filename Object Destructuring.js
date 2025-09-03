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
