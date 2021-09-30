exports.getLogin = (req, res, next) => {
    console.log(req.get('Cookie').split(';')[1]);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login to Express Autos',
        isAuthenticated: req.isLoggedIn
    })
}

exports.postLogin = (req, res, next) => {

    res.setHeader('Set-Cookie', 'loggedIn = true');
    console.log("Here we are : root");
    res.redirect('/');

}