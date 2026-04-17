import React from 'react';

export default function Modal({ project, onClose}) {
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
            >
                <span className="close-btn" onClick={onClose}>✕</span>
                <h2>{project.title}</h2>
                <img src={project.img} alt={project.alt} />
                <p>{project.description}</p>
            </div>
        </div>
    );
}