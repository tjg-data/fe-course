import React from 'react';
import { setLike } from '../../features/likeSlice.js';
import { useDispatch } from 'react-redux';

export default function Modal({ project, onClose }) {
    const dispatch = useDispatch();
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>✕</span>
                <h2>{project.title}</h2>
                <img src={project.img} alt={project.alt} />
                <p>{project.description}</p>
                <h3>
                    <button className="modal-like-button"
                            onClick={()=> {dispatch(setLike())}}>❤좋아요</button>
                </h3>
            </div>
        </div>
    );
}