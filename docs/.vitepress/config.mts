import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "id-ID",
  title: "Oktanetflow",
  description: "Personal Knowledge Summary & Network Visualization",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: "/oktanetflow.png",
    siteTitle: "Oktanetflow",
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    nav: [
      {
        text: "Docs",
        activeMatch: "/guide/",
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Knowledge Base", link: "/guide/network-basics" },
          { text: "Archive", link: "/guide/archive" },
        ],
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
            ],
          },
        ],
      },
      {
        text: "Tools",
        items: [
          { text: "VLSM Calculator", link: "/tools/vlsm" },
          { text: "Topology Maker", link: "/tools/visualizer" },
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
        {
          text: "Fundamentals",
          items: [
            { text: "Apa itu Oktanetflow?", link: "/guide/introduction" },
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Network Basics", link: "/guide/network-basics" },
            { text: "Human-Written Archive", link: "/guide/archive" },
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
          ],
        },
      ],

      // Sidebar Khusus Cisco (Hanya tampil
      // saat buka path /ecosystem/cisco/...)
      "/ecosystem/cisco/": [
        {
          text: "Cisco Mastery",
          collapsed: false,

          items: [
            { text: "← Back to Ecosystem", link: "/ecosystem/index" },
            { text: "Introduction", link: "/ecosystem/cisco/index" },
            { text: "Routing Concepts", link: "/ecosystem/cisco/routing" },
          ],
        },

        {
          text: "Network Labs",
          collapsed: false, // User bisa buka-tutup menu ini
          items: [
            {
              text: "Lab 01: Dasar VLAN & Trunking",
              link: "/ecosystem/cisco/labs/lab-vlan",
            },
            {
              text: "Lab 02: Inter-VLAN Routing",
              link: "/ecosystem/cisco/labs/lab-inter-vlan",
            },
            {
              text: "Lab 03: OSPF Single Area",
              link: "/ecosystem/cisco/labs/lab-ospf",
            },
            {
              text: "Lab 04: Standard ACL Security",
              link: "/ecosystem/cisco/labs/lab-acl",
            },
            {
              text: "Lab 05: NAT & PAT Configuration",
              link: "/ecosystem/cisco/labs/lab-nat",
            },
          ],
        },
      ],

      // Sidebar Khusus MikroTik (Hanya tampil saat buka path /ecosystem/mikrotik/...)
      "/ecosystem/mikrotik/": [
        {
          text: "MikroTik Essentials",
          collapsed: false,
          items: [
            { text: "← Back to Ecosystem", link: "/ecosystem/index" },
            { text: "Introduction", link: "/ecosystem/mikrotik/index" },
            { text: "Routing Concepts", link: "/ecosystem/mikrotik/routing" },

            {
              text: "Network Labs",
              collapsed: false, // User bisa buka-tutup menu ini
              items: [
                {
                  text: "Lab 01: Dasar VLAN & Trunking",
                  link: "/ecosystem/mikrotik/labs/lab-vlan",
                },
                {
                  text: "Lab 02: Inter-VLAN Routing",
                  link: "/ecosystem/mikrotik/labs/lab-inter-vlan",
                },
                {
                  text: "Lab 03: OSPF Single Area",
                  link: "/ecosystem/mikrotik/labs/lab-ospf",
                },
                {
                  text: "Lab 04: Standard ACL Security",
                  link: "/ecosystem/mikrotik/labs/lab-acl",
                },
                {
                  text: "Lab 05: NAT & PAT Configuration",
                  link: "/ecosystem/mikrotik/labs/lab-nat",
                },
              ],
            },
          ],
        },
      ],

      // Sidebar Khusus Juniper (Hanya tampil saat buka path /ecosystem/juniper/...)
      "/ecosystem/juniper/": [
        {
          text: "Juniper Lab",
          collapsed: false,
          items: [
            { text: "← Back to Ecosystem", link: "/ecosystem/index" },
            { text: "Introduction", link: "/ecosystem/juniper/index" },
            { text: "Routing Concepts", link: "/ecosystem/juniper/routing" },
          ],
        },
        {
          text: "Network Labs",
          collapsed: false, // User bisa buka-tutup menu ini
          items: [
            {
              text: "Lab 01: Dasar VLAN & Trunking",
              link: "/ecosystem/juniper/labs/lab-vlan",
            },
            {
              text: "Lab 02: Inter-VLAN Routing",
              link: "/ecosystem/juniper/labs/lab-inter-vlan",
            },
            {
              text: "Lab 03: OSPF Single Area",
              link: "/ecosystem/juniper/labs/lab-ospf",
            },
            {
              text: "Lab 04: Standard ACL Security",
              link: "/ecosystem/juniper/labs/lab-acl",
            },
            {
              text: "Lab 05: NAT & PAT Configuration",
              link: "/ecosystem/juniper/labs/lab-nat",
            },
          ],
        },
      ],

      "/tools/": [
        {
          text: "Interactive Tools",
          items: [
            { text: "VLSM Calculator", link: "/tools/vlsm" },
            { text: "Topology Maker", link: "/tools/visualizer" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/username/oktanetflow" },
    ],

    footer: {
      message: "Human Written Content.",
      copyright: `Copyright © ${new Date().getFullYear()} Oktanetflow`,
    },
  },
});
