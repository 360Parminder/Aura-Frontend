import twitter from '../../assets/images/twitter.png'


export default function Footer({ className = "" }) {
  return (
    <footer
      className={`font-manrope flex w-full flex-col gap-y-6 bg-neutral-950 px-10 pb-12 pt-24 text-lg leading-normal tracking-[0px] text-neutral-400 ${className}`}
    >
      <nav className="flex flex-wrap items-start justify-center gap-y-[30px] min-[1910px]:flex-nowrap" >
        <section className="flex flex-wrap items-center justify-center gap-y-[30px] font-medium min-[1910px]:flex-nowrap" >
          {/* <HomeMenu className="w-60" />
          <MoviesMenu className="w-60" />
          <ShowsMenu className="w-60" /> */}
         <div className="w-52">
         <p className='mb-5 text-white'>Home</p>
         <p>Categories</p>
         <p>Devices</p>
         <p>Pricing</p>
         <p>FAQ</p>
         </div>
          <div className="w-52">
          <p className='mb-5 text-white' >Movies</p>
          <p >Gernes</p>
          <p >Trending</p>
          <p >New Release</p>
          <p >Popular</p>
          </div>
          <div className="w-52">
          <p className='mb-5 text-white' >Shows</p>
          <p >Gernes</p>
          <p >Trending</p>
          <p >New Release</p>
          <p >Popular</p>
          </div>
        </section>
        <section className="flex flex-wrap items-start justify-center gap-y-[30px] min-[1910px]:flex-nowrap" >
        <div className="w-52">
        <p className='mb-5 text-white'  >Support</p>
        <p>Contact Us</p>
          </div>
        <div className="w-52">
          <p className="mb-5 text-white" >Subscription</p>
       <p className=''>Plans</p>
       <p>Features</p>
          </div>
          <div className="w-52">
          <p className='mb-5 text-white' >Connect With Us</p>
          <div className='flex flex-row justify-between mt-5 pe-8'>
            <img className=' w-6 h-6' src={twitter} alt="" />
            <img className=' w-6 h-6' src={twitter} alt="" />
            <img className=' w-6 h-6' src={twitter} alt="" />
            
          </div>
          </div>
          
        </section>
      </nav>
      <section className="flex flex-col justify-end pt-[75px]">
        {/* <FooterDivider className="h-px flex-shrink-0" /> */}
      </section>
      <section className="flex flex-wrap items-center justify-between gap-x-[19px] gap-y-3.5 min-[1910px]:flex-nowrap" >
        <div>@2023 streamvib, All Rights Reserved</div>
        <div className="flex h-7 flex-wrap items-center justify-center gap-x-[19px] gap-y-3.5 min-[1910px]:flex-nowrap" >
          <button className="text-left">Terms of Use</button>
          {/* <FooterVerticalDivider className="h-7 w-px flex-shrink-0 [min-height:27px]" /> */}
          <button className="text-left">Privacy Policy</button>
          {/* <FooterVerticalDivider className="h-7 w-px flex-shrink-0 [min-height:27px]" /> */}
          <button className="text-left">Cookie Policy</button>
        </div>
      </section>
    </footer>
  );
}

