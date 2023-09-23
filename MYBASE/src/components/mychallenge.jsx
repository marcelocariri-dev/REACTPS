const Mychallenge = () => {

    const soma = (a1, b2) => {
       return  console.log(a1 + b2);
    

   };
   const somapar = soma(3,5);
                              

    return (
        <div>
        <div>
            
         
         <button onClick={somapar}>SOME</button>
         <p> resultado:{somapar}</p>
           


        </div>
        </div>
    );
}
export default Mychallenge