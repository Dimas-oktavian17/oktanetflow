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

# Installation Ubuntu Server Cloud on Proxmox

## 1. Prerequisites and Installation

### Step 1: Prerequisites

- Ensure you already have [Proxmox](https://www.proxmox.com/en/) installed and running on your server..

### Step 2: Installation

- Copy Link Qcow2 disk image [Ubuntu Server](https://cloud-images.ubuntu.com/noble/current/)

#### Step 2.1: Installation on Proxmox

```bash
root@pve01:~# cd /dev/pve
root@pve01:/dev/pve# wget https://cloud-images.ubuntu.com/noble/current/noble-server-cloudimg-amd64.img
root@pve01:/dev/pve# qm importdisk <vmid> <image name> <storage>
```

::: info
Note: In proxmox, create the VM without disc image.
:::

## 3. Configuration VM on Proxmox

### Step 3.1: Disc image Asignment
```bash
VM>Hardware>Disks>Unused Disk>Assig to VM(local-vmid-disk-id)
```

### Step 3.2 Boot Order
```bash
VM>Options>Boot-order>Order>1>local-vmid-disk-id
```

::: tip
Note: Make sure the order is the same as the order in step 3.2, and uncheck the bootable checkbox except the first boot order.
:::

### Step 3.2 Boot Order
```bash
VM>Options>Boot-order>Order>1>local-vmid-disk-id
```

::: tip
Note: Make sure the order is the same as the order in step 3.2, and uncheck the bootable checkbox except the first boot order.
:::

### Step 3.3 Hardware Configuration
```bash
VM>Hardware>Processors>x86-64-v2
VM>Hardware>Add>Serial Port
```

### Step 3.4 Cloud Init Configuration
```bash
VM>Cloud Init>Add>password
VM>Cloud Init>IP-config>assign static ip address
```

::: info
Note: Just ping random ip address range base on your network to know your ip address is available for ubuntu server.
:::

## 4. Verification 

- **Check 1:** Are VMs can start?
- **Check 2:** Are Ubuntu Server able to connect via SSH?