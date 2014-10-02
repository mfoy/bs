#!/bin/bash

echo 'super provisioning...'

#apt-get update
#apt-get upgrade

apt-get -y install build-essential
apt-get -y install git
apt-get -y install htop
apt-get -y install iotop
apt-get -y install nethogs
apt-get -y install ntp
apt-get -y install python-dev

# nginx
add-apt-repository ppa:nginx/stable
apt-get update
apt-get -y upgrade
apt-get -y install nginx
/etc/init.d/nginx stop
rm /etc/nginx/nginx.conf
ln -s /home/vagrant/acs/nginx/nginx.conf /etc/nginx/
/etc/init.d/nginx start

# uwsgi
apt-get install libpcre3 libpcre3-dev
mkdir -p /var/log/uwsgi
chown -R vagrant /var/log/uwsgi

# install pip, wheel
cd /tmp/
wget -N https://bootstrap.pypa.io/get-pip.py
python get-pip.py
pip install --upgrade pip

# install wheel
pip install wheel
mkdir -p /usr/local/wheels

# install virtualenv tools
pip wheel --wheel-dir=/usr/local/wheels virtualenv
pip wheel --wheel-dir=/usr/local/wheels virtualenvwrapper

pip install --use-wheel --no-index --find-links=/usr/local/wheels virtualenv
pip install --use-wheel --no-index --find-links=/usr/local/wheels virtualenvwrapper

chown -R vagrant /usr/local/wheels

echo "export WORKON_HOME=~/acs/.virtualenvs" > /home/vagrant/.bash_profile
echo ". /usr/local/bin/virtualenvwrapper.sh" >> /home/vagrant/.bash_profile