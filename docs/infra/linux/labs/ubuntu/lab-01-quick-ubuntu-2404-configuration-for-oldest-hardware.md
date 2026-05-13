---
outline: deep
head:
  - - meta
    - name: description
      content: "Panduan lengkap installasi Ubuntu Server Cloud di Proxmox. Pelajari bagaimana menginstall Ubuntu Server di Proxmox."
  - - meta
    - name: keywords
      content: "Ubuntu Server, Installasi Ubuntu Server, Proxmox, Jaringan Komputer, Mikrotik Lab Indonesia, Oktanetflow"
  - - meta
    - name: author
      content: "Oktanetflow"
  # Open Graph (Facebook, LinkedIn, Discord)
  - - meta
    - property: "og:title"
      content: "Installasi Mikrotik RouterOS CHR di Proxmox - Oktanetflow"
  - - meta
    - property: "og:description"
      content: "Bagaimana membuat bootable USB OS installer menggunakan rufus."
  - - meta
    - property: "og:type"
      content: "article"
  - - meta
    - property: "og:image"
      content: "https://oktanetflow.vercel.app/ecosystem/mikrotik/labs/capstone/MIKROTIK_DASAR_TOPOLOGY.png" # Ganti dengan URL absolut gambar topologi
  # Twitter Card
  - - meta
    - name: "twitter:card"
      content: "summary_large_image"
  - - meta
    - name: "twitter:title"
      content: "Lab 01: Mikrotik Dasar Capstone - Oktanetflow"
  - - link
    - rel: canonical
      href: "https://oktanetflow.vercel.app/tools/bootable-usb-os-installer"
---

# Lab 01: Quick Ubuntu 24.04 Configuration for Oldest Hardware

## 1. Quick Setup for Ubuntu 24.04

#### Step 1.1: Quick Setup Ubuntu Desktop for Oldest Hardware 

open terminal and run the following command:
```bash
sudo nano /etc/default/grub
Find the line GRUB_CMDLINE_LINUX_DEFAULT and change it to:
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash intel_idle.max_cstate=1"
sudo update-grub
reboot

# Step 1.2: Disable Wayland for GDM3
sudo nano /etc/gdm3/custom.conf
WaylandEnable=false
sudo systemctl restart gdm3
```