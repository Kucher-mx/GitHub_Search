import React from 'react';

export const TrySearch = () => {
    return (
        <div style={{
            marginTop: '20px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <h1 style={{marginTop: '50px'}}>Hey buddy, try to find smth</h1>
            <img src={'https://img.icons8.com/pastel-glyph/2x/search--v2.png'} 
            alt="search icon" 
            style={{width: '350px'}}/>
        </div>
    )
}