import { useContext, useState } from 'react';
import { addToCartContent } from '../contexts';

export const useAddToCart = () => {
    const context = useContext(addToCartContent);

    if(!context) throw new Error('content not found');
 
    return context;
}