import React from 'react'
import styles from "./BlogSection.module.scss"
import HeadingSecondary from '../../UI/Heading/HeadingSecondary'
import Button from '../../UI/Button/Button'

import BlogCard from './BlogCard'

interface profile {
    img: string,
    name: string
}
interface blog {
    id: string,
    img: string,
    profile: profile,
    title: string
}

const blogs: blog [] =[ 
    {
        id: 'b1',
        img: require("./../../../assets/img/trisep-p-800.jpeg"),
        profile: {
            img: require("./../../../assets/img/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"),
            name: "Alexander Hipp"
        },
        title: "The 10 best exercises to do in your park"

    }, {
        id: 'b2',
        img: require("./../../../assets/img/joseph-gonzalez-p-800.jpeg"),
        profile: {
            img: require("./../../../assets/img/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"),
            name: "Alexander Hipp"
        },
        title: "Healthy breakfast ideas"

    }, {
        id: '3',
        img: require("./../../../assets/img/gallery-5.jpeg"),
        profile: {
            img: require("./../../../assets/img/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"),
            name: "Alexander Hipp"
        },
        title: "My life changing experience"

    }
]

const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
        <div className={styles.blogContainer}>
            <div className={styles.blogHeading}>
                <HeadingSecondary primaryColor center>Read our tips and tricks</HeadingSecondary>
                <p className={styles.blogText}>
                We post a lot of free content around health fitness and general wellbeing. Make sure to check all of our posts down below.
                </p>
                <Button >View all post</Button>
            </div>
            <div className={styles.blogContent}>
                
                {blogs.map(blog => <BlogCard key={blog.id} title={blog.title} profile={blog.profile} img={blog.img} />)}
            </div>
        </div>
    </section>
  )
}

export default BlogSection