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

# Lab 03: Initialize Storage SSD/SATA

## 1. Prerequisites

- Dell PowerEdge R620 or R630 server
- Physical or iDRAC access to the server
- SSD and/or SATA drives installed in drive bays
- Proxmox or Debian installed (see Lab 01 and Lab 02)

## 2. Configuration Virtual Disks 

### Step 2.1: System Setup

```bash
CTRL+ ALT + DEL
F2
System Setup
```

### Step 2.2: Access Raid Configuration

```bash
Devices Settings
Dell PERC <PERC H730 Mini> Configuration Utility 
Go to the "Main Menu" tab
```

### Step 2.3: Create Virtual Disks

```bash
Configuration Management > Create Virtual Disks
Select Raid 0
Select "Physical Disks"
```

### Step 2.4: Choose Physical Disks

```bash
Choose Physical Disks > Checklist and Apply Changes
```

### Step 2.5: Format Hardware 

```bash
Create Virtual Disks > Confirmation > Format Hardware
```

## 6. Verification

- **Check 1:** Main Menu > Virtual Disk Management
- **Check 2:** Ensure virtual disks are listed Ready or Optimal 
- **Check 3:** Bios (finish / exit) and save changes