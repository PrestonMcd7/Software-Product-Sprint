// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomQuote() {
  const quotes =
        ["You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want. -Yoshihiro Togashi",
        "I don’t want what another man can give me. If he grants me anything, then it’s his to give and not my own. -Kentaro Miura",
        "Sometimes good people make bad choices. It doesn't mean they are bad people. It means they're human. -Sui Ishida",
        "Why is it that when one man builds a wall, the next man immediately needs to know what's on the other side? -George R.R. Martin"];

  // Pick a random greeting.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}
async function sayHelloUsingAsyncAwait() {
   const hiContainer = document.getElementById('hi-container');
   quoteContainer.innerText = Hi;

  const response = await fetch('/data');
  const quote = await response.text();
  document.getElementById('hi-container').innerText = Hi;
}

function createMap() {
  const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 27.9659, lng: 82.8001}, zoom: 10});
  
  const irbMarker = new google.maps.Marker({
    position: {lat: 27.869962, lng: -82.850475},
    map: map,
    title: 'Indian Rocks Beach'});

  const irbInfoWindow =
      new google.maps.InfoWindow({content: 'The best beach in Pinellas county. The sand and water is just as goo as Clearwater beach, quieter.'});
  trexInfoWindow.open(map, irbMarker);

  const shMarker = new google.maps.Marker({
    position: {lat: 27.990709, lng: -82.690237},
    map: map,
    title: 'Main Street Safety-Harbor'});

  const shInfoWindow =
      new google.maps.InfoWindow({content: 'Favorite place to walk around, home to a few of my favorite restaurants.'});
  trexInfoWindow.open(map, shMarker);

  const cmMarker = new google.maps.Marker({
    position: {lat: 28.017391, lng: -82.733499},
    map: map,
    title: 'Countryside Mall'});

  const cmInfoWindow =
      new google.maps.InfoWindow({content: 'I have been going here for as long as I can remember, ice skating, movies, chick-fil-A. It has everything.'});
  trexInfoWindow.open(map, cmMarker);
  
}
