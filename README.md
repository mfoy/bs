# BS v0.0.1

### Setup

Install required tools on the host:

* [VirtualBox](https://www.virtualbox.org/)
* [vagrant](https://www.vagrantup.com/)
* [Fabric](http://www.fabfile.org/)

Add the vagrant box and create the VM and virtualenv.

```bash
vagrant box add ubuntu-trusty https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box
vagrant up
fab setup_virtualenv
```

### Run

Start the flask server:

```bash
fab flask
```

Open Chrome with security disabled (required for cross-domain access of iframe contents), e.g. on OSX:

```bash
open /Applications/Google\ Chrome.app --args --disable-web-security
```

Navigate to `http://10.0.5.2:5000`


### Tools

* [Backbone](http://backbonejs.org/)
* [Bootstrap](http://getbootstrap.com/)
* [Fabric](http://www.fabfile.org/)
* [Flask](http://flask.pocoo.org/)
* [Flask-RESTful](http://flask-restful.readthedocs.org/en/latest/)
* [Git](http://git-scm.com/)
* [Markdown Editor](http://jbt.github.io/markdown-editor/)
* [nginx](http://nginx.org/)
* [RequireJS](http://requirejs.org/)
* [vagrant](https://www.vagrantup.com/)
* [VirtualBox](https://www.virtualbox.org/)
