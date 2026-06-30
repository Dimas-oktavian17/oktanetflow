---
outline: deep
head:
  - - meta
    - name: description
      content: "Complete guide to initialize and configure SSD/SATA storage on Dell PowerEdge R620/R630 servers."
  - - meta
    - name: keywords
      content: "Dell R620, Dell R630, SSD, SATA, Storage, RAID, Proxmox, Linux, Oktanetflow"
  - - meta
    - name: author
      content: "Oktanetflow"
  - - meta
    - property: "og:title"
      content: "Lab 03: Initialize Storage SSD/SATA - Oktanetflow"
  - - meta
    - property: "og:description"
      content: "Complete guide to initialize and configure SSD/SATA storage on Dell PowerEdge R620/R630 servers."
  - - meta
    - property: "og:type"
      content: "article"
  - - meta
    - property: "og:image"
      content: "https://oktanetflow.vercel.app/oktanetflow.png"
  - - meta
    - name: "twitter:card"
      content: "summary_large_image"
  - - meta
    - name: "twitter:title"
      content: "Lab 03: Initialize Storage SSD/SATA - Oktanetflow"
  - - link
    - rel: canonical
      href: "https://oktanetflow.vercel.app/infra/server/labs/dell-r620-r630/lab-03-initialize-storage-ssd-sata"
---

# Lab 03: Change Network and Nameserver

## 1. Prerequisites

* Root access or a user with sudo privileges.
* An active network interface (e.g., `ens160`, `eth0`, or `enp0s3`).

## 2. Configuration Network and Nameserver

### 2.1 Identify Network Interfaces

Check the available interface names:

```bash
ip link show
# or
ip addr show
```
### 2.2 Configure Network Interfaces

```bash
nano /etc/network/interfaces

auto lo
iface lo inet loopback

iface eno1 inet manual  # Adjust the interface port based on used interface

auto vmbr0
iface vmbr0 inet static
        address 172.20.0.210/24
        gateway 172.20.0.1  # Gateway IP address
        bridge-ports eno1
        bridge-stp off
        bridge-fd 0


```

### 2.3 Configure Nameserver

```bash
nano /etc/resolv.conf

search local
nameserver 8.8.8.8
nameserver 8.8.4.4
```

## 3. Verification and Testing

**Key Command:**

- **Network && Nameserver Verification:** `cat /etc/resolv.conf && cat /etc/network/interfaces`
