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
                {recentCamps.map((inn, i) => (<Link to={`camps/${inn.id}`} id={`inn-${i+1}`} className='innLink'key={inn.id}>{inn.name}</Link>))}
        </div>
    )
}

export default CampsComponent;
