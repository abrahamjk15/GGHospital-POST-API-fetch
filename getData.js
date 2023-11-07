

// const urlget="https://dummyjson.com/users";

const responseData=JSON.parse(localStorage.getItem("data"));

if(responseData)
{
    const firstName=responseData.firstName;
    const lastName=responseData.lastName;
    const age=responseData.age;
    console.log(firstName);
    console.log(lastName);
    console.log(age);

}
