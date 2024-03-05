

/**
 * ADD HEADER COMMENTS WITH YOUR NAME + DATE
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
const PIXABAY_API_KEY = "42719398-4bc55b3331edef670ed465678"; // normally we would load a key through the .env file
// URL for Pixbay request
const PIXABAY_ = 'https://pixabay.com/api/?key='+PIXABAY_API_KEY+'&page=1&per_page=30';
const PIXABAY_URL = 'https://pixabay.com/api/?key=<API_KEY>';
// Constant for image count
const IMG_COUNT = 30;


/**
 * makePosts
 * Creates posts for pictures.
 */
const makePosts = (pictureData) => 
{
    //getPictures();

    if (pictureData?.length > 0) {
        // get blag div
        const blog_column = $('.blog-column');

        //loop through images
        for (let i = 0; i < pictureData?.length; i++) {
            let id = i;
            let pixabayPic = pictureData[i];
            
            // set card div with id
            let card = $('<div class="card"></div>').attr("id", "card_" + id).appendTo(blog_column);

            // set img element with url and alt and append to card div
            let cardImg = $('<img>').attr('id', "img-"+id).attr('src', pixabayPic.webformatURL).attr("alt", pixabayPic.tags).addClass('card-img-top').appendTo(card);

            // set cardBody div and append to card div
            let cardBody = $('<div class="card_body"></div>').appendTo(card);
            //set card text with P elementt and append to cardBody
            let cardP = $('<p class="card-text tags"></p>').text(pixabayPic.tags).appendTo(cardBody);
            //append to cardBody


        }
    }

    


    // make HTML elements for posts using jQuery, same number as images retrieving
        // use bootstrap cards and append to
        // i.e. https://getbootstrap.com/docs/5.2/components/card/#about
        // create card
        // card body 
        // card title
        // image
        // card text

    //$('body').append($(cardDiv));
};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = () => 
{
    // get 30 dramatic horizontal photographs per page
    const url = `${PIXABAY_URL.replace('<API_KEY>', PIXABAY_API_KEY)}&image_type=photo&orientation=horizontal&q=dramatic&per_page=${IMG_COUNT}}`;
    // use fetch to get the pictures from the API
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        if (data?.hits?.length > 0) {
            console.log(data?.hits);
            // make post when data is gotten
            makePosts(data?.hits);
        }
        
        
    })
    // handle error(s) with .catch()
    .catch((err) => {
        console.log(err);
    })
};

getPictures();

