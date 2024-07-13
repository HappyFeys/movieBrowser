function Form() {
    return (
      <div className="mt-4 flex flex-col items-center">
        <div className="relative w-5/6">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-input-dark w-full p-2 pl-10 rounded text-gray-300"
          />
          <span className="material-symbols-outlined text-white absolute top-1/2 left-3 transform -translate-y-1/2">
            search
          </span>
        </div>
      </div>
    );
  }

export default Form