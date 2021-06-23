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
        <div className='campsOuterDiv'>
            <h2 id='recentCampsTitle'>Check out the latest camps!</h2>
                {recentCamps.map((camp, i) => (<Link to={`camps/${camp.id}`} id={`camp-${i+1}`} className='campLink'key={camp.id}>{camp.name}</Link>))}
        </div>
    )
}

export default CampsComponent;
