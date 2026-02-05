---
outline: deep
---

# TCP/UDP Essentials <Badge type="warning" text="WIP" />


::: warning 🚧 Under Construction
This page is being actively developed. Content may be incomplete.

**Status:** Draft  
**Last updated:** Feb 2026  
**ETA:** Feb 2026
:::

## TCP

### 1. Konsep & Analogi
::: info Definisi Singkat
TCP adalah protokol transport yang menjamin data sampai dengan urut dan selamat (reliable).
:::

* **Analogi:** Bayangkan percakapan telepon. "Halo, dengar saya?" -> "Ya, saya dengar." -> "Oke, saya mulai bicara."
* **Karakteristik Utama:**
    * Connection-oriented (Harus kenalan dulu).
    * Reliable (Ada garansi sampai).
    * Flow Control (Tidak membanjiri penerima).

### 2. Anatomi Header


*Fokus pada bagian penting:*
1.  **Sequence Number (32 bit):** Nomor urut paket (agar bisa disusun ulang).
2.  **Acknowledgment (32 bit):** Tanda terima ("Paket nomor 10 sudah sampai!").
3.  **Control Flags (1 bit each):** Lampu indikator status (SYN, ACK, FIN, RST).

### 3. Mekanisme Kerja (Mermaid Diagram)
Bagaimana TCP memulai koneksi (3-Way Handshake)?


```mermaid
sequenceDiagram
    Client-->>+Web-server: Send SYN Seq number = A
    Web-server-->>+Client: Send SYN number = B ACK Seq number = B
    Client-->>+Web-server: Seq number = A+1 ACK number = B+1
```
