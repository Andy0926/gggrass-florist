export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay overlay-img'>

          <div className='row'>
            <div className='col-md-8 col-md-offset-2 intro-text'>
              <div className="">
                <h1 className="intro-h1">
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll btn-learnmore'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
