sudo dnf install -y ansible
ansible-galaxy collection install -r collections.yml
ansible-playbook playbook.yml --ask-become-pass