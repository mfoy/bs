from fabric.api import env, task, run


env.hosts = ['vagrant@127.0.0.1:2222']
env.key_filename = '~/.vagrant.d/insecure_private_key'


@task
def setup_virtualenv():
    # clean up existing virtualenvs
    run('mkdir -p acs/.virtualenvs')
    run('rm -fr acs/.virtualenvs/*')

    # make the new virtualenv
    run('mkvirtualenv acs')
    run('echo "cd /home/vagrant/acs/" > /home/vagrant/acs/.virtualenvs/acs/bin/postactivate')

    # build wheels and install requirements
    run('pip wheel --wheel-dir=/usr/local/wheels -r ~/acs/requirements.txt')
    run('workon acs && pip install --no-index --find-links=/usr/local/wheels -r ~/acs/requirements.txt')


@task
def flask():
    run('workon acs && python WSGI.py')