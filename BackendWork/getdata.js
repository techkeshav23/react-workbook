function sum(a,b){
    return a + b;
}
async function fetchServerData(){
    const serverData=await fetch('https://fakestoreapi.com/products')
    const jsonData=await serverData.json();
    // console.log(jsonData);
    return jsonData;
};
module.exports=fetchServerData;