import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { getRecentCamps } from '../../store/camps';
import './SplashCamps.css';

const CampsComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecentCamps())
    }, [dispatch])

    const recentCamps = useSelector(state => state.camps.list)

    return (
        <div >
            <h2 className='recentCampsTitle'>Check Out Our Awesome Camps!</h2>
            <div className='campsOuterDivGrid'>

                    {recentCamps.map((camp, i) => (
                        <div className='campsDiv'>
                            <Link
                            to={`camps/${camp.id}`}
                            id={`camp-${i + 1}`}>
                                <img className='campPics' src={camp.Images[0]?.url} alt='images'/>
                            </Link>
                            <Link
                                to={`camps/${camp.id}`}
                                id={`camp-${i + 1}`}
                                className='campLink'
                                key={camp.id}>{camp.campName}
                            </Link>

                        </div>
                    ))}
            </div>
        </div>
    )
}

export default CampsComponent;
