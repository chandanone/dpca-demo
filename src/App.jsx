import './App.css'

function App() {
  
  const currentYear = new Date().getFullYear();
  
  return (
    <div>
{/*       <header>
       
        <div className='head-1'>
          <p>Divorced Person Concern Advocate</p>
          <p>Support and resources for your journey forward</p>
        </div>
        
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
       
      </header> */}

      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Divorced Person Concern Advocate</h1>
          <p className="mt-2">Support and resources for your journey forward</p>
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
        <div>
          <p>&copy; {currentYear} Divorced Person Concern Advocate. All rights reserved.</p>
          <p>If you're in crisis, please call our 24/7 helpline: 1-800-DIVORCE.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
