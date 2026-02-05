---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://www.github.com/dimas-oktavian17.png',
    name: 'Dimas Oktavian',
    title: 'Pendiri @ Oktanetflow',
    links: [
      { icon: 'github', link: 'https://github.com/Dimas-oktavian17', label: 'GitHub' }
    ]
  },
  // {
  //   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Contributors',
  //   name: 'Community Contributors',
  //   title: 'Network Engineers & Educators',
  //   desc: 'Dedicated professionals contributing to network knowledge base and implementations.'
  // }
]

// const maintainers = [
//   {
//     avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cisco',
//     name: 'Cisco Specialist',
//     title: 'Cisco Routing & Security',
//     desc: 'Expert in Cisco router configurations, routing protocols, and network security.'
//   },
//   {
//     avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juniper',
//     name: 'Juniper Specialist',
//     title: 'Juniper Networks',
//     desc: 'Specialist in Juniper routing, switching, and cloud networking solutions.'
//   },
//   {
//     avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mikrotik',
//     name: 'MikroTik Specialist',
//     title: 'MikroTik RouterOS',
//     desc: 'Expert in MikroTik configurations, wireless, and enterprise solutions.'
//   }
// ]

// const advisors = [
//   {
//     avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CloudArch',
//     name: 'Cloud Architect',
//     title: 'Cloud & Security Advisor',
//     desc: 'Guides cloud integration and security best practices for network infrastructure.'
//   },
//   {
//     avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DevOps',
//     name: 'DevOps Engineer',
//     title: 'Infrastructure & Automation',
//     desc: 'Contributes to automation tools and infrastructure-as-code implementations.'
//   }
// ]

// const partners = [
//   {
//     avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cisco',
//     name: 'Cisco Learning',
//     title: 'Technical Partner',
//     desc: 'Supporting Cisco training materials and certifications.'
//   },
//   {
//     avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juniper',
//     name: 'Juniper Community',
//     title: 'Community Partner',
//     desc: 'Collaborating on Juniper networking knowledge base.'
//   },
//   {
//     avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OpenSource',
//     name: 'Open Source Network',
//     title: 'Technology Partner',
//     desc: 'Building open-source network tools and documentation.'
//   }
// ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Tim Kami</template>
    <template #lead>
      Oktanetflow adalah open-source knowledge base yang dikelola secara mandiri namun terbuka bagi publik. Kami mengundang Anda untuk berkolaborasi, berbagi dokumentasi, dan memperbaiki literasi teknologi bersama-sama. 
    </template>
  </VPTeamPageTitle>

  <VPTeamPageSection>
    <template #title>Core Team</template>
    <template #lead>Pendiri dalam mendorong visi dan pengembangan Oktanetflow.</template>
    <template #members>
      <VPTeamMembers :members="coreMembers" />
    </template>
  </VPTeamPageSection>

  <!-- <VPTeamPageSection>
    <template #title>Maintainers</template>
    <template #lead>Specialized experts maintaining and expanding our vendor-specific content and documentation.</template>
    <template #members>
      <VPTeamMembers :members="maintainers" />
    </template>
  </VPTeamPageSection> -->

  <!-- <VPTeamPageSection>
    <template #title>Advisors</template>
    <template #lead>Industry experts providing guidance on best practices and emerging technologies.</template>
    <template #members>
      <VPTeamMembers :members="advisors" />
    </template>
  </VPTeamPageSection> -->

  <!-- <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>Organizations collaborating with us to advance network education and open-source networking tools.</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection> -->
</VPTeamPage> 
