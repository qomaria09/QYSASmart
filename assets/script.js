function ShowQuiz(){
    function ShowQuiz(){
    const content = document.getElementById('soal')
    document.body.style.backgroundColor='rgba(59, 57, 57, 0.829)';
    content.innerHTML = `
    <div class="box-quest">
    <div class="image-box">
        <img src="public/images/d3d93ec3-4a94-4dd0-8c09-af6af04ce204.jpeg" alt="">
    </div>
   <div class="question-start">
    <h3>Judul</h3>
    <div class="flex">
        <div class="profile-user">
            <img src="public/images/unnamed.jpeg" alt="">
            MyName                 
        </div>
            Level : 1
    </div>
        <hr>
        <div class="keterangan-soal">
            Difficulty Level : Medium 
            Sample Questions:
            <div class="example-question">
                <ol>
                    <li>
                        At the beginning of the story, why does Scaredy Squirrel stay in his tree?
                    </li>
                    <li>
                        The author says that Scaredy Squirrel’s tree is familiar to him. What does the word familiar mean?
                    </li>
                    <li>
                        How does Scaredy Squirrel feel when he discovers he is a flying squirrel?
                    </li>
                </ol>
            </div>
            <div class="btn-start">
                <button>START</button>
            </div>
        </div>
    </div>
   </div>
</div>
    `
}
}
