---
outline: deep
head:
  - - meta
    - name: description
      content: "Lab 01: Panduan cepat setup OpenVPN Client dan mounting storage CIFS/Samba di Ubuntu 24.04 untuk kebutuhan backup jaringan."
  - - meta
    - name: keywords
      content: "OpenVPN, Ubuntu 24.04, CIFS Utils, Samba Share, Mounting Network Drive, Networking Lab, Oktanetflow"
  - - meta
    - name: author
      content: "Oktanetflow"
  
  # Open Graph (Facebook, LinkedIn, Discord)
  - - meta
    - property: "og:title"
      content: "Lab 01: Quick Setup OpenVPN & CIFS Mounting - Oktanetflow"
  - - meta
    - property: "og:description"
      content: "Pelajari cara install OpenVPN client, konfigurasi kredensial fstab, dan mounting direktori share secara otomatis di Linux."
  - - meta
    - property: "og:type"
      content: "article"
  - - meta
    - property: "og:image"
      content: "https://oktanetflow.vercel.app/ecosystem/mikrotik/labs/capstone/MIKROTIK_DASAR_TOPOLOGY.png"
  
  # Twitter Card
  - - meta
    - name: "twitter:card"
      content: "summary_large_image"
  - - meta
    - name: "twitter:title"
      content: "Lab 01: Quick Setup OpenVPN Client - Oktanetflow"
  
  - - link
    - rel: canonical
      href: "https://oktanetflow.vercel.app/infra/software/labs/open-vpn/lab-01-quick-setup-open-vpn"
---

# Lab 01: Quick setup Open VPN

## 1. Prerequisites and Installation

### Step 1: Prerequisites

- Ensure you already have [Samba/CIFS (Windows Share)](https://aws.amazon.com/id/compare/the-difference-between-nfs-smb/).


### Step 2: Installation

- Visit [Open VPN Documentation](https://openvpn.net/community-docs/openvpn-client-for-linux.html)
```bash
Device Ubuntu 24.04 
sudo apt update
sudo apt install openvpn -y 
sudo apt install cifs-utils -y # CIFS Support
sudo mkdir -p /media/nfs_backup # folder 
```

#### Step 2.1: Configuration Credentials

```bash
sudo nano /etc/v-credentials

username=<your-username>
password=<your-password>

sudo chmod 600 /etc/v-credentials # Only root acces

sudo nano /etc/fstab

//<cifs-ip>/privshare  /media/nfs_backup  cifs  credentials=/etc/v-credentials,iocharset=utf8,uid=1000,gid=1000,file_mode=0777,dir_mode=0777,_netdev  0  0 # <server-ip> - <root-acces> - <write-read-allow> - <network-waiting>
```

#### Step 2.2: Mounting with Open VPN Client Setup

```bash
sudo mount -a

cp "/media/nfs_backup/<your-folder>/<your-folder>/file.ovpn" /etc/openvpn/client/

Enter Crendentials
```

## 3. Verification 

- **Check 1:** Are file path has been setup properly?
- **Check 2:** Is the installation successful?