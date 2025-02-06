const Navbar=()=>{
    return(
        <div className="bg-white shadow-sm flex justify-between items-center p-4">

            <div className="mx-8">
                <img src="/src/assets/logo.png" alt="logo" className="w-20"/>
            </div>

            <div className="flex items-center space-x-8 mx-8">
                <p className="font-semibold text-sm">Crypto Taxes</p>
                <p className="font-semibold text-sm">Free Tools</p>
                <p className="font-semibold text-sm">Resource Center</p>
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 font-semibold text-white text-sm rounded-md p-1.5 px-4">Get Started</button>
            </div>
        </div>
    )
}
export default Navbar;