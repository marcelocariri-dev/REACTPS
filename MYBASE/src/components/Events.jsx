const Events = () => {
const handleMyevent = (e) => { console.log(e)};
   const renderSomething = (x) => {
    if(x)
    {  return<h1>REDENRIZAR ISSO</h1>  
    }else{
        return<h1>ou isso</h1>  
    }
   };
   
   return(
<div>
<div>
<button onClick={handleMyevent}>CLIQUE AQUI</button>
</div>
{renderSomething(true)}
{renderSomething(false)}
</div>


    )


    
}
export default Events