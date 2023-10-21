const data = {
    "backgroundColors": [
        "hsl(263, 55%, 52%)",
        "hsl(217, 19%, 35%)",
        "hsl(0, 0%, 100%)",
        "hsl(219, 29%, 14%)",
        "hsl(0, 0%, 100%)",
    ],

    "textColors": [
        "hsl(210, 46%, 95%)",
        "hsl(0, 0%, 100%)",
        "hsl(217, 19%, 35%)",
        "hsl(0, 0%, 100%)",
        "hsl(217, 19%, 35%)",
    ],

    "profileImages": [
        "./images/image-daniel.jpg",
        "./images/image-jeanette.jpg",
        "./images/image-jonathan.jpg",
        "./images/image-kira.jpg",
        "./images/image-patrick.jpg"
    ],

    "names": [
        "Daniel Clifford",
        "Jonathan Walters",
        "Jeanette Harmon",
        "Patrick Abrams",
        "Kira Whittle"
    ],

    "tags": [
        "Verified Graduate",
        "Verified Graduate",
        "Verified Graduate",
        "Verified Graduate",
        "Verified Graduate"
    ],

    "reviews": [
        "I received a job offer mid-course, and the subjects I learned were current, if not more so," +
        " in the company I joined. I honestly feel I got every penny’s worth.",
        "The team was very supportive and kept me motivated",
        "An overall wonderful and rewarding experience",
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and" +
        " learning from their experiences was easy.",
        "Such a life-changing experience. Highly recommended!"
    ],

    "details": [
        "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a" +
        "  transition and have heard some people who had an amazing experience here. I signed up" +
        "  for the free intro course and found it incredibly fun! I enrolled shortly thereafter." +
        "  The next 12 weeks was the best - and most grueling - time of my life. Since completing" +
        "  the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",

        "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer" +
        "  for a big company. This was one of the best investments I’ve made in myself. ”",

        "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living" +
        "  while doing something I love. ”",

        "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program" +
        "  gave me the confidence necessary to be able to go out in the world and present myself as a capable" +
        "  junior developer. The standard is above the rest. You will get the personal attention you need from" +
        "  an incredible community of smart and amazing people. ”",

        "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from" +
        "  professionals who can help me learn programming step by step. I was encouraged to enroll by a former" +
        "  student of theirs who can only say wonderful things about the program. The entire curriculum and staff" +
        "  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team" +
        "  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial" +
        "  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent" +
        "  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers." +
        "  100% recommend! ”"
    ]
}


function getContent(title, index) {
    return data[title][index];
}


function loadContent(count = 5) {
    for(let i = 0; i < count; i++) {
        const parent = document.getElementById("card-" + (i + 1));
        parent.style.color = getContent("textColors", i);
        parent.style.backgroundColor = getContent("backgroundColors", i);

        const topContent = document.createElement("div");
        topContent.classList.add("horizontal-flex-wrapper");
        topContent.appendChild(document.createElement("div"));  /* append profile-img element */
        topContent.appendChild(document.createElement("div"));  /* append name-tag element */

        topContent.children[0].classList.add("profile-img");
        const image = document.createElement("img");
        image.src = getContent("profileImages", i);
        topContent.children[0].appendChild(image);

        topContent.children[1].classList.add("name-tag");
        topContent.children[1].innerHTML = "<p class=\"name\">" + getContent("names", i) + "</p>\n" +
            "<p class=\"tag\">" + getContent("tags", i) + "</p>\n";
        parent.appendChild(topContent);

        const review = document.createElement("p");
        review.classList.add("highlight");
        review.innerText = getContent("reviews", i);
        parent.appendChild(review);

        const detail = document.createElement("p");
        detail.classList.add("detail");
        detail.innerText = getContent("details", i);
        parent.appendChild(detail);

    }
}


window.onload = function() {
    loadContent();
};