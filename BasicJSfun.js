// function add(n1, n2){
//     return n1+n2;
// }
// sum = add(2, 5)
// console.log("Addition of the given numbers is", sum)
// var names = ["Raman", "Aman", "Naman"]
// console.log(names.sort())

// var arr= [55,100,-5,34,2,65]
// console.log(arr.sort((a,b)=>a-b)) //acccending order
// console.log(arr.sort((a,b)=>b-a)) //deccending order

// //for loop 
// console.log("For loop")
// s =0; 
// for(let i=0; i<arr.length; i++)
// {
//     s= s+arr[i]
// }
// console.log("sum:", s)

let student={
    rollNo: 11,
    name: "Naman",
    age:13, 

//     display:function()
//     {
//         return this.rollNo +" "+this.name + " " + this.age
//     }

}
// console.log(student.display())


//Class and object creation to invoke its method 
// class Student{
// constructor(rollno,name,t1,t2){
//     this.rollno=rollno;
//     this.name=name;
//     this.t1=t1;
//     this.t2=t2;

// }
// calcTotal(){
//     return this.t1+this.t2
// }
// }
// let stud1 = new Student(11, "Ramman", 89,67)
// console.log(stud1.name)

// var num = [10,30,50]
// s= 0; 
// for (let n in num)
// {
//     s =s + num[n]

// }
// console.log(s)

// var nums = [20,30,40]
// sum = 0;
// for(let n of nums)
// {
//     sum = sum + n
// }
// console.log(s)


s =""
for(let key in student)
{
    s = s+ student[key] + ""
}
console.log(s)