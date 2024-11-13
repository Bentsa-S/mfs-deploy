import React, { useEffect }from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import './headerStail.css';
import phoneModel from '../../assets/IPHONE13.glb'
import user from '../../assets/circle-user.png'
import search from '../../assets/search.png'


// const Iphone3d = ( props ) => {
//     const { scene } = useGLTF(phoneModel)
//     return <primitive object={scene} {...props}/>;
// }

export const Header = () => {
    const navigate = useNavigate()
    const { data } = useSelector((state) => state.form.registration);

    useEffect(() => {
      if (data) {
        navigate('/')
        console.log(data);
        
      }
    }, [data]);
    
    return (
        <header className="header">
            <NavLink className="logo">MFS</NavLink>
            <div className="search-container">
                <input type="text" placeholder="Пошук" className="search-input" />
                <button className="search-button">
                    <img className="search-icon" src={search}/>
                </button>
            </div>
            {data && data.admin && <NavLink to='/admin'>додати телефон</NavLink>}
            {data && data.name ? <span className="user-name">{data.name}</span> : <NavLink to='/login' >вхід</NavLink>}
            <div className='scene-iphone'>
                {/* <Canvas >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Iphone3d   position={[0, 0, 0]} scale={[1, 1, 1]} />
                    <OrbitControls/>
                </Canvas> */}
            </div>

        </header>
    );
};