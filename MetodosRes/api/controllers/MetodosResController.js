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
    }
};
