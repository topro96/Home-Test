import React from 'react';
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import ContentField from './ContentField';

export default function App()
{
    return(
        <div>
            <SearchBar></SearchBar>
            <SortBar></SortBar>
            <ContentField></ContentField>
        </div>
    );

}