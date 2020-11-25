import React from 'react';

export const Repos = ({repos}) => {
    console.log(repos);
    const renderReps = (reps) => {
        return reps.map(rep => {
                return (
                    <a
                    key={rep.id}
                    href={rep.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-info"
                    >{rep.name}</a>
                )
            })}
    return (
    <>
        {renderReps(repos)}
    </>
    )
}