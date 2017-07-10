/**
 * Created by poli_ on 26/6/2017.
 */

declare let module;
declare let sails;
declare let Unknown;

module.exports = {
  attachmentTest: (req, res) => {
    res.attachment('test.txt');
    return res.ok('Attachment Example');
  },

  badRequestTest: (req, res) => {
    return res.badRequest('Bad Request Example');
  },

  clearCookieTest: (req, res) => {
    res.clearCookie('nombre');
    return res.ok();
  },

  cookieTest: (req, res) => {
    res.cookie('nombre', 'andres', { maxAge: 500000, httpOnly: true });
    return res.ok();
  },

  createdTest: (req, res) => {
    return res.created('Created Example');
  },

  forbiddenTest: (req, res) => {
    return res.forbidden('Forbidden Example');
  },

  getTest: (req, res) => {
    res.set('Header-Test', 'Example');
    return res.ok(res.get('Header-Test'));
  },

  jsonTest: (req, res) => {
    return res.json({ user: 'andres' });
  },

  jsonPTest: (req, res) => {
    return res.jsonp({ user: 'david' });
  },

  locationTest: (req, res) => {
    res.location('http://sailsjs.com/');
    return res.ok();
  },

  negotiateTest: (req, res) => {
    Unknown.create({ name: 'fail' }).exec((err, fail) => {
      if (err) return res.negotiate(err);
      return res.ok(fail);
    });
  },

  notFoundTest: (req, res) => {
    Unknown.findOne({ name: 'not' }).exec((err, not) => {
      if (err) return res.negotiate(err);
      if (!not) return res.notFound('Not Found Example');
      return res.ok();
    })
  },

  okTest: (req, res) => {
    return res.ok('OK Example');
  },

  redirectTest: (req, res) => {
    return res.redirect('http://sailsjs.com/');
  },

  sendTest: (req, res) => {
    return res.send(303, [1,2,3,4,5]);
  },

  serverErrorTest: (req, res) => {
    return res.serverError('Server Error Example');
  },

  setTest: (req, res) => {
    res.set('Set-Header', 'Set Example');
    return res.ok();
  },

  statusTest: (req, res) => {
    res.status(308);
    return res.send('Status Example');
  },

  typeTest: (req, res) => {
    res.type('rtf');
    return res.ok();
  },

  viewTest: (req, res) => {
    return res.view('test');
  },
  status:(req, res) => {
    res.status(505);
    return res.send("This page will always go to 505");
  },
  set: (req, res) => {
    res.set('holi', 'boli');
    res.set('xq', 'tan soli');
    res.set('aqui', 'en la poli');
    return res.send();
  },
  get: (req, res) => {
    res.get('Connection');
    return res.send();
  },
  cookie: (req, res) => {
    res.cookie('cookie','woof');
    res.cookie('cookie1','arf');
    return res.send();
  },
  clearCookie: (req, res) => {
    res.clearCookie('cookie');
    res.clearCookie('cookie1');
    return res.send();
  },
  redirect: (req, res) => {
    res.redirect('www.google.com');
    return res.send();
  },
  location: (req, res) => {
    res.location('foo/bar');
    return res.send();
  },
  bodyTest: (req, res) => {
    console.log(req.body)
  },
  ipTest: (req, res) => {
    console.log(req.ip)
  },
  pathTest: (req, res) => {
    console.log(req.path)
  },
  paramsTest: (req, res) => {
    console.log(req.params)
  },
  hostTest: (req, res) => {
    console.log(req.host)
  },
  headersTest: (req, res) => {
    console.log(req.headers)
  },
  protocolTest: (req, res) => {
    console.log(req.protocol)
  }

};
