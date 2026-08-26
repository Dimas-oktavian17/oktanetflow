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
