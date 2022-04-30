export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-12 section-title'>
          <h2>How to make appointment</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                {' '}
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
            : 'Loading...'}
        
        </div>
        <a
            href='https://wa.link/10u3s7'
            className='btn btn-custom btn-lg btn-appointment'
          >
            Make Appointment
          </a>{' '}
      </div>
    </div>
  )
}
