//initialize github 
const github = new Github;
//init UI
const ui = new UI;
//search input and add event listner

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        //make http call
        github.getUser(userText)
        .then(data => {
                if(data.profile.message === 'Not Found'){
                    ui.showAlert('User not found','alert alert-danger');
                }else{
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepo(data.repos);
                }
            })
    } else{
      ui.clearProfile();
    }
});