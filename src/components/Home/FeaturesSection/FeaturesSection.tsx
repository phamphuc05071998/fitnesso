import React from "react";
import styles from "./FeaturesSection.module.scss";
import HeadingSecondary from "../../UI/Heading/HeadingSecondary";
import Button from "../../UI/Button/Button";
import FeatureCard from "./FeatureCard";

const FeatureCardList = [
    {
        id: 'f1',
        img: require("./../../../assets/img/Rectangle-439.png"),
        title: " Learn to live a healthy life with fitness",
        description: "Changing your lifestyle with a fast paced life may seem hard or impossible, but with small steps each week you can achieve your dream physique and live a healthier life."

    }, {
        id: 'f2',
        img: require("./../../../assets/img/logan-weaver-unsplash-p-500-1.jpeg"),
        title: 'Understand how to do excercises properly',
        description: "Just going to the gym and lifting weights won't make you healthy, after all it may even cause some harm to your body. We teach proper exercise techniques",
    },
    {
        id: "f3",
        img: require('./../../../assets/img/logan-weaver-unsplash-p-500.jpeg'),
        title: "Track your progress weekly",
        description: "We're tracking your goal weight with body fat measures, weight and general feeling. You may have the same body weight but feel 10x better."

    },
    {
        id: "f4",
        img: require("./../../../assets/img/time.png"),
        title: "Follow a specific plan made just for you",
        description: "Everyone is different, and we know it. That's why all of our clients get a programme specific just for their lifestyle and body tipe. This give the best possible results."
    }
]

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresHeading}>
          <HeadingSecondary primaryColor center>
            The journey to a healthier body starts right now
          </HeadingSecondary>
          <Button href="about">Online Coaching</Button>
        </div>
        {FeatureCardList.map(item => <FeatureCard key={item.id} title={item.title} img={item.img} description={item.description}/>)}
      </div>
    </section>
  );
};

export default FeaturesSection;
