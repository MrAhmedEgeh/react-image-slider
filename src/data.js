import { v4 as uuidv4 } from "uuid";
// IMPORT IMAGES
import img1 from './Assets/682452.jpg';
import img2 from './Assets/f4ed.jpg';
import img3 from './Assets/Moon.jpg';
import img4 from './Assets/NY.jpg';
import img5 from './Assets/owl.jpg';
import img6 from './Assets/wp2782413.jpg';

const Data = () => {
    return [
        {
            id: uuidv4(),
            image: img1,
            text: "Enjoy The Nature",
            alt: "A picture about nature"
        },
        {
            id: uuidv4(),
            image: img2,
            text: "Artificial Intelligence is The Future",
            alt: "A tiger that is half robot"
        },
        {
            id: uuidv4(),
            image: img3,
            text: "Remember To Relax!",
            alt: "A picture of the moon"
        },
        {
            id: uuidv4(),
            image: img4,
            text: "New York, The City That Never Sleeps",
            alt: "A picture of New York"
        },
        {
            id: uuidv4(),
            image: img5,
            text: "Animals are Fascinating",
            alt: "A picture about an Owl"
        },
        {
            id: uuidv4(),
            image: img6,
            text: "Keep Our Planet Breathing!",
            alt: "A picture about Nature and a green grass"
        },
    ];
}

export default Data;


