---
outline: deep
---

# Static Routing <Badge type="tip" text="beta" />

## Static Routing

### 1. Konsep & Analogi
::: info Definisi Singkat
Static routing adalah metode konfigurasi rute jaringan di mana administrator mengisi tabel routing secara manual. Router tidak akan mencari jalan sendiri; ia hanya akan mengirim data ke tujuan melalui jalur tetap yang sudah ditentukan sebelumnya oleh manusia.
:::

* **Analogi:** Bayangkan Anda adalah seorang kurir di sebuah perumahan baru yang belum ada di Google Maps. Seperti Anda diberi secarik kertas instruksi: "Pokoknya kalau mau ke Blok A, kamu harus lewat Jalan Melati. Titik".
* **Karakteristik Utama:**
    * Low Resource Utilization (Penggunaan sumber daya rendah).
    * Fixed Routing (Rute tetap yang sudah ditentukan sebelumnya).
    
### 2. Anatomi Header

*Fokus pada bagian penting:*
1.  **Network Address:** Network ID Destination
2.  **Mask:** Subnet Mask Destination
3.  **Next Hop:** Next Hop Address


### 3. Mekanisme Kerja (Mermaid Diagram)
Bagaimana static routing mengirim dan menerima data?


```mermaid
graph LR
    subgraph LAN_A [Network 192.168.1.0/24]
        PC1[PC-A]
    end

    PC1 --- R1[Router A]
    
    R1 -- "Static Route: 192.168.2.0/24 via 10.10.10.2" --> R2[Router B]
    
    R2 --- PC2[PC-B]

    subgraph LAN_B [Network 192.168.2.0/24]
        PC2
    end

    style R1 fill:#f96,stroke:#333,stroke-width:2px
    style R2 fill:#f96,stroke:#333,stroke-width:2px
    style LAN_A fill:#e1f5fe,stroke:#01579b
    style LAN_B fill:#e1f5fe,stroke:#01579b
```

### 4. Network Labs: Implementation & Hands-on

::: tip Multi Vendor Coming soons
More content coming soon! We are still focusing on Cisco Mastery. Check back later for updates.
