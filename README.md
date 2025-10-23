title: "Zeta-Core Infrastructure Hub"
subtitle: "Home DevOps & Network Operations Center"
logo: "assets/logo.png"
theme: "dark"
columns: 4

# Header configuration
header: true
footer: false

# Connectivity check
connectivityCheck: true

# Quick links in header
links:
  - name: "Documentation"
    icon: "fas fa-book"
    url: "https://docs.pi-hole.net/"
    target: "_blank"
    tag: "docs"
  - name: "GitHub Repository"
    icon: "fab fa-github"
    url: "https://github.com"
    target: "_blank"
    tag: "code"
  - name: "Network Monitor"
    icon: "fas fa-chart-line"
    url: "http://192.168.1.19:3000"
    target: "_blank"
    tag: "monitoring"
  - name: "System Status"
    icon: "fas fa-heartbeat"
    url: "#"
    target: "_blank"
    tag: "status"

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
