import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
axios.get('https://api.github.com/users/tinaxgao')
.then(resp => {
  
  const gitUser = {
    avatar_url: resp.data.avatar_url,
    name: resp.data.name,
    login: resp.data.login,
    location: resp.data.location,
    html_url: resp.data.html_url,
    followers: resp.data.followers,
    following: resp.data.following,
    bio: resp.data.bio
  }

  const userCard = githubProfiler(gitUser);
  document.querySelector('.cards').appendChild(userCard);
})
.catch(err => {
  console.error(err);})
.finally(() => {
  console.log('I do not care whether it worked or not');
})
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function githubProfiler(obj){
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name1 = document.createElement('h3');
  const username = document.createElement('p');
  const location1 = document.createElement('p');
  const profile = document.createElement('p');
  const followers1 = document.createElement('p');
  const following1 = document.createElement('p');
  const bio1 = document.createElement('p');

  card.classList.add('card');
  image.src = obj.avatar_url;
  cardInfo.classList.add('card-info');
  name1.classList.add('name');
  name1.textContent = obj.name;
  username.classList.add('username');
  username.textContent = obj.login;
  location1.textContent = `Location: ${obj.location}`;
  profile.innerHTML = `Profile: <a href="${obj.html_url}>${obj.html_url}</a>`;
  followers1.textContent = obj.followers;
  following1.textContent = obj.following;
  bio1.textContent = obj.bio;

  card.append(image, cardInfo);
  // card.appendChild();
  cardInfo.append(name1, username, location1, profile, followers1, following1, bio1);
  // cardInfo.appendChild();
  // cardInfo.appendChild();
  // cardInfo.appendChild();
  // cardInfo.appendChild();
  // cardInfo.appendChild();
  // cardInfo.appendChild();
  return card;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
