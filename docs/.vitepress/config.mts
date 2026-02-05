import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "id-ID",
  title: "Oktanetflow",
  description: "Personal Knowledge Summary & Network Visualization",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  // internationalization
  locales: {
    root: {
      label: "Indonesia",
      lang: "id",
    },
    en: {
      label: "English",
      lang: "en",
    },
  },
  themeConfig: {
    logo: "/oktanetflow.png",
    siteTitle: "Oktanetflow",
    lastUpdated: {
      text: "Last Updated:",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "medium",
      },
    },
    nav: [
      {
        text: "Docs",
        activeMatch: "/guide/",
        items: [{ text: "Guide", link: "/guide/introduction" }],
      },
      {
        text: "Ecosystem",
        activeMatch: "/ecosystem/",
        items: [
          {
            text: "Device Based",
            items: [
              { text: "Cisco Mastery", link: "/ecosystem/cisco/index" },
              {
                text: "MikroTik Essentials",
                link: "/ecosystem/mikrotik/index",
              },
              { text: "Juniper Lab", link: "/ecosystem/juniper/index" },
              { text: "Ruijie Lab", link: "/ecosystem/ruijie/index" },
            ],
          },
        ],
      },
      {
        text: "Tools",
        items: [
          { text: "VLSM Calculator", link: "/tools/vlsm" }
        ],
      },
      {
        text: "About",
        items: [
          { text: "The Project", link: "/about/project" },
          { text: "Team", link: "/about/team" },
          { text: "Changelog", link: "/about/changelog" },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        // Getting Started Section
        {
          text: "Getting Started",
          items: [{ text: "Introduction", link: "/guide/introduction" }],
        },
        // Essential Networking Concepts Section
        {
          text: "Essential",
          items: [
            { text: "TCP/UDP Concepts", link: "/guide/essentials/tcp-udp" },
          ],
        },
        // Layer 2 Section
        {
          text: "Layer 2",
          items: [
            { text: "Switch Concepts", link: "/guide/layer-2/switch-concept" },
            { text: "VLANs", link: "/guide/layer-2/vlans" },
            { text: "STP (Spanning Tree)", link: "/guide/layer-2/stp" },
          ],
        },
        // Layer 2 Section
        {
          text: "Layer 3",
          items: [
            { text: "Routing Concepts", link: "/guide/layer-3/routing" },
            { text: "Static Routing", link: "/guide/layer-3/static-routing" },
            { text: "Dynamic Routing", link: "/guide/layer-3/dynamic-routing" },
          ],
        },
      ],
      // Sidebar Utama (Tampil jika berada di root ecosystem)
      "/ecosystem/": [
        {
          text: "Ecosystem Overview",
          items: [
            { text: "Cisco Mastery", link: "/ecosystem/cisco/index" },
            { text: "MikroTik Essentials", link: "/ecosystem/mikrotik/index" },
            { text: "Juniper Lab", link: "/ecosystem/juniper/index" },
            { text: "Ruijie Lab", link: "/ecosystem/ruijie/index" },
          ],
        },
      ],

      // Sidebar Khusus Cisco (Hanya tampil
      // saat buka path /ecosystem/cisco/...)
      "/ecosystem/cisco/": [
        {
          text: "Cisco Mastery",
          collapsed: false,

          items: [{ text: "Introduction", link: "/ecosystem/cisco/index" }],
        },
        {
          text: "Network Labs",
          collapsed: false, // User bisa buka-tutup menu ini
          items: [
            {
              text: "Lab 01: Dasar VLAN & Trunking",
              link: "/ecosystem/cisco/labs/lab-vlan",
            },
          ],
        },
      ],

      // Sidebar Khusus MikroTik (Hanya tampil saat buka path /ecosystem/mikrotik/...)
      "/ecosystem/mikrotik/": [
        {
          text: "MikroTik Essentials",
          collapsed: false,
          items: [{ text: "Introduction", link: "/ecosystem/juniper/index" }],
        },
        {
          text: "Network Labs",
          collapsed: false, // User bisa buka-tutup menu ini
          items: [
            // {
            //   text: "Lab 01: Dasar VLAN & Trunking",
            //   link: "/ecosystem/juniper/labs/lab-vlan",
            // },
          ],
        },
      ],

      // Sidebar Khusus Juniper (Hanya tampil saat buka path /ecosystem/juniper/...)
      "/ecosystem/juniper/": [
        {
          text: "Juniper Lab",
          collapsed: false,
          items: [{ text: "Introduction", link: "/ecosystem/juniper/index" }],
        },
        {
          text: "Network Labs",
          collapsed: false, // User bisa buka-tutup menu ini
          items: [
            // {
            //   text: "Lab 01: Dasar VLAN & Trunking",
            //   link: "/ecosystem/juniper/labs/lab-vlan",
            // },
          ],
        },
      ],

      // Sidebar Khusus Ruijie (Hanya tampil saat buka path /ecosystem/ruijie/...)
      "/ecosystem/ruijie/": [
        {
          text: "Ruijie Lab",
          collapsed: false,
          items: [{ text: "Introduction", link: "/ecosystem/ruijie/index" }],
        },
        {
          text: "Network Labs",
          collapsed: false, // User bisa buka-tutup menu ini
          items: [
            // {
            //   text: "Lab 01: Dasar VLAN & Trunking",
            //   link: "/ecosystem/juniper/labs/lab-vlan",
            // },
          ],
        },
      ],
      "/tools/": [
        {
          text: "Interactive Tools",
          items: [{ text: "VLSM Calculator", link: "/tools/vlsm" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/username/oktanetflow" },
    ],

    footer: {
      message: "Beta Version",
      copyright: `Copyright © ${new Date().getFullYear()} Oktanetflow`,
    },
  },
});
