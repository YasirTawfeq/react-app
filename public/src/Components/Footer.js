import '../index.css';
function Footer() {
  return (
    <div className=" mt-28 w-full h-10  m-0  text-yellow-300 flex justify-between p-3 font-bold xl:h-16 xl:text-xl border-t-2 border-yellow-300 ">
      <div className="">KURD<small>ANIME</small></div>
      <div className=""> By Yasir &copy; {new Date().getFullYear()}</div>
    </div>
  )
}

export default Footer;