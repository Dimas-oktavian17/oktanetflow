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

# Lab 01: Quick setup microsoft office

## 1. Prerequisites and Installation

### Step 1: Prerequisites

- Ensure you already have [Office Deployment Tool](https://www.microsoft.com/en-us/download/details.aspx?id=49117#page-top) installed.
- Ensure you already have folder `C:\install office`.


### Step 2: Installation

- Visit [Office Customization Tool](https://config.office.com/deploymentsettings)
```bash
Architeture: x64bit
office suite: Office LTSC Professional Plus 2021
Apps: toggle OFF any programs you don't need
Primary Language: English United States
Export: Office Open XML Format
```

:::info
NOTE: make sure configuration.xml and the Deployment Tool .exe) into `C:\install office` 
:::

#### Step 2.1: Running Installer

```bash
cd C:\Install Office
setup /download configuration.xml
setup /configure configuration.xml
```

## 4. Verification 

- **Check 1:** Are configuration.xml and the Deployment Tool .exe) in `C:\install office`?
- **Check 2:** Is the installation successful?