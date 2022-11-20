import React from "react";
import "./education.css";
import img1 from "../../img/bullied.png";
import img2 from "../../img/students.png";
import img3 from "../../img/teacher.png";

const data = [
    {
        id: 1,
        image: img1,
        title: 'I am Being Bullied',
        link: '/education/bullied'
    },
    {
        id: 2,
        image: img2,
        title: 'I am a Students',
        link: '/education/students'
    },
    {
        id: 3,
        image: img3,
        title: 'I am a Teacher',
        link: '/education/teacher'
    }
]

function Education () {
    return (
        <>
        <section id="education">
            <h5>Mencari informasi untuk menangani kasus bullying?</h5>
            <h1>Pilih Role</h1>

            <div className="education_container">
                {
                    data.map (({id, image, title, link}) => {
                        return (
                            <article key={id} className="education_item">
                                <div className="education_item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3><a className="title-edu" href={link}>{title}</a></h3>
                            </article>
                        )
                    })
                }
            </div>
        </section>
        </>
    );
};

export default Education;