Brock Spacek
02/28/25
Advice Generator

Description - Requirements:

Built in React
Use https://api.adviceslip.com/advice for your API call
Must have a component folder ( App cannot be built in the app.js or in the index.js)
Responsive to Mobile and Desktop versions
Must use all assets given
You can use bootstrap or tailwind
Goal is to recreate this challenge as close to the design as possible and having it function properly.


Peer Reviewer: Charles Orr

Comments: Everything looks good, all i recommend is adding this small bit of code to make it load answers faster, great job :)
    let rng = Math.floor( (Math.random() * 223) + 1 );
    const promise = await fetch(`https://api.adviceslip.com/advice/${rng}`);
