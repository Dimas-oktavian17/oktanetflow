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
