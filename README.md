title: "Zeta-Core Dashboard"
subtitle: "Satyajit’s Home DevOps Lab"
logo: "assets/logo.png"
theme: "dark"
columns: 3

links:
  - name: "Documentation"
    icon: "fas fa-book"
    url: "https://docs.pi-hole.net/"
    target: "_blank"
  - name: "GitHub"
    icon: "fab fa-github"
    url: "https://github.com"
    target: "_blank"

services:
  - name: "Network"
    icon: "fas fa-network-wired"
    items:
      - name: "Pi-hole"
        subtitle: "Ad Blocking DNS"
        logo: "assets/icons/pihole.svg"
        url: "http://192.168.1.19/admin"
        target: "_blank"

  - name: "DevOps"
    icon: "fas fa-cogs"
    items:
      - name: "Portainer"
        subtitle: "Docker Management UI"
        logo: "assets/icons/docker.svg"
        url: "http://192.168.1.19:9000"
        target: "_blank"

  - name: "Dashboard"
    icon: "fas fa-home"
    items:
      - name: "Homer Dashboard"
        subtitle: "You’re here 👋"
        logo: "assets/icons/homer.svg"
        url: "http://192.168.1.19:8080"
        target: "_self"
