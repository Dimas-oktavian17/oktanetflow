---
outline: deep
head:
  - - meta
    - name: description
      content: "Practical guide to changing the root password on Ubuntu. Learn how to safely change and reset the root password."
  - - meta
    - name: keywords
      content: "Ubuntu, Root Password, Linux, Sudo, Password Reset, Oktanetflow"
  - - meta
    - name: author
      content: "Oktanetflow"
  - - meta
    - property: "og:title"
      content: "Lab 02: Change Root Password - Oktanetflow"
  - - meta
    - property: "og:description"
      content: "Practical guide to safely changing the root password on Ubuntu."
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
      content: "Lab 02: Change Root Password - Oktanetflow"
  - - link
    - rel: canonical
      href: "https://oktanetflow.vercel.app/infra/linux/labs/ubuntu/lab-02-change-root-password"
---

# Lab 02: Change Root Password

## 1. Prerequisite

- Ensure you already have a .deb-based Linux distribution (e.g., Ubuntu, Debian).

## 2. Configuration

### 2.1 GRUB Configuration

```bash
CTRL + ALT + DEL

GRUB Boot Menu > Select "Advanced options for Ubuntu"

Press e
```

### 2.2 Boot Configuration

```bash
/vmlinuz... root=/dev/sda2 ro quiet init=/bin/bash # add init=/bin/bash
```

### 2.3 Mount File System with Write Access

```bash
mount -o remount,rw /
passwd root

sync
CTRL + ALT + DEL
```

## 3. Verification and Testing

### 3.1 Verify New Password

Login as root to ensure the password was successfully changed:

```bash
su -
```

Enter the new password. If successful, the prompt will change to `root@hostname`.

### 3.2 Check Root User Status

```bash
sudo passwd -S root
```

Output will show the root password status:

```
root P 01/01/2026 0 99999 7 -1
```

Status legend:
- `P` = Password active
- `L` = Password locked
- `NP` = No password set
