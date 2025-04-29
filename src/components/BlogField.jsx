 import React  from "react";
 

const BlogField = ({  reciveddata ,handledel ,handleedit}) => {
 

  

  return (
    <ul className="space-y-6 ">
      {reciveddata.map((ele, i) => (
        <li key={i} className="bg-white p-4 rounded-2xl shadow-md">
          <img 
            src={ele.imageUrl} 
            alt={ele.title} 
            className="w-full max-w-xs rounded-lg mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{ele.title}</h2>
          <p className="text-gray-600 mb-4">{ele.description}</p>
          <div className="flex justify-center gap-4">
            <button   onClick={()=>{handleedit(i) } } className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
              Edit
            </button>
            <button 
              onClick={() =>  handledel(i) } 
              className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogField;
