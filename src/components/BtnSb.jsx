const BtnSb = (BtnTitle ,  Content ) => {
    return(
        <button>
        <div className="bg-gradient-to-r from-cyan-800 to-blue-400 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <p className="mb-2">
                {BtnTitle}
            </p>
            <span>
                <hr className="my-1 text-gray-400"/>
            </span>
            <p className="text-gray-600 text-sm m-2">
                {Content}
            </p>
        </div>

        </button>
    )
    }
export default BtnSb;