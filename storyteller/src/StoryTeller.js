import React, { useState } from "react";

const stories = [
    {
        id: 1,
        title: "The Hare and the Tortoise",
        image: "https://ofhsoupkitchen.org/wp-content/uploads/2023/12/short-stories-with-morals-7.jpg",
        text: "A brave little fox set out on an adventure through the forest...",
        fullText: `Once, there was a hare who was best friends with a tortoise. The hare was very proud of how fast he could run, so one day, he challenged the tortoise to a race. The tortoise agreed, even though everyone thought he was way too slow to win. The race began, and the hare raced so fast that he was far ahead of the tortoise.

Feeling confident, the hare decided to take a nap under a tree while the tortoise kept going, step by step. When the hare woke up, he was shocked to see the tortoise crossing the finish line. The tortoise had won the race!`
    },
    {
        id: 2,
        title: "The Dog and the Bone",
        image: "https://ofhsoupkitchen.org/wp-content/uploads/2023/12/short-stories-with-morals-5.jpg",
        text: "A group of friends searched for the lost treasure of Atlantis...",
        fullText: `One day, a dog found a big, tasty bone. He was so excited that he grabbed it and ran to find a quiet spot to chew it in peace. While crossing a river, he looked down and saw his reflection in the water. But the silly dog thought it was another dog with another bone! Greedy for more, the dog barked to snatch that “other” bone. But as soon as he opened his mouth, his own bone dropped into the water and sank. The poor dog lost it all and had to go home with nothing.`
    },
    {
        id: 3,
        title: "The Thirsty Crow",
        image: "https://ofhsoupkitchen.org/wp-content/uploads/2023/12/short-stories-with-morals-6.jpg",
        text: "Flowers could talk and animals danced every night under the stars...",
        fullText: `A thirsty crow was flying through a forest, looking everywhere for water. Finally, he saw a pot with some water at the bottom, but his beak couldn’t reach it. The crow didn’t give up. He looked around and noticed some pebbles on the ground. The clever crow started dropping the pebbles into the pot one by one. Slowly, the water rose higher and higher until it was close enough for him to drink. The crow finally quenched his thirst and flew away happily.`
    },
    {
        id: 4,
        title: "Lazy John",
        image: "https://ofhsoupkitchen.org/wp-content/uploads/2023/12/short-stories-with-morals-3.jpg",
        text: "An enchanted castle hidden in the clouds, where dreams came true...",
        fullText: `There was a boy named John, and he was the laziest boy in the entire town. One day, John saw their apple tree full of shiny red apples. He wanted to eat some but was too lazy to climb the tree. Instead, he lay on the grass and waited for the apples to fall down on their own. But, of course, the apples didn’t fall, and soon John was very, very hungry because he hadn’t worked for his food.`
    },
    {
        id: 5,
        title: "The Fox and the Grapes",
        image: "https://ofhsoupkitchen.org/wp-content/uploads/2023/12/short-stories-with-morals-8.jpg",
        text: "An enchanted castle hidden in the clouds, where dreams came true...",
        fullText: `A hungry fox was walking past a vineyard when he saw some ripe, juicy grapes hanging from a vine. They looked so delicious! The fox jumped high to grab them but couldn’t reach them, no matter how hard he tried. Tired and frustrated, the fox walked away, grumbling, “Those grapes are probably sour anyway!” But deep down, he knew he had just given up too quickly.`
    },
    {
        id: 6,
        title: "The Ant and the Grasshopper",
        image: "https://ofhsoupkitchen.org/wp-content/uploads/2023/12/short-stories-with-morals-2.jpg",
        text: "An enchanted castle hidden in the clouds, where dreams came true...",
        fullText: `One summer, an ant worked hard every day to gather food and store it safely for the winter. His friend, the grasshopper, however, laughed and said, “You work too hard! Relax!” The grasshopper spent all summer playing and singing instead of preparing.

But when winter came, the grasshopper was cold and hungry, while the ant stayed cozy in his home with more than enough food.`
    },
    {
        id: 7,
        title: "The Boy Who Cried Wolf",
        image: "https://ofhsoupkitchen.org/wp-content/uploads/2023/12/short-stories-with-morals-11.jpg",
        text: "An enchanted castle hidden in the clouds, where dreams came true...",
        fullText: `There was a young boy whose job was to watch over the village sheep. One day, he was bored and wanted some fun, so he shouted, “Wolf! Wolf!” The villagers came running to help, only to find the boy laughing at them because there was no wolf. The next day, he did it again, and the villagers were angry. Later, a real wolf came and started attacking the sheep. The boy cried, “Wolf! Wolf!” But this time, no one believed him, and the wolf ran off with some sheep.`
    },
    {
        id: 8,
        title: "The Ugly Duckling",
        image: "https://ofhsoupkitchen.org/wp-content/uploads/2023/12/short-stories-with-morals-1.jpg",
        text: "An enchanted castle hidden in the clouds, where dreams came true...",
        fullText: `A little duckling was born looking very different from his siblings. The other ducklings called him ugly and made fun of him. Feeling like he didn’t belong, the little duckling ran away and searched for a place where he could be accepted. Seasons passed, and one day, he saw his reflection in a lake. To his surprise, he had grown into a beautiful swan! He wasn’t an ugly duckling at all—he had just been different all along.`
    },
    {
        id: 9,
        title: "The Lion and the Poor Slave",
        image: "https://ofhsoupkitchen.org/wp-content/uploads/2023/12/short-stories-with-morals-10.jpg",
        text: "An enchanted castle hidden in the clouds, where dreams came true...",
        fullText: `A kind slave ran away from his cruel master and hid in the forest. There, he saw a lion roaring in pain because a big thorn was stuck in its paw. Even though he was scared, the slave helped the lion by pulling the thorn out. The lion went back into the woods, free and happy. Later, the slave was caught and sent to be punished by being thrown into a lion’s den. But the lion didn’t harm him—it was the same lion he had helped!`
    },
    {
        id: 10,
        title: "The Elephant and the Ants",
        image: "https://ofhsoupkitchen.org/wp-content/uploads/2023/12/short-stories-with-morals-4.jpg",
        text: "An enchanted castle hidden in the clouds, where dreams came true...",
        fullText: `A big, proud elephant loved bullying smaller animals. Every day, he sprayed water at the ant hill, making life difficult for the tiny ants. One day, the ants decided to teach him a lesson. They crawled into his trunk and started biting him from the inside! The elephant danced and howled in pain until he begged for forgiveness. He promised to never hurt the ants or anyone else again.`
    }

];

const StoryTeller = () => {
    const [selectedStory, setSelectedStory] = useState(stories[0]);

    return (
        <div className="story-teller-container">
            <h1 className="story-teller-title">📖 Story Teller</h1>
            <div className="story-teller-story">
                <h2>{selectedStory.title}</h2>
                <img
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    className="story-teller-main-image"
                />
                <div className="story-full-text">
                    <h3>Full Story</h3>
                    <div className="story-full-scroll">
                        <p>{selectedStory.fullText}</p>
                    </div>
                </div>
            </div>
            <div className="story-teller-thumbnails">
                {stories.map((story) => (
                    <div key={story.id} style={{ textAlign: "center" }}>
                        <img
                            src={story.image}
                            alt={story.title}
                            className={`story-teller-thumbnail${selectedStory.id === story.id ? " selected" : ""}`}
                            onClick={() => setSelectedStory(story)}
                        />
                        <h3>{story.title}</h3>
                    </div>
                ))}
            </div>
            <style>{`
                .story-teller-container {
                    max-width: 1100px;
                    margin: 40px auto;
                    padding: 32px;
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                .story-teller-title {
                    text-align: center;
                    font-size: 2.8rem;
                    margin-bottom: 30px;
                    color: #ff6b81;
                    font-weight: 800;
                }

                .story-teller-story {
                    background: linear-gradient(to right, #fef9f8, #fdf4f5);
                    border: 2px solid #ffe0e5;
                    border-radius: 16px;
                    padding: 30px;
                    text-align: center;
                    margin-bottom: 40px;
                }

                .story-teller-story h2 {
                    font-size: 1.8rem;
                    color: #222;
                    margin-bottom: 20px;
                }

                .story-teller-main-image {
                    width: 220px;
                    height: 160px;
                    object-fit: cover;
                    border-radius: 12px;
                    border: 3px solid #ffcdd2;
                    box-shadow: 0 5px 20px rgba(255, 107, 129, 0.2);
                    margin-bottom: 18px;
                }

                .story-teller-story p {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    color: #444;
                }

                .story-full-text {
                    margin-top: 24px;
                    text-align: left;
                }

                .story-full-text h3 {
                    font-size: 1.4rem;
                    color: #ff4f6d;
                    margin-bottom: 10px;
                }

                .story-full-scroll {
                    max-height: 220px;
                    overflow-y: auto;
                    background: #fff6f8;
                    padding: 14px 18px;
                    border-radius: 10px;
                    box-shadow: inset 0 0 8px rgba(0,0,0,0.05);
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: #333;
                }

                .story-teller-thumbnails {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 24px;
                }

                .story-teller-thumbnail {
                    width: 180px;
                    height: 130px;
                    object-fit: cover;
                    border: 2px solid #ddd;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    opacity: 0.85;
                }

                .story-teller-thumbnail:hover {
                    transform: scale(1.06);
                    border-color: #ff85a2;
                    opacity: 1;
                    box-shadow: 0 6px 20px rgba(255, 133, 162, 0.3);
                }

                .story-teller-thumbnail.selected {
                    border: 3px solid #ff6b81;
                    transform: scale(1.08);
                    box-shadow: 0 8px 30px rgba(255, 107, 129, 0.4);
                    opacity: 1;
                }

                .story-teller-thumbnails h3 {
                    font-size: 0.95rem;
                    margin-top: 8px;
                    color: #333;
                    font-weight: 500;
                }
            `}</style>
        </div>
    );
};

export default StoryTeller;
