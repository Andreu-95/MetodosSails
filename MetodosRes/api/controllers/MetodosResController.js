/**
 * Created by poli_ on 26/6/2017.
 */
module.exports = {
    attachmentTest: function (req, res) {
        res.attachment('test.txt');
        return res.ok('Attachment Example');
    },
    badRequestTest: function (req, res) {
        return res.badRequest('Bad Request Example');
    },
    clearCookieTest: function (req, res) {
        res.clearCookie('nombre');
        return res.ok();
    },
    cookieTest: function (req, res) {
        res.cookie('nombre', 'andres', { maxAge: 500000, httpOnly: true });
        return res.ok();
    },
    createdTest: function (req, res) {
        return res.created('Created Example');
    },
    forbiddenTest: function (req, res) {
        return res.forbidden('Forbidden Example');
    },
    getTest: function (req, res) {
        res.set('Header-Test', 'Example');
        return res.ok(res.get('Header-Test'));
    },
    jsonTest: function (req, res) {
        return res.json({ user: 'andres' });
    },
    jsonPTest: function (req, res) {
        return res.jsonp({ user: 'david' });
    },
    locationTest: function (req, res) {
        res.location('http://sailsjs.com/');
        return res.ok();
    },
    negotiateTest: function (req, res) {
        Unknown.create({ name: 'fail' }).exec(function (err, fail) {
            if (err)
                return res.negotiate(err);
            return res.ok(fail);
        });
    },
    notFoundTest: function (req, res) {
        Unknown.findOne({ name: 'not' }).exec(function (err, not) {
            if (err)
                return res.negotiate(err);
            if (!not)
                return res.notFound('Not Found Example');
            return res.ok();
        });
    },
    okTest: function (req, res) {
        return res.ok('OK Example');
    },
    redirectTest: function (req, res) {
        return res.redirect('http://sailsjs.com/');
    },
    sendTest: function (req, res) {
        return res.send(303, [1, 2, 3, 4, 5]);
    },
    serverErrorTest: function (req, res) {
        return res.serverError('Server Error Example');
    },
    setTest: function (req, res) {
        res.set('Set-Header', 'Set Example');
        return res.ok();
    },
    statusTest: function (req, res) {
        res.status(308);
        return res.send('Status Example');
    },
    typeTest: function (req, res) {
        res.type('rtf');
        return res.ok();
    },
    viewTest: function (req, res) {
        return res.view('test');
    },
    status: function (req, res) {
        res.status(505);
        return res.send("This page will always go to 505");
    },
    set: function (req, res) {
        res.set('holi', 'boli');
        res.set('xq', 'tan soli');
        res.set('aqui', 'en la poli');
        return res.send();
    },
    get: function (req, res) {
        res.get('Connection');
        return res.send();
    },
    cookie: function (req, res) {
        res.cookie('cookie', 'woof');
        res.cookie('cookie1', 'arf');
        return res.send();
    },
    clearCookie: function (req, res) {
        res.clearCookie('cookie');
        res.clearCookie('cookie1');
        return res.send();
    },
    redirect: function (req, res) {
        res.redirect('www.google.com');
        return res.send();
    },
    location: function (req, res) {
        res.location('foo/bar');
        return res.send();
    },
    bodyTest: function (req, res) {
        console.log(req.body);
    },
    ipTest: function (req, res) {
        console.log(req.ip);
    },
    pathTest: function (req, res) {
        console.log(req.path);
    },
    paramsTest: function (req, res) {
        console.log(req.params);
    },
    hostTest: function (req, res) {
        console.log(req.host);
    },
    headersTest: function (req, res) {
        console.log(req.headers);
    },
    metodoTest: function (req, res) {
        console.log(req.method);
    },
    protocolTest: function (req) {
        switch (req.protocol) {
            case 'http':
                // this is an HTTP request
                console.log('this is HTTP');
                break;
            case 'https':
                // this is a secure HTTPS request
                console.log('this is HTTPS');
                break;
        }
    },
    urlTest: function (req, res) {
        console.log(req.url);
    },
    isTest: function (req, res) {
        console.log(req.is('html'));
    },
    acceptsTest: function (req) {
        req.accepts('json');
    },
    ownload: function (req, res) {
        res.download('./assets/images/logo.jpg');
        return res.ok('ok');
    },
    links: function (req, res) {
        res.links('');
        return res.ok('ok');
    },
    locals: function (req, res) {
        res.locals({
            siteTitle: "Sails"
        });
        return res.ok('ok');
    },
    render: function (req, res) {
        return res.render('./homepage');
    },
    view: function (req, res) {
        return res.view('./homepage');
    },
};
