export const Social = (props) => {
    return (
        <div id='social' className='text-center'>
            <div className='container'>
                <div className='col-md-12 section-title'>
                    <h2>Social Media</h2>
                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                                {' '}
                                <a href={d.link}><i className={d.icon}></i></a>
                                <h3>{d.title}</h3>
                                <p>{d.text}</p>
                            </div>
                        ))
                        : 'Loading...'}

                </div>
            </div>
        </div>
    )
}