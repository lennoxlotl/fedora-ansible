# fedora-ansible

This is my personal ansible playbook which installs all necessary packages and dotfiles onto an existing Fedora 40 GNOME installation.<br>
Keep in mind this is configured to fit my specific system, especially the hyprland configs will break on your system (monitor layout, keyboard layout, etc.) so if you use this, please change things as you need.

## How to use
1. Clone the repository
2. Go into the directory
3. Run the `install.sh` file
    - This file will install all important dependencies first
    - It will ask you for your password 3x before installing
    - Do NOT run this file as `sudo` or `root`

## License
This project is licensed under WTFPL