(()=>{
    chrome.runtime.onMessage.addListener((obj, sender, response)=>{
        const {type} = obj
        if(type==="UPDATE"){
            filter_reviews()
        }
    })
    
    const filter_reviews = () => {
        document.body.style.border = "20px solid red"
        document.querySelectorAll("div[data-component-type='s-search-result']").forEach(
            item => {
                var reviews_block = item.querySelector("div[data-cy='reviews-block']")
                if (reviews_block != null) {
                    span_ratings = reviews_block.querySelector("span[aria-label$='ratings']")
                    if (span_ratings != null) {
                        number_of_rating = parseInt(span_ratings.children[0].children[0].innerHTML)
                        if (number_of_rating < 100) {
                            item.style.display = "none"
                        } else {
                            item.style.backgroundColor = "pink"
                        }
                    }
                } else {
                    // item.style.display="none"
                    item.style.backgroundColor = "yellow"
                }
            }
        )
    }

    filter_reviews()
})();