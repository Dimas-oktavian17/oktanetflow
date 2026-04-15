---
outline: deep
head:
  - - meta
    - name: description
      content: "Panduan lengkap installasi SSH di Linux.Pelajari bagaimana menginstall SSH di Linux."
  - - meta
    - name: keywords
      content: "SSH, Installasi SSH, Linux, Jaringan Komputer, Mikrotik Lab Indonesia, Oktanetflow"
  - - meta
    - name: author
      content: "Oktanetflow"
  # Open Graph (Facebook, LinkedIn, Discord)
  - - meta
    - property: "og:title"
      content: "SSH Setup - Oktanetflow"
  - - meta
    - property: "og:description"
      content: "Tutorial praktis konfigurasi SSH di Linux untuk pemula."
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

# SSH Setup

## 1. Installation

#### Step 1.1: Installation 

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
# Ensure the folder exists
mkdir -p ~/.ssh

# Open the file for editing (easiest way to paste)
nano ~/.ssh/authorized_keys

chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys

systemctl restart ssh
```

::: info
```bash
/etc/ssh/sshd_config.d/*.conf
sudo nano /etc/ssh/sshd_config
```
Note: disable password authentication
:::