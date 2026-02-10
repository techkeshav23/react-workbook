import React, { useEffect, useState } from 'react'

function Dashboard() {
  const[data,setData]=useState([]);
  const[cart,setCart]=useState([]);

  useEffect(()=>{

         async function fetchData(){
                  const serverResponse= await fetch('https://fakestoreapi.com/products');
                    const jsondata=await serverResponse.json();
                    setData(jsondata);
                  console.log(jsondata);
         }

        fetchData();
  },[])

  function addToCart(ele){
    // alert(ele.title);
    setCart(data=>[...data,ele])
    // alert(cart.length);
  }

  return (
    <div>
      <div>
        {
          cart.length===0? (<h3>No items in cart</h3>)
          :(
            <div>
              {cart.map((ele)=>(
                <h4 key={ele.id} style={{color:'green',marginRight:'20px'}}>{ele.title}</h4>
              ))}
              <h4 style={{color:'red'}}>Total items in cart: {cart.length}</h4>
              <h4 style={{color:'blue'}}>Total price: {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h4>
            </div>
          )
        }
      </div>
    {
      data.length===0?(<h2>Product is not available at this time</h2>)
      :(<h2>
        {
        data.map((ele)=>(
            <div style={{height:'400px', width:'400px'}}>
              <img src={ele.image} height={100} width={100}></img>
             <h4>{ele.title}</h4>
             <h4>'$'{ele.price}</h4>
             <h5>{ele.description}</h5>
             <h4>{ele.category}</h4>
             <button onClick={()=>addToCart(ele)}>Add to Cart</button>
            </div>
            
        ))
        }

      </h2>)
    }

   {/* {
    JSON.stringify(data)
   }
       */}
    </div>
  )
}

export default Dashboard