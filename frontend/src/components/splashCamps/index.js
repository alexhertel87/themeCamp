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
        <div className='campsContainerDiv'> Camps container div
            <h2 className='recentCampsTitle'>Check some camps! (id='recentCampsTitle')</h2>
                <div className='huh'>
                        What is this?
                </div>
            <div> CampsOuterDivGrid
             <div>
                    {recentCamps.map((camp, i) => (
                        <Link to={`camps/${camp.id}`}
                        id={`camp-${i + 1}`}
                        className='campLink'
                        key={camp.id}>{camp.name}
                    </Link>))}
            </div>
            </div>
        </div>
    )
}

export default CampsComponent;
