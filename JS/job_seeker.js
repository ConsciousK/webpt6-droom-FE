class JobPosting {
    constructor(postDiv) {
        this.postDiv = postDiv;
        this.data = this.postDiv.dataset.swipe;
        matchJobs.addEventListener('click', () => this.showData('yes'));
        allJobs.addEventListener('click', () => this.showData('all'));
    }
    showData(swipeData) {
        if(this.data === swipeData || swipeData === "all") {
            this.postDiv.style.display = "flex";
        } else {
            this.postDiv.style.display = "none";
        }
    }
}

let jobPostings = document.querySelectorAll('.jobcontainer');
let allJobs = document.querySelector('.suitcase');
let matchJobs = document.querySelector('.heart');

jobPostings.forEach(function(post) {
  return new JobPosting(post);
});