const faker = require('faker');
const moment = require('moment');

let fakeData = [];

function buildFakeUsers() {
  return {
    datePosted: moment(faker.date.past()).format('LLL'),
    postTitle: faker.company.catchPhrase(),
    postDescription: faker.hacker.phrase(),
    authorName: faker.name.findName(),
    authorTwitter: `@${faker.lorem.word()}`,
    authorPhoto: faker.image.avatar(),
    postComments: 0,
    postRePosted: 0,
    postLikes: 0,
    postShares: 0,
  }
}

for(var i = 0; i < 20; i++) {
  fakeData.push(buildFakeUsers());
}

export default fakeData;


