const Display = ({ display, formula}) => {
  return ( 
    <div>
      <input
        className="text-2xl text-right truncate bg-transparent w-72" 
        type="text"
        value={ formula }
        disabled
      />
      
      <div 
        className="text-5xl text-right ovf h-12 w-72 mx-auto my-4 px-1"
        id="display"
      >
        { display }
      </div>
    </div>
   );
}
 
export default Display;