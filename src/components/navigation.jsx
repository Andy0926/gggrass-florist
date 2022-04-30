export const Navigation = (props) => {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <li className="current">
          <a className="smoothscroll" href="#page-top">
            Home
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#features">
            Make Order
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#service">
            Service
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#portfolio">
            Projects
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#social">
            Social Media
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
      </ul>
    </nav>

    // <nav id='nav-wrap' className='navbar navbar-default navbar-fixed-top'>
    //   <div className='container justify-content-between'>
    //     <div className='navbar-header'>
    //       {' '}
    //       <a className='a.navbar-brand page-scroll' href='#page-top'>
    //         <img src='img/Logo.png' alt='' />{' '}
    //       </a>{' '}
    //       <button
    //         type='button'
    //         className='navbar-toggle collapsed'
    //         data-toggle='collapse'
    //         data-target='#bs-example-navbar-collapse-1'
    //       >
    //         {' '}
    //         <span className='sr-only'>Toggle navigation</span>{' '}
    //         <span className='icon-bar'></span>{' '}
    //         <span className='icon-bar'></span>{' '}
    //         <span className='icon-bar'></span>{' '}
    //       </button>
    //       {/* <div className='home-image'>
    //         {' '}
    //         <a className='a.navbar-brand page-scroll' href='#page-top'>
    //           <img src='img/Logo.png' alt='' />{' '}
    //         </a>{' '}

    //       </div> */}
    //       {/* <a className='navbar-brand page-scroll' href='#page-top'>
    //         MONALISA
    //       </a>{' '} */}
    //     </div>

    //     <div
    //       className='collapse navbar-collapse'
    //       id='bs-example-navbar-collapse-1'
    //     >
    //       <div className='navbar-header'>
    //         {/* {' '}
    //         <a className='a.navbar-brand page-scroll' href='#page-top'>
    //           <img src='img/Logo.png' alt='' />{' '}
    //         </a>{' '} */}

    //       </div>
    //       <ul className='nav navbar-nav justify-content-between navbar-right'>
    //         <li>
    //           <a href='#features' className='page-scroll'>
    //             Appointment
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#services' className='page-scroll'>
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#social' className='page-scroll'>
    //             Social Media
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#about' className='page-scroll'>
    //             About
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}
