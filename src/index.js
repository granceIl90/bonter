// bonter.js

const bahaStory = require('baha-story');

function tellRandomStory() {
    const story = bahaStory.getRandomStory();
    console.log(`"${story.title}" by ${story.author}`);
    console.log(story.content);
}

module.exports = {
    tellRandomStory
};
