const urlget="https://dummyjson.com/users";

async function getData1(urlget){
    try{
        const response = await fetch(urlget,{
            method:'get',
            });
            if(!response.ok){
                throw new Error("network response was not ok");
            }
            const responseData=await response.json();
            console.log(responseData);
        }
        catch(error){
            console.error("there was a problem with fetch operation: ",error);
        }
    }
getData1(urlget);

console.log(getData1(urlget));







const url="https://dummyjson.com/products/add";
const data={
    firstName:'Joel',
    lastName:'Jose',
    age: 12
};
async function postData(url,data){
    try{
        const response = await fetch(url,{
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data),
            });
            if(!response.ok){
                throw new Error("network response was not ok");
            }
            const responseData=await response.json();
            console.log(responseData);
            localStorage.setItem("data", JSON.stringify(data));
        }
        catch(error){
            console.error("there was a problem with fetch operation: ",error);
        }
    }
postData(url,data);
