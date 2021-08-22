const contentRange = (req , res ,next)=> {
    res.setHeader('Content-Range', 'apps 0-10/100');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    res.setHeader('X-Total-Count', '100');
    res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
    // res.setHeader("Content-Security-Policy", "default-src 'self'");
    res.setHeader('Content-Security-Policy', 'img-src' , 'self');
    next()
}

module.exports = {contentRange}
