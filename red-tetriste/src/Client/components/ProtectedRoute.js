import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/*Instauration d'une protectedRoute pour eviter a l'utilisateur  d'acceder 
a room via la barre de recherche */

const ProtectedRoute = ({ children}) => {

    const pseudo = useSelector(state => state.pseudo.pseudo);

    if (!pseudo) {
        return <Navigate to='/' replace/>;
    }
    return children;
}

export default ProtectedRoute;