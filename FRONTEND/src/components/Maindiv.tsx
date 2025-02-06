import Chart  from "./Chart";
const Maindiv=()=>{
    return(
        <div className="grid grid-cols-[65%_35%] gap-6 p-8 mx-8">

            <div className="flex flex-col space-y-4">
                <div>
                    <Chart/>
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                <div>Ad</div>
                <div>Trending Coins</div>
            </div>
            
        </div>
    )
}
export default Maindiv;