import React from 'react';

const Weather = (props) => {
    return (
        <div className='flex-center' style={{color: '#fff'}}>
            <div style={{maxWidth: '230px', paddingTop: '25px'}}>
                {props.city && props.country && <p><span className='metricLabel'>Location: </span>{props.city}, {props.country}</p>}
                {props.temperature && <p><span className='metricLabel'>Temperature: </span>{props.temperature}</p>}
                {props.humidity && <p><span className='metricLabel'>Humidity: </span>{props.humidity}</p>}
                {props.description && <p><span className='metricLabel'>Conditions: </span>{props.description}</p>}
                {props.error && <p>{props.error}</p>}
            </div>
        </div>
    );
};

export default Weather;
