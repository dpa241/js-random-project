// select all element with the "i" tag and store them in NodeList called "stars"
const stars = document.querySelectorAll(".stars i")

// loop through the star NodeList
stars.forEach((star,index1) => {
    // Add a event listner that runs a function when the 'click' event is triggered
    star.addEventListener('click',()=>{
        // loop through the stars NodeList again
        stars.forEach((star,index2)=>{
            // add the "active" class to the click star and star with lower index 
            // remove the "active" class to the click star and star with higher index 
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
        })
    })
})
