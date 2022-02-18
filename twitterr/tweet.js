function count(event){
    const tweet=event.target.value
    updateCount(tweet)
}


function updateCount(tweet){
document.querySelector('.counter').innerText=`${tweet.length}/20`
window.localStorage.setItem("tweet",tweet)

}


const storedTwt=window.localStorage.getItem("tweet")

const updttwt=document.querySelector('.tweet').innerText=storedTwt;
updateCount(updttwt)