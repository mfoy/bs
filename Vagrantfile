# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.ssh.forward_agent = true

  config.vm.box = "ubuntu-trusty"
  config.vm.hostname = "acs"
  config.vm.network :private_network, ip: "10.0.5.2"
  config.vm.network "forwarded_port", guest: 5000, host: 5000
  config.vm.synced_folder ".", "/home/vagrant/acs"

  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--memory", "2048"]
  end

  config.vm.provision "shell", path: "sh/provision/super.sh"
  config.vm.provision "shell", path: "sh/provision/vagrant.sh", privileged: false

end
