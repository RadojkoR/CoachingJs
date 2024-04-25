import BgVideo from "../../src/assets/videos/pearTreeBlossom.mp4";
function ComingSoon() {
  return (
    <div className="relative">
        <header className="w-100 relative mainHeader">
            <video className="w-100"  src={BgVideo} autoPlay loop muted/>
            <h1 className="text-2xl sm:text-5xl md:text-9xl text-slate-800 absolute inset-1/4">COMING SOON</h1>
        </header>
       <div className="w-100 h-[300px] md:hidden"></div>
    </div>
    
  )
}

export default ComingSoon