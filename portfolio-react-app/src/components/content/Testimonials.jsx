import React from 'react';
import { Title, SubTitle } from '../commons/Titles.jsx';
import Testimonial from './Testimonial.jsx';

export default function Testimonials() {
    const testimonials = [
        {
            "img": "images/testimonials/people1.webp",
            "alt": "people1",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            "name": "James",
            "company": "Samsung"
        },
        {
            "img": "images/testimonials/people2.webp",
            "alt": "people2",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            "name": "Smith",
            "company": "Google"
        },
        {
            "img": "images/testimonials/people3.webp",
            "alt": "people3",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            "name": "Anne",
            "company": "Samsung"
        }
    ];
    return (
        <section id="testimonial" className="section container">
            <Title title="Testimonial" />
            <SubTitle subTitle="See What they say about me" />
            <ul className="testimonials">
                {testimonials.map((item, idx)=>
                    <li className="testimonial" key={idx}>
                        <Testimonial item={item} />
                    </li>                                
                )}
            </ul>
        </section> 
    );
}

