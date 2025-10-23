title: "Zeta-Core Infrastructure Hub"
subtitle: "Home DevOps & Network Operations Center"
logo: "assets/logo.png"
theme: "dark"
columns: 4

# Enhanced professional features
header: true
footer: '<p>Zeta-Core Infrastructure Hub - <i class="fas fa-heart"></i> Built with Homer</p>'

# Custom CSS for professional styling
stylesheet:
  - "assets/custom.css"

# Search functionality
search:
  enabled: true
  placeholder: "Search services and tools..."

# Connectivity check
connectivityCheck: true

# Professional color scheme
colors:
  dark:
    primary: "#3b82f6"
    secondary: "#64748b"
    accent: "#10b981"
    warning: "#f59e0b"
    error: "#ef4444"

# Optional: Add custom favicon
favicon: "assets/favicon.ico"

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

      - name: "GitLab CE"
        subtitle: "Git Repository & CI/CD"
        logo: "assets/icons/gitlab.svg"
        url: "http://192.168.1.19:8081"
        target: "_blank"
        tag: "git"

      - name: "Jenkins"
        subtitle: "Continuous Integration"
        logo: "assets/icons/jenkins.svg"
        url: "http://192.168.1.19:8082"
        target: "_blank"
        tag: "cicd"

  - name: "Monitoring"
    icon: "fas fa-chart-line"
    items:
      - name: "Grafana"
        subtitle: "System Metrics Dashboard"
        logo: "assets/icons/grafana.svg"
        url: "http://192.168.1.19:3000"
        target: "_blank"
        tag: "monitoring"

      - name: "Prometheus"
        subtitle: "Metrics Collection"
        logo: "assets/icons/prometheus.svg"
        url: "http://192.168.1.19:9090"
        target: "_blank"
        tag: "metrics"

      - name: "Uptime Kuma"
        subtitle: "Service Health Monitor"
        logo: "assets/icons/uptimekuma.png"
        url: "http://192.168.1.19:3001"
        target: "_blank"
        tag: "uptime"

  - name: "Storage"
    icon: "fas fa-database"
    items:
      - name: "MinIO Console"
        subtitle: "Object Storage Manager"
        logo: "assets/icons/minio.svg"
        url: "http://192.168.1.19:9001"
        target: "_blank"
        tag: "storage"

      - name: "Nextcloud"
        subtitle: "Private Cloud Storage"
        logo: "assets/icons/nextcloud.svg"
        url: "http://192.168.1.19:8083"
        target: "_blank"
        tag: "cloud"

      - name: "Duplicati"
        subtitle: "Backup Solution"
        logo: "assets/icons/duplicati.png"
        url: "http://192.168.1.19:8200"
        target: "_blank"
        tag: "backup"

  - name: "Security"
    icon: "fas fa-shield-alt"
    items:
      - name: "Bitwarden"
        subtitle: "Password Manager"
        logo: "assets/icons/bitwarden.svg"
        url: "http://192.168.1.19:8085"
        target: "_blank"
        tag: "passwords"

      - name: "Keycloak"
        subtitle: "Identity Management"
        logo: "assets/icons/keycloak.svg"
        url: "http://192.168.1.19:8084"
        target: "_blank"
        tag: "auth"

      - name: "Fail2Ban Monitor"
        subtitle: "Intrusion Prevention"
        logo: "assets/icons/fail2ban.png"
        url: "http://192.168.1.19:8086"
        target: "_blank"
        tag: "security"

  - name: "Dashboard"
    icon: "fas fa-home"
    items:
      - name: "Homer Dashboard"
        subtitle: "Central Navigation Hub"
        logo: "assets/icons/homer.svg"
        url: "http://192.168.1.19:8080"
        target: "_self"
        tag: "dashboard"

      - name: "System Monitor"
        subtitle: "Real-time System Status"
        logo: "assets/icons/system.png"
        url: "http://192.168.1.19:61208"
        target: "_blank"
        tag: "system"

      - name: "Network Topology"
        subtitle: "Infrastructure Map"
        logo: "assets/icons/network.png"
        url: "http://192.168.1.19:8088"
        target: "_blank"
        tag: "topology"
