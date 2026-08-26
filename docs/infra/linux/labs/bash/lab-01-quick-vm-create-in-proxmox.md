---
outline: deep
head:
  - - meta
    - name: description
      content: "Panduan lengkap Automatisasi VM di Proxmox. Pelajari bagaimana membuat VM otomatisasi di Proxmox."
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

# Lab 01: Quick VM Create in Proxmox

## 1. Quick VM Create in Proxmox

#### Step 1.1: Quick Automated VM Template Creation

open terminal and run the following command:

```bash
touch vm_template_id.sh
chmod +x vm_template_id.sh

#!/bin/bash

# Create OS Template
create_os() {
    local vm_id=$1
    local image=$2

    # Ubuntu example (VMID ${vm_id})
    qm create ${vm_id} --name ubuntu-2204-template --memory 2048 --cores 2 --net0 virtio,bridge=vmbr0

    # Import disk
    qm importdisk ${vm_id} ${image} local-lvm

    # Attach disk
    qm set ${vm_id} --scsihw virtio-scsi-pci --scsi0 local-lvm:vm-${vm_id}-disk-0

    # Add cloud-init drive
    qm set ${vm_id} --ide2 local-lvm:cloudinit

    # Boot from disk
    qm set ${vm_id} --boot c --bootdisk scsi0

    # Serial console (required for cloud-init)
    qm set ${vm_id} --serial0 socket --vga serial0

    # Convert to template
    qm template ${vm_id}
}

# Prompt user for inputs
echo "Enter VM ID:"
read vm_id
echo "Enter Image path (e.g., /var/lib/vz/template/iso/ubuntu.img):"
read image

main() {
    local id=$1
    local img=$2

    create_os "$id" "$img"
}

# Execute main function with inputs
main "$vm_id" "$image"
```

#### Step 1.2: Quick Automated VM Template Injection

open terminal and run the following command:

```bash
touch inject_template.sh
chmod +x inject_template.sh

#!/bin/bash

# Create OS Template
create_os() {
    local vm_template_id=$1
    local vm_id=$2
    local vm_name=$3
    local ip_address=$4
    local ip_gw=$5
    # Clonte TEMPLATE -> new VM
    qm clone ${vm_template_id} ${vm_id} --name ${vm_name} --full
    # Set Cloud Init Config
    qm set ${vm_id} --ciuser root --cipassword kangenmantan
    qm set ${vm_id} --ipconfig0 ip=${ip_address},gw=${ip_gw}
}

# Prompt user for inputs
echo "Enter VM-TEMPALTE ID:"
read vm_template_id
echo "Enter VM-ID:"
read vm_id
echo "Enter VM NAME"
read vm_name
echo "Enter IP ADDRES"
read ip_address
echo "Enter IP GW"
read ip_address

main() {
    local vm_template_id=$1
    local vm_id=$2
    local vm_name=$3
    local ip_address=$4
    local ip_gw=$4

    create_os "$vm_template_id" "$vm_id" "$vm_name" "$ip_address" "$ip_gw"
}

# Execute main function with inputs
main "$vm_template_id" "$vm_id" "$vm_name" "$ip_address" "$ip_gw"
```

- **Downloads:**
  <ButtonVue variant="secondary" as="a" class="no-underline!" href="./vm-init.zip" download>
  vm-init.zip
  </ButtonVue>
