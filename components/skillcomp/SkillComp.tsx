"use client"
import InfiniteMenu from './InfiniteMenu'

export default function SkillComp(){
const items = [
  {
    image: 'data:image/png;base64,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',
    link: 'https://www.typescriptlang.org/',
    title: 'typescript',
    description: 'for writing frontend and backend'
  },
  {
    image: 'https://miro.medium.com/v2/0*VRlI0n8V_zvnoKpB.jpg',
    link: 'https://www.prisma.io/',
    title: 'prisma ORM',
    description: 'for postgres dbs'
  },
  {
    image: 'https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp',
    link: 'https://nextjs.org/',
    title: 'Nextjs',
    description: 'Full stack framework.. best as of now !'
  }, {
    image: 'https://pbs.twimg.com/profile_images/1584620135490338816/tCCcROZD_200x200.png',
    link: 'https://turborepo.com/',
    title: 'turborepo',
    description: 'great orchestrator for production level apps'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscr4Nfid4bYxU8cUAlwpcvGLX6LgilTOOng&s',
    link: 'https://www.docker.com/',
    title: 'Docker',
    description: 'Container runtime.its really great !'
  },
  {
    image: 'https://encore.cloud/assets/resources/kubernetes_cover.png',
    link: 'https://kubernetes.io/',
    title: 'kubernetes (k8s)',
    description: 'Container Orchestrator'
  },
  {
    image: 'https://avatars.githubusercontent.com/u/5430905?s=200&v=4',
    link: 'https://www.rust-lang.org/',
    title: 'rust',
    description: 'great for writing low level code'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-9UcmdlTNEjI3UsHAvFc3UGZynkgiXBKKg&s',
    link: 'https://www.anchor-lang.com/docs',
    title: 'Anchor',
    description: 'framework for writing smart contracts on solana'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    link: 'https://isocpp.org/',
    title: 'c++',
    description: 'for DSA ... '
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s',
    link: 'https://react.dev/',
    title: 'react',
    description: 'writing frontend '
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5fBXn7gdNf-cAfk84sref9G_Rc8RrjnB6g&s',
    link: 'https://soliditylang.org/',
    title: 'Solidity',
    description: 'smart contracts in ethereum'
  },
];
return (
<div style={{ height: '600px',width : '1200px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
)
}