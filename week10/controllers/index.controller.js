function homeView(req, res) {
    res.render('.pages/home', {
        title: "Title",
        message: "message",
        homePageParagraph: "paragraph"
    });
}


module.exports = {
    homeView
}