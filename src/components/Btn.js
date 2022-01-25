const Btn = ({ btn, selectFunction }) => {
  
  return ( 
    <button 
      className= { 'btn ' + btn.className }
      id={ btn.id }
      onClick={ () => selectFunction(btn.func, btn.btn) }
    >
      { btn.btn }
    </button>
  );
}
 
export default Btn;