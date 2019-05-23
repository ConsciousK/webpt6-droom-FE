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
let allJobs = document.querySelector('.sidebartxt1');
let matchJobs = document.querySelector('.sidebartxt3');

jobPostings.forEach(function(post) {
  return new JobPosting(post);
});

/*
Below is the content for the Job Postings

            <div class="jobcontainer" data-swipe="no">
                <div class="topbackground">Software Engineer</div>
                <span class="companyinfo">Hadoop<br>Las Vegas, NV</span>
                <span class="jobdescription">The Sr. Software Engineer is primarily responsible for translating 
                business requirements and functional specifications into logical program designs.</span>
                <div class="buttoncontainer">
                    <button class="apply">Apply</button>
                    <button class="viewmore">View More</button>
                </div>
            </div>

            <div class="jobcontainer" data-swipe="yes">
                <div class="topbackground">Application Software Engineer</div>
                <span class="companyinfo">Centene Corporation<br>Charlotte, NC</span>
                <span class="jobdescription">Design, build, test and maintain scalable and stable off the shelf 
                application or custom built technology solutions to meet business needs</span>
                <div class="buttoncontainer">
                    <button class="apply">Apply</button>
                    <button class="viewmore">View More</button>
                </div>
            </div>

            <div class="jobcontainer" data-swipe="yes">
                <div class="topbackground">Senior Software Engineer</div>
                <span class="companyinfo">Passport<br>Los Angeles, CA</span>
                <span class="jobdescription">As a Senior Software Engineer at Passport, you will be at the center 
                of our efforts to build and/or redesign scalable software solutions for our clients</span>
                <div class="buttoncontainer">
                    <button class="apply">Apply</button>
                    <button class="viewmore">View More</button>
                </div>
            </div>

            <div class="jobcontainer" data-swipe="no">
                <div class="topbackground">PHP Developer</div>
                <span class="companyinfo">Brooksource<br>St Paul, MN</span>
                <span class="jobdescription">One of our largest clients in the Twin Cities is looking for an talented 
                senior PHP Developer to join their team.</span>
                <div class="buttoncontainer">
                    <button class="apply">Apply</button>
                    <button class="viewmore">View More</button>
                </div>
            </div>

            <div class="jobcontainer" data-swipe="no">
                <div class="topbackground">Web Developer - Ruby, PHP, Magento</div>
                <span class="companyinfo">Evereve Incorporated<br>Edina, MN</span>
                <span class="jobdescription">The Web Developer implements solutions while building dynamic, data-driven 
                internet platforms across a myriad of initiatives. </span>
                <div class="buttoncontainer">
                    <button class="apply">Apply</button>
                    <button class="viewmore">View More</button>
                </div>
            </div>

            <div class="jobcontainer" data-swipe="yes">
                <div class="topbackground">React Developer</div>
                <span class="companyinfo">Aquent<br>Redmond, WA</span>
                <span class="jobdescription">A blend of experiences and expertise that demonstrate a capability for 
                delivering successful solutions that are on-premise and cloud based.</span>
                <div class="buttoncontainer">
                    <button class="apply">Apply</button>
                    <button class="viewmore">View More</button>
                </div>
            </div>

            <div class="jobcontainer" data-swipe="yes">
                <div class="topbackground">Junior Ruby Developer</div>
                <span class="companyinfo">Ombu Labs<br>Philadelphia, PA</span>
                <span class="jobdescription">Write code that is simple, easy to maintain and clear, design services 
                and solutions, pair program with Senior Developers</span>
                <div class="buttoncontainer">
                    <button class="apply">Apply</button>
                    <button class="viewmore">View More</button>
                </div>
            </div>

            <div class="jobcontainer" data-swipe="no">
                <div class="topbackground">.NET Software Engineer</div>
                <span class="companyinfo">Technology Consulting Inc.<br>Lexington, KY</span>
                <span class="jobdescription">The C Developer will be a part of small AgileScrum group of developers 
                working on 85 new development projects.</span>
                <div class="buttoncontainer">
                    <button class="apply">Apply</button>
                    <button class="viewmore">View More</button>
                </div>
            </div>

            <div class="jobcontainer" data-swipe="yes">
                <div class="topbackground">Software Engineer</div>
                <span class="companyinfo">OpenText<br>Lexington, KY</span>
                <span class="jobdescription">In this role you will have the opportunity to make significant decisions 
                and implementations that contribute to either our highly successful Customer Communication Management</span>
                <div class="buttoncontainer">
                    <button class="apply">Apply</button>
                    <button class="viewmore">View More</button>
                </div>
            </div>

*/