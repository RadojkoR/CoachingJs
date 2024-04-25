import BgVideo from "../../assets/videos/pearTreeBlossom.mp4";
function Header() {
  return (
    <header className="w-100 mainHeader md:relative -z-50">
        <video className="w-100 rela -z-50"  src={BgVideo} autoPlay loop muted/>
    </header>
  )
}

export default Header