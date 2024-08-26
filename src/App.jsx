import './App.css'
import SideMenu from "./../src/SideMenu"

function App() {
  
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <header>
       
        <div className='head-1'>
          <img src="./dpca-logo.png" 
            width="100px" height="50px" alt="logo"/></div>


        
        <div className='head-2'>
          <div className='timing'>
            <div>HOURS: MONDAY - FRIDAY; SATURDAY;</div>
            <div>9.00am - 6.00pm; 11am-4pm;</div>
            <div>Jail/Police Department visits: 24/7</div>
          </div>

          <div className='contact'>
            <div><a href="">JOE@DPCALAWGROUP.COM</a></div>
            <div>(+91) 00000-00000</div>
            <div>Jharkhand, IN</div>
        </div>
        </div>
       
      </header>
      <nav>
        <div className='nav'>
          
          <div className='nav-1'>
             <a href="#" className='home'>HOME</a>
             <a href="#" className='areas'>PRACTICE AREAS</a>
             <a href="#" className='about'>ABOUT US</a>
             <a href="#" className='blog'>BLOG</a>
             <a href="#" className='case'>CASE VICTORIES</a>
             <a href="#" className='contact'>CONTACT</a>
           
          </div>
          <div className='nav-2'>
            <a href="#" className='consultation'><button id='consult'>Free Consultation 24/7</button></a>
          </div>
        </div>
      </nav>
      
      <main>
        <SideMenu />
      </main>
      <footer>
      <div className='head-1'>
          <img src="./dpca-logo.png" 
            width="100px" height="50px" alt="logo"/></div>
        
        <div className='head-2'>
          <div className='timing'>
            <div>HOURS: MONDAY - FRIDAY; SATURDAY;</div>
            <div>9.00am - 6.00pm; 11am-4pm;</div>
            <div>Jail/Police Department visits: 24/7</div>
          </div>

          <div className='contact'>
            <div><a href="">JOE@DPCALAWGROUP.COM</a></div>
            <div>(+91) 00000-00000</div>
            <div>Jharkhand, IN</div>
        </div>
      </div>
        <div><p>&copy; {currentYear} DPCA. All rights reserved.</p></div>
      </footer>
    </>
  )
}

export default App
