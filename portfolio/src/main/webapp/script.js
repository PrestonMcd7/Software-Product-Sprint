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
